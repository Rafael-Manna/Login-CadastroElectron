import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
    cadastro: (listaUser) => ipcRenderer.invoke('cadastro', listaUser),
    login: (pessoa) => ipcRenderer.invoke('login', pessoa)
})

