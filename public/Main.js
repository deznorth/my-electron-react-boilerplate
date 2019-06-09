const {app, BrowserWindow} = require('electron');
const path = require('path');

const dev = process.env.NODE_ENV == 'production' ? false : true;

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    if(!dev){
        win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
    } else {
        win.loadURL('http://localhost:3000/');
    }

    
} 

app.on('ready', createWindow);