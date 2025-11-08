import { contextBridge, ipcRenderer } from 'electron';
import { __NAMEPASCAL__API } from '../common/declarations/api/__NAME__-api';

const api: __NAMEPASCAL__API = {

}

contextBridge.exposeInMainWorld('__NAMEPASCAL__API', api);