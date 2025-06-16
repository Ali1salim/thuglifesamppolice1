function showMore(el) {
    var info = el.nextElementSibling;
    if (info.style.display === "block") {
        info.style.display = "none";
        el.textContent = "اعرف أكثر";
    } else {
        info.style.display = "block";
        el.textContent = "اخفِي المعلومات";
    }
}

console.log("موقع قوانين الشرطة التفاعلي جاهز.");