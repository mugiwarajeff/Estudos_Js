
const colors = {
    body: "#25b6da",
    p: "#388e3c",
    div: "#1565c0",
    span: "#e53935",
    section: "#f67809",
    ul: "#5e35b1",
    ol: "#fbc02d",
    header: "#d81b60",
    nav: "#64dd17",
    main: "#00acc1",
    padrao: "#696969",
    getColor(tag){
        return this[tag] ? this[tag]: this.padrao
    }

}
document.querySelectorAll(".tag").forEach(elemento =>{
    const tagName = elemento.tagName.toLowerCase();

    elemento.style.borderColor = colors.getColor(tagName)

    if (!elemento.classList.contains("nolabel")){
        const label = document.createElement("label");

        label.style.backgroundColor = colors.getColor(tagName)
        label.innerHTML = tagName;
        elemento.insertBefore(label, elemento.childNodes[0]);
    }
})