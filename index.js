const {app, BrowserWindow, ipcMain, Menu,shell,dialog} = require('electron')
let win;
const template = [
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      {role: 'forcereload'},
      {role: 'toggledevtools'},
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'},
      {
        label: 'open', //打开文件
        click() {
          dialog.showOpenDialog({
            defaultpath: '/',
            properties: [ 'openFile' ],

          },function(res){
            console.log(res)
          });
          console.log("zzz");
        }
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More123',
        click () { require('electron').shell.openExternal('https://electronjs.org') }
      }
    ]
  }
]

// if (process.platform === 'darwin') {
//   template.unshift({
//     label: app.getName(),
//     submenu: [
//       {role: 'about'},
//       {type: 'separator'},
//       {role: 'services', submenu: []},
//       {type: 'separator'},
//       {role: 'hide'},
//       {role: 'hideothers'},
//       {role: 'unhide'},
//       {type: 'separator'},
//       {role: 'quit'}
//     ]
//   })

//   // Edit menu
//   template[1].submenu.push(
//     {type: 'separator'},
//     {
//       label: 'Speech',
//       submenu: [
//         {role: 'startspeaking'},
//         {role: 'stopspeaking'}
//       ]
//     }
//   )

//   // Window menu
//   template[3].submenu = [
//     {role: 'close'},
//     {role: 'minimize'},
//     {role: 'zoom'},
//     {type: 'separator'},
//     {role: 'front'}
//   ]
// }

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
const createWindow = () =>{
    win = new BrowserWindow({
        width: 700,
        height: 500,
        show: false,
    });
    win.loadURL(`file://${__dirname}/dist/index.html`);
    win.webContents.openDevTools();
    win.on('closed', () => win = null)
    win.on('ready-to-show', () =>{
        win.show()
        win.focus()
    })
}

Menu.setApplicationMenu(menu)
ipcMain.on('dialog',function() {
  console.log('接受isisMessage')
})
app.on('ready', _ => createWindow())
app.on('window-all-closed', _ => process.platform !== 'darwin'&& app.quit())
app.on('activate', _ => win === null&& createWindow())

//
