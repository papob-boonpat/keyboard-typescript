import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow | null;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 500,
    webPreferences: {
      preload: __dirname + "/preload.js",
    },
  });
  mainWindow.loadFile("./index.html");
  mainWindow.on("ready-to-show", () => mainWindow?.show());

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
