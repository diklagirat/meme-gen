'use- strict'
var gCtx
var gElCanvas

function init() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    renderMeme()
}

// Render meme on cavnvas
function renderMeme() {
    const meme = getMeme()
    console.log(meme)
    drawImage(meme)
}

// Draw image on canvas
function drawImage(meme) {
    const mem = meme.lines[0]
    console.log(mem)
    var image = new Image()
    image.src = `img/${meme.selectedImgID}.jpg`
    image.onload = () => {
        gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme)
        //TODO: create dynamic line width -270
        drawRect(mem.pos.x - 30, mem.pos.y - 40, 270, mem.size + 20, mem.color)
    }
}

// Draw text on canvas
function drawText(meme) {
    const { txt, size, color, strok, pos } = meme.lines[0]
    gCtx.text = txt
    gCtx.lineWidth = 1
    gCtx.fillStyle = color
    gCtx.strokeStyle = strok
    gCtx.font = `${size}px Ariel`
    gCtx.fillText(txt, pos.x, pos.y)
    gCtx.strokeText(txt, pos.x, pos.y)
}

// Update line text
function onSetlineTxt(event) {
    setLineTxt(event.target.value)
    renderMeme()
}

function drawRect(x, y, xEnd, yEnd, color) {
    gCtx.beginPath()
    gCtx.rect(x, y, xEnd, yEnd)
    gCtx.strokeStyle = color
    gCtx.stroke()
    gCtx.closePath()
}
