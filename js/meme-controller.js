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
    const { txt, size, color, strok, pos, font } = getMeme()
    gCtx.text = line.txt
    gCtx.lineWidth = 1
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = line.strok
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.fillText(line.txt, line.pos.x, line.pos.y)
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
}

// Handle event Update line text
function onSetlineTxt(event) {
    const txt = event.target.value
    updateMeme('txt', txt)
    renderMeme()
}

function drawRect(x, y, xEnd, yEnd, color) {
    gCtx.beginPath()
    gCtx.rect(x, y, xEnd, yEnd)
    gCtx.strokeStyle = color
    gCtx.stroke()
    gCtx.closePath()
}

// Handle event Update font 
function onUpdateFont(value) {
    updateMeme('font', value)
    renderMeme()
}

//Handle event Update font size
function onUpdateFontSize(diff) {
    updateFontSize(diff)
    renderMeme()
}
// Handle event Update stroke color
function onUpdateStrokeColor(color) {
    updateMeme('strok', color)
    // updateStrokeColor(color)
    renderMeme()
}

// Handle event Update fill color
function onUpdateFillColor(color) {
    updateMeme('color', color)
    renderMeme()
}

// Handle event Update aligne text 
function onUpdateTextAlignt(value) {
    updateMeme('align', value)
    updateTextAlign(value)
    renderMeme()
}

// Handle event Add new line
function onAddNewLine() {
    addNewLine()
    renderMeme()
}
// Handle event Delete line
function onDeleteLine() {
    deleteLine()
    renderMeme()
}