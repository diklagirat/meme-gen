'use- strict'

var gMeme
createMeme('1')
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

function getMeme() {
    return gMeme
}