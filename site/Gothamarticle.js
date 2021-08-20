// image pop-up

var articlePicture = document.getElementById("red-carpet1")


articlePicture.onclick = function() {
    
    let container = document.body;
    let newImageWiddow = document.createElement('div');
    container.appendChild(newImageWiddow);
    newImageWiddow.setAttribute('class', 'img-window');
    newImageWiddow.setAttribute('onclick', 'closeimg()')

}