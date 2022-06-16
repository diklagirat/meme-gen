'use- strict'

var gMeme
var gImages

gMeme = _createMeme()
gImages = _createImages()

// Create meme
function _createMeme() {
    return {
        selectedImgID: 1,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Enter text here..',
                font: 'impact',
                size: 40,
                align: 'left',
                color: 'white',
                strok: 'white',
                border: 'white',
                pos: {
                    x: 100,
                    y: 80
                }
            },
            {
                txt: 'Enter text here..',
                font: 'impact',
                size: 40,
                align: 'left',
                color: 'white',
                strok: 'white',
                border: 'white',
                pos: {
                    x: 100,
                    y: 380
                }
            }
        ]
    }
}
// Read meme
function getMeme() {
    return gMeme
}

// Update meme
function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
}

// Create images
function _createImages() {
    return [
        {
            id: 1,
            imgUrl: `img/1.jpg`
        },
        {
            id: 2,
            imgUrl: `img/2.jpg`
        },
        {
            id: 3,
            imgUrl: `img/3.jpg`
        },
        {
            id: 4,
            imgUrl: `img/4.jpg`
        }
    ]
}
// Read images
function getImages() {
    return gImages
}

// Update meme image id
function updateMemeImgId(imgId) {
    gMeme.selectedImgID = imgId
}

// Get meme image id
function getSelectedImgID() {
    return gMeme.selectedImgID
}

// Update font size
function updateFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}

// Update meme
function updateMeme(key, value) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx][key] = value
}

// Update Text align
function updateTextAlign(value) {
    const lineIdx = gMeme.selectedLineIdx
    if (value === 'left') gMeme.lines[lineIdx].pos.x = 45
    else if (value === 'right') gMeme.lines[lineIdx].pos.x = 200
    else if (value === 'center') gMeme.lines[lineIdx].pos.x = 120
}

// Add new  line
function addNewLine() {
    const newLine = {
        txt: 'Enter text here..',
        font: 'impact',
        size: 40,
        align: 'left',
        color: 'white',
        strok: 'white',
        border: 'white',
        pos: {
            x: 100,
            y: 220
        }
    }
    gMeme.lines.push(newLine)
}

// Delete line
function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    console.log(gMeme)

}