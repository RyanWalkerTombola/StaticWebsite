function onLoad() {
    loadTheme();
    changeText();
}

function loadTheme() {
    var theme = sessionStorage.getItem('theme');
    document.documentElement.style.setProperty('--theme-color', theme);
}

const rocketText = {};
rocketText['falcon9'] = "Falcon 9 is a two-stage rocket designed for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. Falcon 9 is the first orbital class rocket capable of reflight. SpaceX believes rocket reusability is the key breakthrough needed to reduce the cost of access to space and enable people to live on other planets.";
rocketText['falconHeavy'] = "Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb)---a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost. Falcon Heavy draws upon the proven heritage and reliability of Falcon 9.";
rocketText['falcon1'] = "Falcon 1 is a small liquid fueled orbital launch vehicle. Both stages are Kerosene / LOX fueled.";
rocketText['bfr'] = "The BFR (Big Falcon Rocket) represents a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle composed of the Super Heavy rocket (booster) and Starship (ship) will eventually replace Falcon 9, Falcon Heavy and Dragon. By creating a single system that can service a variety of markets, SpaceX can redirect resources from Falcon 9, Falcon Heavy and Dragon to Starship which is fundamental in making the system affordable.";

const rocketStatus = {};
rocketStatus['falcon9'] = 'In Use';
rocketStatus['falconHeavy'] = 'In Use';
rocketStatus['falcon1'] = 'Retired';
rocketStatus['bfr'] = 'Proposed';

const rocketPrice = {};
rocketPrice['falcon9'] = '$62M';
rocketPrice['falconHeavy'] = '$90M';
rocketPrice['falcon1'] = '$7.9M';
rocketPrice['bfr'] = '-';

const rocketLEO = {};
rocketLEO['falcon9'] = '22,800 kg';
rocketLEO['falconHeavy'] = '63,800 kg';
rocketLEO['falcon1'] = '570 kg';
rocketLEO['bfr'] = '100,000 kg - 150,000 kg';

const rocketGTO = {};
rocketGTO['falcon9'] = '8,300 kg';
rocketGTO['falconHeavy'] = '26,700 kg';
rocketGTO['falcon1'] = '-';
rocketGTO['bfr'] = '-';

const rocketMars = {};
rocketMars['falcon9'] = '4,020 kg';
rocketMars['falconHeavy'] = '16,800 kg';
rocketMars['falcon1'] = '-';
rocketMars['bfr'] = '-';

const rocketImage = {};
rocketImage['falcon9'] = 'Images/Falcon9.jpg';
rocketImage['falconHeavy'] = 'Images/Falcon Heavy.jpg';
rocketImage['falcon1'] = 'Images/Falcon1Launch.jpg';
rocketImage['bfr'] = 'Images/BFR.png';

function changeText () {
    var rocketList = document.getElementById("rocket_select");
    var selected = rocketList[rocketList.selectedIndex].value;
    document.getElementById("rocket_text").innerHTML = rocketText[selected];
    document.getElementById("rocket_price").innerHTML = rocketPrice[selected];
    document.getElementById("rocket_status").innerHTML = rocketStatus[selected];
    document.getElementById("rocket_leo").innerHTML = rocketLEO[selected];
    document.getElementById("rocket_gto").innerHTML = rocketGTO[selected];
    document.getElementById("rocket_mars").innerHTML = rocketMars[selected];
    document.getElementById("rocket_image").src = rocketImage[selected];
}