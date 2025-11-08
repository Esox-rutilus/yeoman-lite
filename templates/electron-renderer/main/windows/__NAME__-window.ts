import { BrowserWindow } from 'electron';
import path from 'path';
import { defaultSettings } from './window';

const width = 400;
const height = 650;

const root = path.join(__dirname, '..', '..');

let __NAMEPASCAL__Window: BrowserWindow | null = null;

export function create__NAMEPASCAL__Window() {
  if (__NAMEPASCAL__Window) {
    __NAMEPASCAL__Window.focus();
    __NAMEPASCAL__Window.show();
    return __NAMEPASCAL__Window;
  }

  __NAMEPASCAL__Window = new BrowserWindow({
    ...defaultSettings,
    width: width,
    height: height,
    title: '__NAME__',
    webPreferences: {
      preload: path.join(root, 'preload', '__NAME__-preload.js'),
    },
  });

  __NAMEPASCAL__Window.setBounds({
    width: width,
    height: height,
  });

  // Load your UI
  __NAMEPASCAL__Window.loadFile(path.join(root, 'renderer', '__NAME__', 'index.html'));

  __NAMEPASCAL__Window.on('closed', () => {
    __NAMEPASCAL__Window = null;
  });

  if (process.env.NODE_ENV !== 'production') {
    __NAMEPASCAL__Window.webContents.openDevTools({ mode: 'detach' });
  }

  return __NAMEPASCAL__Window;
}

export function get__NAMEPASCAL__Window() {
  return __NAMEPASCAL__Window;
}