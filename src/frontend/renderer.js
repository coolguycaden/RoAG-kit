// Access the index.html from the renderer process
// This file is executed in the renderer process and can access the DOM directly.

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`


const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // 'pong'
  information.innerText += `\nResponse from main process: ${response}`
}

func()