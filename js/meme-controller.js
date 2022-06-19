'use- strict'
var gCtx
var gElCanvas
var gFocuse


function init() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')

    renderGallery()
    renderMeme()
}

// Render meme on cavnvas
function renderMeme() {
    drawImage()

    if (gFocuse) drawRect()
    gFocuse = true

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
    if (lines.legnth === 0) return
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

function drawRect() {
    const meme = getMeme()
    if (meme.lines.legnth === 0) return

    const lineIdx = meme.selectedLineIdx
    var line = meme.lines[lineIdx]
    var { x, y } = line.pos

    gCtx.beginPath()
    gCtx.rect(x - 20, y - 35, 320, 50)
    gCtx.setLineDash([])
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
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
    switchLine()
    renderMeme()
}
// Handle event Delete line
function onDeleteLine() {
    deleteLine()
    renderMeme()
}

// Handle event switch line 
function onSwitchLine() {
    switchLine()
    renderMeme()
}

// Update text pos up/down 
function onUpdateTextPos(diff) {
    updateTextPos(diff)
    renderMeme()
}

// Download meme
function onDownload(elLink) {
    gFocuse = false
    renderMeme()
    const imgCotent = gElCanvas.toDataURL()

    elLink.href = imgCotent
    elLink.download = 'my-meme'
}

// Share on facebook
function onShareFaceBook() {
    uploadImg()
}