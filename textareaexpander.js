/*

 Vanilla JavaScript Textarea Fullscreen Editor v1.0
 Fullscreen text editor plugin for vanilla JavaScript.

 */
//document.addEventListener("load", (event) => {
//    textareaExpanderFunctions()
//})
const textareaExpanderFunctions = () => {
    let textarealist = document.querySelectorAll("textarea");
    for (var i = 0; i < textarealist.length; i++) {
        let div = document.createElement("div")
        div.setAttribute("id", "textareaExpander" + i)
        div.classList.add("textareaExpander")
        let label = document.createElement("label")
        label.classList.add("textareaExpanderLabel")
        label.innerText = "Click outside to close"
        textarealist[i].parentElement.insertBefore(div, textarealist[i])
        div.innerHTML = "<a id='expanderButton" + i + "'><i class='bootstrapIcons bi-arrows-fullscreen'></i></a>"
        div.appendChild(label)
        div.appendChild(textarealist[i])
        document.getElementById("expanderButton" + i).addEventListener("click", function (e) {
            div.classList.add("taExpanded")
            e.stopPropagation()
        })
        div.addEventListener("click", function (e) {
            e.target.classList.remove("taExpanded")
            e.stopPropagation()
        })
        label.addEventListener("click", function (e) {
            div.classList.remove("taExpanded")
            e.stopPropagation()
        })
    }
}
