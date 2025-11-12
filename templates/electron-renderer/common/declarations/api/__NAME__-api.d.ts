export type __NAMEPASCAL__API = {
    closeWindow: () => void,
}

declare global {
  interface Window {
    __NAMEPASCAL__API: __NAMEPASCAL__API;
  }
}