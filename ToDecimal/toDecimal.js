let btn = document.getElementById("convert-btn");
let btnSection = document.getElementById("btn-section");
let dec = document.getElementById("decimal");
let oct = document.getElementById("octal");
let hex = document.getElementById("hexadecimal");
let num = document.getElementById("input-num").value;
let isClicked = false;

function getValue() {
    let num = document.getElementById("input-num").value.toString();
    console.log(num);

    /* Conversions */

    /* Decimal Conversion */
    function toDecimal(num) {
        let n = removeLead(num);
        let sum = 0;
        let size = noOfDigits(n)
        for (let i = 0; i < size; i++) {
            let rem = n % 10;
            n /= 10;
            sum += rem * Math.pow(2,i);
        }
        return Math.floor(sum);
    }

    // /* Mass */
    // const inPounds = Math.round((num * 2.204) * 100) / 100;
    // const inKilo = Math.round((num / 2.204) * 100) / 100;
    
    /* Making changes in the DOM */
    dec.innerHTML += `<p>Binary: ${num} || Decimal: ${toDecimal(num)}</p>`
    // oct.innerHTML += `<p>${toOctal(num)}</p>`
    // hex.innerHTML += `<p>${num} kilos = ${inPounds} pounds | ${num} pounds = ${inKilo} kilos</p>`

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
    dec.innerHTML = `<h1>Decimal</h1>`
    // oct.innerHTML = `<h1>Octal</h1>`
    // hex.innerHTML = `<h1>Hexadecimal</h1>`
    btnSection.innerHTML = `<button class="convert-btn" id="convert-btn" onclick="getValue()">Convert</button>`
}

function removeLead(str) {
    let firstIndex = str.indexOf('1')
    let ans = parseInt(str.substring(firstIndex, str.length))
    return ans;
}

function noOfDigits(n) {
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
}
