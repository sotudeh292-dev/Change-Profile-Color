const $ = document
const colorBtns = $.querySelectorAll(".btn")

colorBtns.forEach(function(colorbtn){
    colorbtn.addEventListener("click", function(event){
        let newColor = event.target.dataset.color
        document.documentElement.style.setProperty("--theme-color", newColor)
    })
})