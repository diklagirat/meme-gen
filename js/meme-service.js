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
                txt: 'Hey you..',
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
                txt: 'Start edit..',
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

function getImages() {
    return gImages
}

function updateMemeImgId(imgId) {
    gMeme.selectedImgID = imgId
}

function getSelectedImgID() {
    return gMeme.selectedImgID
}

function updateFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}