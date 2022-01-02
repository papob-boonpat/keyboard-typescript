import { contextBridge } from "electron";
import { cpus } from "os";

export const API = {
  threads: cpus().length,
};
contextBridge.exposeInMainWorld("api", API);
