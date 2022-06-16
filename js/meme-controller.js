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
    drawImage()
    renderText()
}

// Draw image on canvas
function drawImage() {

    const imgId = getSelectedImgID()
    const elImg = document.querySelector(`#img-id-${imgId}`)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

// Render text
function renderText() {
    const meme = getMeme()
    const lines = meme.lines
    lines.map(line => drawText(line))
}

// Draw text on canvas
function drawText(line) {
    const { txt, size, color, strok, pos } = getMeme()
    gCtx.text = line.txt
    gCtx.lineWidth = 1
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = line.strok
    gCtx.font = `${line.size}px Ariel`
    gCtx.fillText(line.txt, line.pos.x, line.pos.y)
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
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

// Update font size
function onUpdateFontSize(diff) {
    console.log(diff)
    updateFontSize(diff)
    renderMeme()
}