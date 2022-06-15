'use- strict'
var gCtx
var gElCanvas

function init() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme() // render canvas
}

function renderMeme() {
    const meme = getMeme()
    drawImage(meme)

}

function drawImage(meme) {
    var image = new Image()
    image.src = `img/${meme.selectedImgID}.jpg`
    image.onload = () => {
        gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme)
    }
}

function drawText(meme) {
    const { txt, size, color, strok, pos } = meme.lines[0]
    gCtx.text = txt
    gCtx.lineWidth = 2
    gCtx.fillStyle = color
    gCtx.strokeStyle = strok
    gCtx.font = `${size}px Ariel`
    gCtx.fillText(txt, pos.x, pos.y)
    gCtx.strokeText(txt, pos.x, pos.y)
}