'use- strict'
var gCtx
var gElCanvas

function init() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
}

function renderMeme() {
    var image = new Image()
    image.src = `img/1.jpg`
    image.onload = () => {
        gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}