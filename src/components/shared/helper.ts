export interface ThemeListener {
  next: (theme: string) => void;
  error: (error: string) => void;
  complete: () => void;
}

export const printWarning = (message: string) => {
  if (console) {
    console.warn(message);
  }
};

export const printError = (message: string) => {
  if (console) {
    console.error(message);
  }
};

export const printDebug = (message: string) => {
  if (console) {
    console.debug(message);
  }
};
