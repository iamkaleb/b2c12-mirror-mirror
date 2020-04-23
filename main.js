let textContainer1 = document.getElementById("article1")
let textContainer2 = document.getElementById("article2")

let fieldEl = document.getElementById("message")

fieldEl.addEventListener("keyup", function(event) {
    textContainer1.textContent = event.target.value;
    textContainer2.textContent = event.target.value;
})

