enum LogLevel {
  ERROR = "error",
  WARNING = "warn",
  DEBUG = "debug",
  INFO = "info",
  LOG = "log"
}

export class LogService {

  protected isLoggingActive: boolean = true;

  public disableLogging(): void {
    this.isLoggingActive = false;
  }

  public enableLogging(): void {
    this.isLoggingActive = true;
  }

  public setLogging(enableLogging: boolean) {
    if (enableLogging) {
      this.enableLogging();
    } else {
      this.disableLogging();
    }
  }

  constructor(enableLogging: boolean = true) {
    this.isLoggingActive = enableLogging;
  }

  protected log(level: LogLevel, message: string, ...params) {
    if (console && this.isLoggingActive) {
      console[level.valueOf()](message, params);
    }
  }

  public logMessage(message: string, ...params) {
    this.log(LogLevel.LOG, message, params);
  }

  public errorMessage(message: string, ...params) {
    this.log(LogLevel.ERROR, message, params);
  }

  public warnMessage(message: string, ...params) {
    this.log(LogLevel.WARNING, message, params);
  }

  public debugMessage(message: string, ...params) {
    this.log(LogLevel.DEBUG, message, params);
  }

  public infoMessage(message: string, ...params) {
    this.log(LogLevel.INFO, message, params);
  }




}

export const logService: LogService = new LogService();
