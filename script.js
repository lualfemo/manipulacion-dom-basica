const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#resultado");


// function btnOnclick() {
//     console.log("se hizo click en el botón");
// }
// function inputOnchange() {
//     console.log("Cam 1  |bió el input");
// }

btn.addEventListener("click", btnOnclick);

function btnOnclick() {
    // console.log(input1.value + input2.value);
    const sumaInputs = input1.value + " " + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}

// const p = document.querySelector("p");
// const parrafito = document.querySelector(".parrafito");
// const pid = document.querySelector("#pid");


// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// //h1.innerHTML = "Patito <br> Feo"

// h1.innerText = "Patito <br> Feo"

// // console.log(h1.getAttribute("ejemplo"));
// // h1.setAttribute("class", "rojo");

// h1.classList.add("rojo");
// h1.classList.remove("negro");
// // h1.classList.toggle("negro");
// // console.log(h1.classList.contains("negro"));

// input.value = "1472583690";

// //console.log(document.createElement("img"));

// console.log(document.createElement("span"));

// const img = document.createElement("img");
// img.setAttribute("src", "https://media.istockphoto.com/id/1291049124/es/foto/concepto-para-depurar-y-corregir-errores-en-el-c%C3%B3digo.jpg?s=2048x2048&w=is&k=20&c=pHUZ-JKVpDu-BRIIcs4pN30nO6wv38QtCe2Ad3uPmWc=");

// console.log(img);
// pid.innerHTML = "";

// pid.append(img);




