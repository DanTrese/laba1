const img = document.getElementById("img");
const list = document.getElementById("list");

list.addEventListener("change", () => {
    const selimg = list.value;
    img.src = `images/${selimg}`;
    document.getElementById("altName").value = null;
});

function updimg() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const border = document.getElementById("border").value;
    const altName = document.getElementById("altName").value;
    const selimg = list.value;

    img.style.width = width ? `${width}px` : "auto";
    img.style.height = height ? `${height}px` : "auto";
    img.style.border = `${border}px solid black`;
    img.alt = altName;
    document.getElementById(id=`name${selimg.charAt(0)}`).textContent = img.alt;
}
