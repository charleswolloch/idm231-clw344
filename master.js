let zodDateObj = document.getElementById('zodDate');
let showMeObj = document.getElementById('showMe');

let heroObj = document.getElementById('hero');


let capObj = document.getElementById('cap');
let ariObj = document.getElementById('ari');
let scoObj = document.getElementById('sco');
let sagObj = document.getElementById('sag');
let aquObj = document.getElementById('aqu');
let pisObj = document.getElementById('pis');
let tauObj = document.getElementById('tau');
let gemObj = document.getElementById('gem');
let canObj = document.getElementById('can');
let libObj = document.getElementById('lib');
let leoObj = document.getElementById('leo');
let virObj = document.getElementById('vir');


function myHelp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}



function computeZod() {
    let userBday = zodDateObj.value;
    console.log('userBday is ' + userBday);
    let monStr = userBday.substr(5, 2);
    let dayStr = userBday.substr(8, 2);


    let monNum = parseInt(monStr);
    let dayNum = parseInt(dayStr);

    showMeObj.innerHTML = dateToZodiac(monNum, dayNum);
}


function dateToZodiac(whichMonth, whichDayOfMonth) {
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
        gotSign = "Jon Snow";
        
        swapZodInfo(1);

    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Sag";
        gotSign = "Yigritte";
        
        swapZodInfo(4);
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "Sco";
        gotSign = "Arya Stark";
        
        swapZodInfo(3);

    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Lib";
        gotSign = "Bronn of the Blackwater";
        
        swapZodInfo(10);
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "Vir";
        gotSign = "Brienne of Tarth";
        
        swapZodInfo(12);
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "Leo";
        gotSign = "Tyrion Lannister";
        
        swapZodInfo(11);
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "Can";
        gotSign = "Cersei Lannister";
        
        swapZodInfo(9);
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "Gem";
        gotSign = "Sansa Stark";
        
        swapZodInfo(8);
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Tau";
        gotSign = "Jaime Lannister";
        
        swapZodInfo(7);
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "Ari";
        gotSign = "Daenerys Targaryen";
        
        swapZodInfo(2);
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Pis";
        gotSign = "Hodor";
        
        swapZodInfo(6);
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Aqu";
        gotSign = "Bran Stark";
        
        swapZodInfo(5);
    }

   // return gotSign + ' - ' + gotZod;

}


capObj.addEventListener('click', function () {

    swapZodInfo(1);
}, false);

ariObj.addEventListener('click', function () {

    swapZodInfo(2);
}, false);

scoObj.addEventListener('click', function () {

    swapZodInfo(3);
}, false);

sagObj.addEventListener('click', function () {

    swapZodInfo(4);
}, false);

aquObj.addEventListener('click', function () {

    swapZodInfo(5);
}, false);

pisObj.addEventListener('click', function () {

    swapZodInfo(6);
}, false);

tauObj.addEventListener('click', function () {

    swapZodInfo(7);
}, false);

gemObj.addEventListener('click', function () {

    swapZodInfo(8);
}, false);

canObj.addEventListener('click', function () {

    swapZodInfo(9);
}, false);

libObj.addEventListener('click', function () {

    swapZodInfo(10);
}, false);

leoObj.addEventListener('click', function () {

    swapZodInfo(11);
}, false);

virObj.addEventListener('click', function () {

    swapZodInfo(12);
}, false);



function swapZodInfo(whichOne) {
    // swap out zodiac image
    // swap out zodiac description with date range
    // play a zodiac sound

    console.log('swap zod info called ' + whichOne);

    if (whichOne == 1) {
        heroObj.src = 'images/cap_hero.png';
    } else if (whichOne == 2) {
        heroObj.src = 'images/ari_hero.png';
    } else if (whichOne == 3) {
        heroObj.src = 'images/sco_hero.png';
    } else if (whichOne == 4) {
        heroObj.src = 'images/sag_hero.png';
    } else if (whichOne == 5) {
        heroObj.src = 'images/aqu_hero.png';
    } else if (whichOne == 6) {
        heroObj.src = 'images/pis_hero.png';
    } else if (whichOne == 7) {
        heroObj.src = 'images/tau_hero.png';
    } else if (whichOne == 8) {
        heroObj.src = 'images/gem_hero.png';
    } else if (whichOne == 9) {
        heroObj.src = 'images/can_hero.png';
    } else if (whichOne == 10) {
        heroObj.src = 'images/lib_hero.png';
    } else if (whichOne == 11) {
        heroObj.src = 'images/leo_hero.png';
    } else if (whichOne == 12) {
        heroObj.src = 'images/vir_hero.png';
    } else {
        console.log('error in swapzodinfo');
    }




}
