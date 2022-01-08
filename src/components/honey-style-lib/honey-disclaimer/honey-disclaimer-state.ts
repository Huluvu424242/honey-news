/**
 * Eigentlich Teil der Komponente aber ausgelagert weil:
 *
 * To allow efficient bundling, modules using @Component() can only have a single export which is the
 * component class itself. Any other exports should be moved to a separate file. For further
 * information check out: https://stenciljs.com/docs/module-bundling
 *
 * Singleton to hold the Components State
 *
*/
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
