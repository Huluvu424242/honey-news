export class Logger {

  protected isLoggingActive: boolean = true;

  public disableLogging(): void {
    this.isLoggingActive = false;
  }

  public enableLogging(): void {
    this.isLoggingActive = true;
  }

  public toggleLogging(enableLogging: boolean) {
    if (enableLogging) {
      this.enableLogging();
    } else {
      this.disableLogging();
    }
  }

  constructor(enableLogging: boolean = true) {
    this.isLoggingActive = enableLogging;
  }

  public logMessage(message) {
    if (console && this.isLoggingActive) {
      console.log(message);
    }
  }

  public debugMessage(message) {
    if (console && this.isLoggingActive) {
      console.debug(message);
    }
  }

  public errorMessage(message) {
    if (console && this.isLoggingActive) {
      console.error(message);
    }
  }

  public infoMessage(message) {
    if (console && this.isLoggingActive) {
      console.info(message);
    }
  }

}

export const logService: Logger = new Logger();
