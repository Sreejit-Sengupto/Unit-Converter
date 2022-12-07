let btn = document.getElementById("convert-btn");
let btnSection = document.getElementById("btn-section");
let lnEl = document.getElementById("length");
let vlEl = document.getElementById("volume");
let msEl = document.getElementById("mass");
let num = document.getElementById("input-num").value;
let isClicked = false;

function getValue() {
    let num = document.getElementById("input-num").value;
    console.log(num);

    /* Conversions */

    /* Lengths */
    const inFeet = Math.round((num * 3.281) * 100) / 100;
    const inMeter = Math.round((num / 3.281) * 100) / 100;

    /* Volumes */
    const inGallons = Math.round((num * 0.264) * 100) / 100;
    const inLitre = Math.round((num / 0.264) * 100) / 100;

    /* Mass */
    const inPounds = Math.round((num * 2.204) * 100) / 100;
    const inKilo = Math.round((num / 2.204) * 100) / 100;
    
    /* Making changes in the DOM */
    lnEl.innerHTML += `<p>${num} meters = ${inFeet} feet | ${num} feet = ${inMeter} meter</p>`
    vlEl.innerHTML += `<p>${num} litres = ${inGallons} gallons | ${num} gallons = ${inLitre} litre</p>`
    msEl.innerHTML += `<p>${num} kilos = ${inPounds} pounds | ${num} pounds = ${inKilo} kilos</p>`

    /* Clearing the DOM after one operation */
    isClicked = true;
    if (isClicked) {
        btnSection.innerHTML = `<button class="convert-btn" id="delete-btn">Clear</button>`
        document.getElementById("delete-btn").addEventListener("click", function(){
            clear();
        })
    }
}

function clear() {
    document.getElementById("input-num").value = "";
    lnEl.innerHTML = `<h1>Length (Meter/Feet)</h1>`
    vlEl.innerHTML = `<h1>Volume (Litre/Gallons)</h1>`
    msEl.innerHTML = `<h1>Mass (Kilograms/Pounds)</h1>`
    btnSection.innerHTML = `<button class="convert-btn" id="convert-btn" onclick="getValue()">Convert</button>`
}

