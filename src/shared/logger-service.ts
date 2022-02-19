enum LogLevel {
  ERROR = "error",
  DEBUG = "debug",
  INFO = "info",
  LOG = "log"
}

export class LoggerService {

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

  public debugMessage(message: string, ...params) {
    this.log(LogLevel.DEBUG, message, params);
  }

  public errorMessage(message: string, ...params) {
    this.log(LogLevel.ERROR, message, params);
  }

  public infoMessage(message: string, ...params) {
    this.log(LogLevel.INFO, message, params);
  }

}

export const logService: LoggerService = new LoggerService();
