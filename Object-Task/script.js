"use strict";


let McLaren = {
    model: '750S',
    year: 2021,
    speed:480,
    color: 'pink'
}



let Chevrolet = {
    model: 'Dodge',
    year: 2020,
    speed:480,
    color: 'Black'
}


let Bmw = {
    model: 'X6',
    year: 2023,
    speed:480,
    color: 'Dark'
}


function info() {
    let carInfo = document.getElementById('carInfo');
    carInfo.innerHTML = `model: ${this.model}<br>year: ${this.year}<br>speed: ${this.speed}<br>color: ${this.color}`;
}



function choose() {
    let select = document.getElementById('select');
    let carInfo = document.getElementById('carInfo');
    let selectCar = select.value;
    if (selectCar === "McLaren") {
        info.call(McLaren);
    }
    else if (selectCar === "Chevrolet") {
        info.call(Chevrolet);
    }
    else if (selectCar === "Bmw") {
        info.call(Bmw);
    } else if (selectCar === "0") {
        carInfo.innerHTML = "";
    }
}


