const { app, BrowserWindow, ipcMain} = require('electron/main')
const path = require('node:path')

// Automatically update electron app from github
require('update-electron-app')()

// This function creates a new browser window and loads the index.html file into it.
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(path.join(__dirname, 'index.html'))
}

// This method will be called when Electron has finished initialization and is ready to create browser windows.
app.whenReady().then(() => {

  // Register a listener for the 'ping' event from the renderer process.
  ipcMain.handle('ping', () => 'pong')
  

  // Create the browser window.
  createWindow()

  // On macOS, it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed, except on macOS. There, it's common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})