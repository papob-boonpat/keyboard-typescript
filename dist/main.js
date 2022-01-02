"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let mainWindow;
const createWindow = () => {
    mainWindow = new electron_1.BrowserWindow({
        width: 1000,
        height: 500,
        webPreferences: {
            preload: __dirname + "/preload.js",
        },
    });
    mainWindow.loadFile("./index.html");
    mainWindow.on("ready-to-show", () => mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.show());
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        electron_1.app.quit();
});
