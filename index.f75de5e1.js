"use strict";
const largeImg = document.querySelector("#largeImg");
const gallery = document.querySelector("#thumbs");
gallery.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest(".list-item__link");
    const imgLink = link.getAttribute("href");
    largeImg.setAttribute("src", imgLink);
});

//# sourceMappingURL=index.f75de5e1.js.map
