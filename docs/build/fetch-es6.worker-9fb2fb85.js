import { f as consoleError } from './index-6cdc66d3.js';

const isInstanceOf = (value, className) => {
  const C = globalThis[className];
  return C != null && value instanceof C;
};
const getTransferables = (value) => {
  if (value != null) {
  if (
    isInstanceOf(value, "ArrayBuffer") ||
    isInstanceOf(value, "MessagePort") ||
    isInstanceOf(value, "ImageBitmap") ||
    isInstanceOf(value, "OffscreenCanvas")
  ) {
    return [value];
  }
  if (typeof value === "object") {
    if (value.constructor === Object) {
    value = Object.values(value);
    }
    if (Array.isArray(value)) {
    return value.flatMap(getTransferables);
    }
    return getTransferables(value.buffer);
  }
  }
  return [];
};

let pendingIds = 0;
let callbackIds = 0;
const pending = new Map();
const callbacks = new Map();

const createWorker = (workerPath, workerName, workerMsgId) => {
  const worker = new Worker(workerPath, {name:workerName});

  worker.addEventListener('message', ({data}) => {
  if (data) {
    const workerMsg = data[0];
    const id = data[1];
    const value = data[2];

    if (workerMsg === workerMsgId) {
    const err = data[3];
    const [resolve, reject, callbackIds] = pending.get(id);
    pending.delete(id);

    if (err) {
      const errObj = (err.isError)
      ? Object.assign(new Error(err.value.message), err.value)
      : err.value;

      consoleError(errObj);
      reject(errObj);
    } else {
      if (callbackIds) {
      callbackIds.forEach(id => callbacks.delete(id));
      }
      resolve(value);
    }
    } else if (workerMsg === workerMsgId + '.cb') {
    try {
      callbacks.get(id)(...value);
    } catch (e) {
      consoleError(e);
    }
    }
  }
  });

  return worker;
};

const createWorkerProxy = (worker, workerMsgId, exportedMethod) => (
  (...args) => new Promise((resolve, reject) => {
  let pendingId = pendingIds++;
  let i = 0;
  let argLen = args.length;
  let mainData = [resolve, reject];
  pending.set(pendingId, mainData);

  for (; i < argLen; i++) {
    if (typeof args[i] === 'function') {
    const callbackId = callbackIds++;
    callbacks.set(callbackId, args[i]);
    args[i] = [workerMsgId + '.cb', callbackId];
    (mainData[2] = mainData[2] || []).push(callbackId);
    }
  }
  const postMessage = (w) => (
    w.postMessage(
    [workerMsgId, pendingId, exportedMethod, args],
    getTransferables(args)
    )
  );
  if (worker.then) {
    worker.then(postMessage);
  } else {
    postMessage(worker);
  }
  })
);

const workerPromise = import('./fetch-es6.worker-b769b33e.js').then(m => m.worker);
const getFeedsSingleCall = /*@__PURE__*/createWorkerProxy(workerPromise, 'stencil.fetch-es6.worker', 'getFeedsSingleCall');
const loadFeedData = /*@__PURE__*/createWorkerProxy(workerPromise, 'stencil.fetch-es6.worker', 'loadFeedData');
const loadFeedRanking = /*@__PURE__*/createWorkerProxy(workerPromise, 'stencil.fetch-es6.worker', 'loadFeedRanking');

export { createWorker as c, getFeedsSingleCall as g, loadFeedRanking as l };
