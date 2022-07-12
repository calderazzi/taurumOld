let checkbox1 = document.getElementById('agregar1');
    checkbox1.addEventListener("change", validaCheckbox1, false);
    function validaCheckbox1(){
    let checked1 = checkbox1.checked;
    if(checked1){
        let numero1 = document.getElementById("precio1").textContent;
        let num1 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad1").value;
        let sum = (numero1 * multiplicador) + Number(num1);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero1 = document.getElementById("precio1").textContent;
        let num1 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad1").value;
        let res = Number(num1) - (numero1 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox2 = document.getElementById('agregar2');
    checkbox2.addEventListener("change", validaCheckbox2, false);
    function validaCheckbox2(){
    let checked2 = checkbox2.checked;
    if(checked2){
        let numero2 = document.getElementById("precio2").textContent;
        let num2 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad2").value;
        let sum = (numero2 * multiplicador) + Number(num2);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero2 = document.getElementById("precio2").textContent;
        let num2 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad2").value;
        let res = Number(num2) - (numero2 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}
    
let checkbox3 = document.getElementById('agregar3');
    checkbox3.addEventListener("change", validaCheckbox3, false);
    function validaCheckbox3(){
    let checked3 = checkbox3.checked;
    if(checked3){
        let numero3 = document.getElementById("precio3").textContent;
        let num3 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad3").value;
        let sum = (numero3 * multiplicador) + Number(num3);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero3 = document.getElementById("precio3").textContent;
        let num3 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad3").value;
        let res = Number(num3) - (numero3 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox4 = document.getElementById('agregar4');
    checkbox4.addEventListener("change", validaCheckbox4, false);
    function validaCheckbox4(){
    let checked4 = checkbox4.checked;
    if(checked4){
        let numero4 = document.getElementById("precio4").textContent;
        let num4 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad4").value;
        let sum = (numero4 * multiplicador) + Number(num4);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero4 = document.getElementById("precio4").textContent;
        let num4 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad4").value;
        let res = Number(num4) - (numero4 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox5 = document.getElementById('agregar5');
    checkbox5.addEventListener("change", validaCheckbox5, false);
    function validaCheckbox5(){
    let checked5 = checkbox5.checked;
    if(checked5){
        let numero5 = document.getElementById("precio5").textContent;
        let num5 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad5").value;
        let sum = (numero5 * multiplicador) + Number(num5);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero5 = document.getElementById("precio5").textContent;
        let num5 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad5").value;
        let res = Number(num5) - (numero5 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox6 = document.getElementById('agregar6');
    checkbox6.addEventListener("change", validaCheckbox6, false);
    function validaCheckbox6(){
    let checked6 = checkbox6.checked;
    if(checked6){
        let numero6 = document.getElementById("precio6").textContent;
        let num6 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad6").value;
        let sum = (numero6 * multiplicador) + Number(num6);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero6 = document.getElementById("precio6").textContent;
        let num6 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad6").value;
        let res = Number(num6) - (numero6 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox7 = document.getElementById('agregar7');
    checkbox7.addEventListener("change", validaCheckbox7, false);
    function validaCheckbox7(){
    let checked7 = checkbox7.checked;
    if(checked7){
        let numero7 = document.getElementById("precio7").textContent;
        let num7 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad7").value;
        let sum = (numero7 * multiplicador) + Number(num7);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero7 = document.getElementById("precio7").textContent;
        let num7 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad7").value;
        let res = Number(num7) - (numero7 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox8 = document.getElementById('agregar8');
    checkbox8.addEventListener("change", validaCheckbox8, false);
    function validaCheckbox8(){
    let checked8 = checkbox8.checked;
    if(checked8){
        let numero8 = document.getElementById("precio8").textContent;
        let num8 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad8").value;
        let sum = (numero8 * multiplicador) + Number(num8);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero8 = document.getElementById("precio8").textContent;
        let num8 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad8").value;
        let res = Number(num8) - (numero8 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox9 = document.getElementById('agregar9');
    checkbox9.addEventListener("change", validaCheckbox9, false);
    function validaCheckbox9(){
    let checked9 = checkbox9.checked;
    if(checked9){
        let numero9 = document.getElementById("precio9").textContent;
        let num9 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad9").value;
        let sum = (numero9 * multiplicador) + Number(num9);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero9 = document.getElementById("precio9").textContent;
        let num9 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad9").value;
        let res = Number(num9) - (numero9 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox10 = document.getElementById('agregar10');
    checkbox10.addEventListener("change", validaCheckbox10, false);
    function validaCheckbox10(){
    let checked10 = checkbox10.checked;
    if(checked10){
        let numero10 = document.getElementById("precio10").textContent;
        let num10 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad10").value;
        let sum = (numero10 * multiplicador) + Number(num10);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero10 = document.getElementById("precio10").textContent;
        let num10 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad10").value;
        let res = Number(num10) - (numero10 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}





let checkbox11 = document.getElementById('agregar11');
    checkbox11.addEventListener("change", validaCheckbox11, false);
    function validaCheckbox11(){
    let checked11 = checkbox11.checked;
    if(checked11){
        let numero11 = document.getElementById("precio11").textContent;
        let num11 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad11").value;
        let sum = (numero11 * multiplicador) + Number(num11);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero11 = document.getElementById("precio11").textContent;
        let num11 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad11").value;
        let res = Number(num11) - (numero11 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox12 = document.getElementById('agregar12');
    checkbox12.addEventListener("change", validaCheckbox12, false);
    function validaCheckbox12(){
    let checked12 = checkbox12.checked;
    if(checked12){
        let numero12 = document.getElementById("precio12").textContent;
        let num12 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad12").value;
        let sum = (numero12 * multiplicador) + Number(num12);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero12 = document.getElementById("precio12").textContent;
        let num12 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad12").value;
        let res = Number(num12) - (numero12 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}
let checkbox13 = document.getElementById('agregar13');
    checkbox13.addEventListener("change", validaCheckbox13, false);
    function validaCheckbox13(){
    let checked13 = checkbox13.checked;
    if(checked13){
        let numero13 = document.getElementById("precio13").textContent;
        let num13 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad13").value;
        let sum = (numero13 * multiplicador) + Number(num13);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero13 = document.getElementById("precio13").textContent;
        let num13 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad13").value;
        let res = Number(num13) - (numero13 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}
let checkbox14 = document.getElementById('agregar14');
    checkbox14.addEventListener("change", validaCheckbox14, false);
    function validaCheckbox14(){
    let checked14 = checkbox14.checked;
    if(checked14){
        let numero14 = document.getElementById("precio14").textContent;
        let num14 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad14").value;
        let sum = (numero14 * multiplicador) + Number(num14);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero14 = document.getElementById("precio14").textContent;
        let num14 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad14").value;
        let res = Number(num14) - (numero14 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}
let checkbox15 = document.getElementById('agregar15');
    checkbox15.addEventListener("change", validaCheckbox15, false);
    function validaCheckbox15(){
    let checked15 = checkbox15.checked;
    if(checked15){
        let numero15 = document.getElementById("precio15").textContent;
        let num15 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad10").value;
        let sum = (numero15 * multiplicador) + Number(num15);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero15 = document.getElementById("precio15").textContent;
        let num15 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad15").value;
        let res = Number(num15) - (numero15 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}
let checkbox16 = document.getElementById('agregar16');
    checkbox16.addEventListener("change", validaCheckbox16, false);
    function validaCheckbox16(){
    let checked16 = checkbox16.checked;
    if(checked16){
        let numero16 = document.getElementById("precio16").textContent;
        let num16 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad16").value;
        let sum = (numero16 * multiplicador) + Number(num16);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero16 = document.getElementById("precio16").textContent;
        let num16 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad16").value;
        let res = Number(num16) - (numero16 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox17 = document.getElementById('agregar17');
    checkbox17.addEventListener("change", validaCheckbox17, false);
    function validaCheckbox17(){
    let checked17 = checkbox17.checked;
    if(checked17){
        let numero17 = document.getElementById("precio17").textContent;
        let num17 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad17").value;
        let sum = (numero17 * multiplicador) + Number(num17);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero17 = document.getElementById("precio17").textContent;
        let num17 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad16").value;
        let res = Number(num17) - (numero17 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox18 = document.getElementById('agregar18');
    checkbox18.addEventListener("change", validaCheckbox18, false);
    function validaCheckbox18(){
    let checked18 = checkbox18.checked;
    if(checked18){
        let numero18 = document.getElementById("precio18").textContent;
        let num18 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad18").value;
        let sum = (numero18 * multiplicador) + Number(num18);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero18 = document.getElementById("precio18").textContent;
        let num18 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad18").value;
        let res = Number(num18) - (numero18 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox19 = document.getElementById('agregar19');
    checkbox19.addEventListener("change", validaCheckbox19, false);
    function validaCheckbox19(){
    let checked19 = checkbox19.checked;
    if(checked19){
        let numero19 = document.getElementById("precio19").textContent;
        let num19 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad19").value;
        let sum = (numero19 * multiplicador) + Number(num19);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero19 = document.getElementById("precio19").textContent;
        let num19 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad19").value;
        let res = Number(num19) - (numero19 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox20 = document.getElementById('agregar20');
    checkbox20.addEventListener("change", validaCheckbox20, false);
    function validaCheckbox20(){
    let checked20 = checkbox20.checked;
    if(checked20){
        let numero20 = document.getElementById("precio20").textContent;
        let num20 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad20").value;
        let sum = (numero20 * multiplicador) + Number(num20);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero20 = document.getElementById("precio20").textContent;
        let num20 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad20").value;
        let res = Number(num20) - (numero20 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox21 = document.getElementById('agregar21');
    checkbox21.addEventListener("change", validaCheckbox21, false);
    function validaCheckbox21(){
    let checked21 = checkbox21.checked;
    if(checked21){
        let numero21 = document.getElementById("precio21").textContent;
        let num21 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad21").value;
        let sum = (numero21 * multiplicador) + Number(num21);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero21 = document.getElementById("precio21").textContent;
        let num21 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad21").value;
        let res = Number(num21) - (numero21 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox22 = document.getElementById('agregar22');
    checkbox22.addEventListener("change", validaCheckbox22, false);
    function validaCheckbox22(){
    let checked22 = checkbox22.checked;
    if(checked22){
        let numero22 = document.getElementById("precio22").textContent;
        let num22 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad22").value;
        let sum = (numero22 * multiplicador) + Number(num22);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero22 = document.getElementById("precio22").textContent;
        let num22 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad22").value;
        let res = Number(num22) - (numero22 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox23 = document.getElementById('agregar23');
    checkbox23.addEventListener("change", validaCheckbox23, false);
    function validaCheckbox23(){
    let checked23 = checkbox23.checked;
    if(checked23){
        let numero23 = document.getElementById("precio23").textContent;
        let num23 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad23").value;
        let sum = (numero23 * multiplicador) + Number(num23);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero23 = document.getElementById("precio23").textContent;
        let num23 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad23").value;
        let res = Number(num23) - (numero23 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox24 = document.getElementById('agregar24');
    checkbox24.addEventListener("change", validaCheckbox24, false);
    function validaCheckbox24(){
    let checked24 = checkbox24.checked;
    if(checked24){
        let numero24 = document.getElementById("precio24").textContent;
        let num24 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad24").value;
        let sum = (numero24 * multiplicador) + Number(num24);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero24 = document.getElementById("precio24").textContent;
        let num24 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad24").value;
        let res = Number(num24) - (numero24 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox25 = document.getElementById('agregar25');
    checkbox25.addEventListener("change", validaCheckbox25, false);
    function validaCheckbox25(){
    let checked25 = checkbox25.checked;
    if(checked25){
        let numero25 = document.getElementById("precio25").textContent;
        let num25 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad25").value;
        let sum = (numero25 * multiplicador) + Number(num25);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero25 = document.getElementById("precio25").textContent;
        let num25 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad25").value;
        let res = Number(num25) - (numero25 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox26 = document.getElementById('agregar26');
    checkbox26.addEventListener("change", validaCheckbox26, false);
    function validaCheckbox26(){
    let checked26 = checkbox26.checked;
    if(checked26){
        let numero26 = document.getElementById("precio26").textContent;
        let num26 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad26").value;
        let sum = (numero26 * multiplicador) + Number(num26);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero26 = document.getElementById("precio26").textContent;
        let num26 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad26").value;
        let res = Number(num26) - (numero26 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox27 = document.getElementById('agregar27');
    checkbox27.addEventListener("change", validaCheckbox27, false);
    function validaCheckbox27(){
    let checked27 = checkbox27.checked;
    if(checked27){
        let numero27 = document.getElementById("precio27").textContent;
        let num27 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad27").value;
        let sum = (numero27 * multiplicador) + Number(num27);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero27 = document.getElementById("precio27").textContent;
        let num27 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad27").value;
        let res = Number(num27) - (numero27 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox28 = document.getElementById('agregar28');
    checkbox28.addEventListener("change", validaCheckbox28, false);
    function validaCheckbox28(){
    let checked28 = checkbox28.checked;
    if(checked28){
        let numero28 = document.getElementById("precio28").textContent;
        let num28 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad28").value;
        let sum = (numero28 * multiplicador) + Number(num28);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero28 = document.getElementById("precio28").textContent;
        let num28 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad28").value;
        let res = Number(num28) - (numero28 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox29 = document.getElementById('agregar29');
    checkbox29.addEventListener("change", validaCheckbox29, false);
    function validaCheckbox29(){
    let checked29 = checkbox29.checked;
    if(checked29){
        let numero29 = document.getElementById("precio29").textContent;
        let num29 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad29").value;
        let sum = (numero29 * multiplicador) + Number(num29);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero29 = document.getElementById("precio29").textContent;
        let num29 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad29").value;
        let res = Number(num29) - (numero29 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox30 = document.getElementById('agregar30');
    checkbox30.addEventListener("change", validaCheckbox30, false);
    function validaCheckbox30(){
    let checked30 = checkbox30.checked;
    if(checked30){
        let numero30 = document.getElementById("precio30").textContent;
        let num30 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad30").value;
        let sum = (numero30 * multiplicador) + Number(num30);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero30 = document.getElementById("precio30").textContent;
        let num30 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad30").value;
        let res = Number(num30) - (numero30 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}


let checkbox31 = document.getElementById('agregar31');
    checkbox31.addEventListener("change", validaCheckbox31, false);
    function validaCheckbox31(){
    let checked31 = checkbox31.checked;
    if(checked31){
        let numero31 = document.getElementById("precio31").textContent;
        let num31 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad31").value;
        let sum = (numero31 * multiplicador) + Number(num31);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero31 = document.getElementById("precio31").textContent;
        let num31 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad31").value;
        let res = Number(num31) - (numero31 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox32 = document.getElementById('agregar32');
    checkbox32.addEventListener("change", validaCheckbox32, false);
    function validaCheckbox32(){
    let checked32 = checkbox32.checked;
    if(checked32){
        let numero32 = document.getElementById("precio32").textContent;
        let num32 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad32").value;
        let sum = (numero32 * multiplicador) + Number(num32);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero32 = document.getElementById("precio32").textContent;
        let num32 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad32").value;
        let res = Number(num32) - (numero32 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox33 = document.getElementById('agregar33');
    checkbox33.addEventListener("change", validaCheckbox33, false);
    function validaCheckbox33(){
    let checked33 = checkbox33.checked;
    if(checked33){
        let numero33 = document.getElementById("precio33").textContent;
        let num33 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad33").value;
        let sum = (numero33 * multiplicador) + Number(num33);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero33 = document.getElementById("precio33").textContent;
        let num33 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad33").value;
        let res = Number(num33) - (numero33 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox34 = document.getElementById('agregar34');
    checkbox34.addEventListener("change", validaCheckbox34, false);
    function validaCheckbox34(){
    let checked34 = checkbox34.checked;
    if(checked34){
        let numero34 = document.getElementById("precio34").textContent;
        let num34 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad34").value;
        let sum = (numero34 * multiplicador) + Number(num34);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero34 = document.getElementById("precio34").textContent;
        let num34 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad34").value;
        let res = Number(num34) - (numero34 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox35 = document.getElementById('agregar35');
    checkbox35.addEventListener("change", validaCheckbox35, false);
    function validaCheckbox35(){
    let checked35 = checkbox35.checked;
    if(checked35){
        let numero35 = document.getElementById("precio35").textContent;
        let num35 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad35").value;
        let sum = (numero35 * multiplicador) + Number(num35);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero35 = document.getElementById("precio35").textContent;
        let num35 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad35").value;
        let res = Number(num35) - (numero35 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox36 = document.getElementById('agregar36');
    checkbox36.addEventListener("change", validaCheckbox36, false);
    function validaCheckbox36(){
    let checked36 = checkbox36.checked;
    if(checked36){
        let numero36 = document.getElementById("precio36").textContent;
        let num36 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad36").value;
        let sum = (numero36 * multiplicador) + Number(num36);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero36 = document.getElementById("precio36").textContent;
        let num36 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad36").value;
        let res = Number(num36) - (numero36 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox37 = document.getElementById('agregar37');
    checkbox37.addEventListener("change", validaCheckbox37, false);
    function validaCheckbox37(){
    let checked37 = checkbox37.checked;
    if(checked37){
        let numero37 = document.getElementById("precio37").textContent;
        let num37 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad37").value;
        let sum = (numero37 * multiplicador) + Number(num37);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero37 = document.getElementById("precio37").textContent;
        let num37 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad37").value;
        let res = Number(num37) - (numero37 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox38 = document.getElementById('agregar38');
    checkbox38.addEventListener("change", validaCheckbox38, false);
    function validaCheckbox38(){
    let checked38 = checkbox38.checked;
    if(checked38){
        let numero38 = document.getElementById("precio38").textContent;
        let num38 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad38").value;
        let sum = (numero38 * multiplicador) + Number(num38);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero38 = document.getElementById("precio38").textContent;
        let num38 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad38").value;
        let res = Number(num38) - (numero38 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox39 = document.getElementById('agregar39');
    checkbox39.addEventListener("change", validaCheckbox39, false);
    function validaCheckbox39(){
    let checked39 = checkbox39.checked;
    if(checked39){
        let numero39 = document.getElementById("precio39").textContent;
        let num39 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad39").value;
        let sum = (numero39 * multiplicador) + Number(num39);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero39 = document.getElementById("precio39").textContent;
        let num39 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad39").value;
        let res = Number(num39) - (numero39 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox40 = document.getElementById('agregar40');
    checkbox40.addEventListener("change", validaCheckbox40, false);
    function validaCheckbox40(){
    let checked40 = checkbox40.checked;
    if(checked40){
        let numero40 = document.getElementById("precio40").textContent;
        let num40 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad40").value;
        let sum = (numero40 * multiplicador) + Number(num40);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero40 = document.getElementById("precio40").textContent;
        let num40 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad40").value;
        let res = Number(num40) - (numero40 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox41 = document.getElementById('agregar41');
    checkbox41.addEventListener("change", validaCheckbox41, false);
    function validaCheckbox41(){
    let checked41 = checkbox41.checked;
    if(checked41){
        let numero41 = document.getElementById("precio41").textContent;
        let num41 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad41").value;
        let sum = (numero41 * multiplicador) + Number(num41);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero41 = document.getElementById("precio41").textContent;
        let num41 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad41").value;
        let res = Number(num41) - (numero41 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox42 = document.getElementById('agregar42');
    checkbox42.addEventListener("change", validaCheckbox42, false);
    function validaCheckbox42(){
    let checked42 = checkbox42.checked;
    if(checked42){
        let numero42 = document.getElementById("precio42").textContent;
        let num42 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad42").value;
        let sum = (numero42 * multiplicador) + Number(num42);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero42 = document.getElementById("precio42").textContent;
        let num42 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad42").value;
        let res = Number(num42) - (numero42 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox43 = document.getElementById('agregar43');
    checkbox43.addEventListener("change", validaCheckbox43, false);
    function validaCheckbox43(){
    let checked43 = checkbox43.checked;
    if(checked43){
        let numero43 = document.getElementById("precio43").textContent;
        let num43 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad43").value;
        let sum = (numero43 * multiplicador) + Number(num43);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero43 = document.getElementById("precio43").textContent;
        let num43 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad43").value;
        let res = Number(num43) - (numero43 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox44 = document.getElementById('agregar44');
    checkbox44.addEventListener("change", validaCheckbox44, false);
    function validaCheckbox44(){
    let checked44 = checkbox44.checked;
    if(checked44){
        let numero44 = document.getElementById("precio44").textContent;
        let num44 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad44").value;
        let sum = (numero44 * multiplicador) + Number(num44);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero44 = document.getElementById("precio44").textContent;
        let num44 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad44").value;
        let res = Number(num44) - (numero44 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox45 = document.getElementById('agregar45');
    checkbox45.addEventListener("change", validaCheckbox45, false);
    function validaCheckbox45(){
    let checked45 = checkbox45.checked;
    if(checked45){
        let numero45 = document.getElementById("precio45").textContent;
        let num45 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad45").value;
        let sum = (numero45 * multiplicador) + Number(num45);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero45 = document.getElementById("precio45").textContent;
        let num45 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad45").value;
        let res = Number(num45) - (numero45 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox46 = document.getElementById('agregar46');
    checkbox46.addEventListener("change", validaCheckbox46, false);
    function validaCheckbox46(){
    let checked46 = checkbox46.checked;
    if(checked46){
        let numero46 = document.getElementById("precio46").textContent;
        let num46 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad46").value;
        let sum = (numero46 * multiplicador) + Number(num46);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero46 = document.getElementById("precio46").textContent;
        let num46 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad46").value;
        let res = Number(num46) - (numero46 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox47 = document.getElementById('agregar47');
    checkbox47.addEventListener("change", validaCheckbox47, false);
    function validaCheckbox47(){
    let checked47 = checkbox47.checked;
    if(checked47){
        let numero47 = document.getElementById("precio47").textContent;
        let num47 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad47").value;
        let sum = (numero47 * multiplicador) + Number(num47);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero47 = document.getElementById("precio47").textContent;
        let num47 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad47").value;
        let res = Number(num47) - (numero47 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox48 = document.getElementById('agregar48');
    checkbox48.addEventListener("change", validaCheckbox48, false);
    function validaCheckbox48(){
    let checked48 = checkbox48.checked;
    if(checked48){
        let numero48 = document.getElementById("precio48").textContent;
        let num48 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad48").value;
        let sum = (numero48 * multiplicador) + Number(num48);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero48 = document.getElementById("precio48").textContent;
        let num48 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad48").value;
        let res = Number(num48) - (numero48 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox49 = document.getElementById('agregar49');
    checkbox49.addEventListener("change", validaCheckbox49, false);
    function validaCheckbox49(){
    let checked49 = checkbox49.checked;
    if(checked49){
        let numero49 = document.getElementById("precio49").textContent;
        let num49 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad49").value;
        let sum = (numero49 * multiplicador) + Number(num49);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero49 = document.getElementById("precio49").textContent;
        let num49 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad49").value;
        let res = Number(num49) - (numero49 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox50 = document.getElementById('agregar50');
    checkbox50.addEventListener("change", validaCheckbox50, false);
    function validaCheckbox50(){
    let checked50 = checkbox50.checked;
    if(checked50){
        let numero50 = document.getElementById("precio50").textContent;
        let num50 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad50").value;
        let sum = (numero50 * multiplicador) + Number(num50);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero50 = document.getElementById("precio50").textContent;
        let num50 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad50").value;
        let res = Number(num50) - (numero50 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}

let checkbox51 = document.getElementById('agregar51');
    checkbox51.addEventListener("change", validaCheckbox51, false);
    function validaCheckbox51(){
    let checked51 = checkbox51.checked;
    if(checked51){
        let numero51 = document.getElementById("precio51").textContent;
        let num51 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad51").value;
        let sum = (numero51 * multiplicador) + Number(num51);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = sum;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    } else {
        let numero51 = document.getElementById("precio51").textContent;
        let num51 = document.querySelector(".caja").lastElementChild.textContent;
        let multiplicador = document.getElementById("cantidad51").value;
        let res = Number(num51) - (numero51 * multiplicador);
        let caja = document.querySelector(".caja")
        let precioNuevo = document.createElement("DIV");
        precioNuevo.classList.add("total");
        precioNuevo.innerHTML = res;
        let precioViejo = document.querySelector(".total");
        caja.replaceChild(precioNuevo,precioViejo);
    }
}
