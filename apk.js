function myFunction() {
    var x = document.getElementById("open")
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}

let scrollContainer = document.querySelector('.bungkus')
let kembali = document.getElementById('kembali')
let lanjut = document.getElementById('lanjut')

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

lanjut.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 375;
});

kembali.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 375;
});

function bukaFile() {
    window.open('status.html', '')
}
