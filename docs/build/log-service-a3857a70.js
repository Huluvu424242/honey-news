var LogLevel;
(function (LogLevel) {
  LogLevel["ERROR"] = "error";
  LogLevel["WARNING"] = "warn";
  LogLevel["DEBUG"] = "debug";
  LogLevel["INFO"] = "info";
  LogLevel["LOG"] = "log";
})(LogLevel || (LogLevel = {}));
class LogService {
  constructor(enableLogging = true) {
    this.isLoggingActive = true;
    this.isLoggingActive = enableLogging;
  }
  disableLogging() {
    this.isLoggingActive = false;
  }
  enableLogging() {
    this.isLoggingActive = true;
  }
  setLogging(enableLogging) {
    if (enableLogging) {
      this.enableLogging();
    }
    else {
      this.disableLogging();
    }
  }
  log(level, message, ...params) {
    if (console && this.isLoggingActive) {
      console[level.valueOf()](message, params);
    }
  }
  logMessage(message, ...params) {
    this.log(LogLevel.LOG, message, params);
  }
  errorMessage(message, ...params) {
    this.log(LogLevel.ERROR, message, params);
  }
  warnMessage(message, ...params) {
    this.log(LogLevel.WARNING, message, params);
  }
  debugMessage(message, ...params) {
    this.log(LogLevel.DEBUG, message, params);
  }
  infoMessage(message, ...params) {
    this.log(LogLevel.INFO, message, params);
  }
}
const logService = new LogService();

export { logService as l };
