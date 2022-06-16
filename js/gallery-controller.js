'use- strict'


function renderGallery() {
    const imgs = getImages()
    var strHTML = ''
    imgs.forEach(img =>
        strHTML += `<img src="${img.imgUrl}" id="img-id-${img.id}" onclick="renderImgOnCanvas('${img.id}')"/>`
    )
    document.querySelector('.gallery-container').innerHTML = strHTML
}

function renderImgOnCanvas(imgId) {
    updateMemeImgId(imgId)
    renderMeme()
}