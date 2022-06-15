'use- strict'

var gMeme

createMeme('1')

// Create meme
function createMeme(imgId) {
    gMeme = {
        selectedImgID: imgId,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Hi you!',
                size: 40,
                align: 'left',
                color: 'white',
                strok: 'white',
                border: 'white',
                pos: {
                    x: 100,
                    y: 50
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