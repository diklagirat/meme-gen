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
                strok: 'black',
                border: 'black',
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
                strok: 'black',
                border: 'black',
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
        },
        {
            id: 5,
            imgUrl: `img/5.jpg`
        },
        {
            id: 6,
            imgUrl: `img/6.jpg`
        },
        {
            id: 7,
            imgUrl: `img/7.jpg`
        },
        {
            id: 8,
            imgUrl: `img/8.jpg`
        },
        {
            id: 9,
            imgUrl: `img/9.jpg`
        },
        {
            id: 10,
            imgUrl: `img/10.jpg`
        },
        {
            id: 11,
            imgUrl: `img/11.jpg`
        },
        {
            id: 12,
            imgUrl: `img/12.jpg`
        },
        {
            id: 13,
            imgUrl: `img/13.jpg`
        },
        {
            id: 14,
            imgUrl: `img/14.jpg`
        },
        {
            id: 15,
            imgUrl: `img/15.jpg`
        },
        {
            id: 16,
            imgUrl: `img/16.jpg`
        },
        {
            id: 17,
            imgUrl: `img/17.jpg`
        },
        {
            id: 18,
            imgUrl: `img/18.jpg`
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
        strok: 'black',
        border: 'black',
        pos: {
            x: 100,
            y: 220
        }
    }
    gMeme.lines.push(newLine)
}

// Delete line
function deleteLine() {
    if (gMeme.lines.length === 0) return
    const lineIdx = gMeme.selectedLineIdx

    gMeme.selectedLineIdx = 0
    gMeme.lines.splice(lineIdx, 1)
}

// Switch beetwen lines
function switchLine() {
    if (gMeme.lines.length === 0) return
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++

    var elInput = document.querySelector('.text-input');
    elInput.value = gMeme.lines[gMeme.selectedLineIdx].txt
}

// Update text pos 
function updateTextPos(diff) {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += diff;
}