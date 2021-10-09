import {c as createWorker} from './fetch-es6.worker-46eecd27.js';
import './index-570c9000.js';

const workerName = 'fetch-es6.worker';
const workerMsgId = 'stencil.fetch-es6.worker';
const workerPath = /*@__PURE__*/new URL('fetch-es6.worker-41fcffd4.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
