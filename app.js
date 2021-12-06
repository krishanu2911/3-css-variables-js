const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);
inputs.forEach(input => input.addEventListener("change", handler));
inputs.forEach(input => input.addEventListener("mousemove", handler));
function handler(){
    const suffix = this.dataset.sizing || "";
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
    // console.log(suffix);
}