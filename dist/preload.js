"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const electron_1 = require("electron");
const os_1 = require("os");
exports.API = {
    threads: (0, os_1.cpus)().length,
};
electron_1.contextBridge.exposeInMainWorld("api", exports.API);
