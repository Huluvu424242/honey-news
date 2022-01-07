
class HoneyDisclaimerState {
  public wasRead: boolean = false;

  constructor() {}

  public wasDisclaimerRead() {
    return this.wasRead;
  }
  public setToUserHasRead() {
    this.wasRead=true;
  }
}
export const honeyDisclaimerState = new HoneyDisclaimerState();
