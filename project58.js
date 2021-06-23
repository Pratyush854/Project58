var array = [
    "IMG_2013.JPG",
    "https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif",
    "https://th.bing.com/th/id/OIP.uByOfITW3PpdI_pRx116VwAAAA?pid=ImgDet&rs=1"
];
var x = 0;
function flipImage() {
    document.getElementById("hobbyimg").src=array[x];
    x++;
    if (x == 3) {
        x = 0;
    }
}