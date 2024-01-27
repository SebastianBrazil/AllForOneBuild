// All ID calls
let HelloInput = document.getElementById("HelloInput");
let HelloCall = document.getElementById("HelloCall");
let HelloResponse = document.getElementById("HelloResponse");

let AddNum1 = document.getElementById("AddNum1");
let AddNum2 = document.getElementById("AddNum2");
let AddCall = document.getElementById("AddCall");
let AddResponse = document.getElementById("AddResponse");

let SQName = document.getElementById("SQName");
let SQTime = document.getElementById("SQTime");
let SQCall = document.getElementById("SQCall");
let SQResponse = document.getElementById("SQResponse");

let GOLTNum1 = document.getElementById("GOLTNum1");
let GOLTNum2 = document.getElementById("GOLTNum2");
let GOLTCall = document.getElementById("GOLTCall");
let GOLTResponse = document.getElementById("GOLTResponse");

let MadLib1 = document.getElementById("MadLib1");
let MadLib2 = document.getElementById("MadLib2");
let MadLib3 = document.getElementById("MadLib3");
let MadLib4 = document.getElementById("MadLib4");
let MadLib5 = document.getElementById("MadLib5");
let MadLib6 = document.getElementById("MadLib6");
let MadLib7 = document.getElementById("MadLib7");
let MadLib8 = document.getElementById("MadLib8");
let MadLib9 = document.getElementById("MadLib9");
let MadLib10 = document.getElementById("MadLib10");
let MadLibCall = document.getElementById("MadLibCall");
let MadLibResponse = document.getElementById("MadLibResponse");

let OOENum = document.getElementById("OOENum");
let OOECall = document.getElementById("OOECall");
let OOEResponse = document.getElementById("OOEResponse");

let RTPhrase = document.getElementById("RTPhrase");
let RTCall = document.getElementById("RTCall");
let RTResponse = document.getElementById("RTResponse");

let RNNum = document.getElementById("RNNum");
let RNCall = document.getElementById("RNCall");
let RNResponse = document.getElementById("RNResponse");

let M8BQuestion = document.getElementById("M8BQuestion");
let M8BCall = document.getElementById("M8BCall");
let M8BResponse = document.getElementById("M8BResponse");

let RPCategory = document.getElementById("RPCategory");
let RPCall = document.getElementById("RPCall");
let RPResponse = document.getElementById("RPResponse");

// Button Calls
function HelloLoad() {
    HelloCall.addEventListener('click', function (e) {
        if (HelloInput.value === "") {
            HelloResponse.innerText = "You Did Not Give Me A Name, User."
        } else {
            HelloApiCall(HelloInput.value);
        };
    });
};

function AddLoad() {
    AddCall.addEventListener('click', function (e) {
        if (AddNum1.value === "" || AddNum2.value === "") {
            AddResponse.innerText = "One of your inputs is empty."
        } else {
            AdditionApiCall(AddNum1.value, AddNum2.value);
        };
    });
};

function SQLoad() {
    SQCall.addEventListener('click', function (e) {
        if (SQName.value === "" || SQTime.value === "") {
            SQResponse.innerText = "One of your inputs is empty."
        } else {
            SQApiCall(SQName.value, SQTime.value);
        };
    });
};

function GOLTLoad() {
    GOLTCall.addEventListener('click', function (e) {
        if (GOLTNum1.value === "" || GOLTNum2.value === "") {
            GOLTResponse.innerText = "One of your inputs is empty."
        } else {
            GOLTApiCall(GOLTNum1.value, GOLTNum2.value);
        };
    });
};

function MadLibLoad() {
    MadLibCall.addEventListener('click', function (e) {
        if (MadLib1.value === "" || MadLib2.value === "" || MadLib3.value === "" || MadLib4.value === "" || MadLib5.value === "" || MadLib6.value === "" || MadLib7.value === "" || MadLib8.value === "" || MadLib9.value === "" || MadLib10.value === "") {
            MadLibResponse.innerText = "One of your inputs is empty."
        } else {
            MadLibApiCall(MadLib1.value, MadLib2.value, MadLib3.value, MadLib4.value, MadLib5.value, MadLib6.value, MadLib7.value, MadLib8.value, MadLib9.value, MadLib10.value);
        };
    });
};

function OOELoad() {
    OOECall.addEventListener('click', function (e) {
        if (OOENum.value === "") {
            OOEResponse.innerText = "Your input is empty."
        } else {
            OOEApiCall(OOENum.value);
        };
    });
};

function RTLoad() {
    RTCall.addEventListener('click', function (e) {
        if (RTPhrase.value === "") {
            RTResponse.innerText = "Your input is empty."
        } else {
            ReverseTextApiCall(RTPhrase.value);
        };
    });
};

function RNLoad() {
    RNCall.addEventListener('click', function (e) {
        if (RNNum.value === "") {
            RNResponse.innerText = "Your input is empty."
        } else {
            ReverseNumApiCall(RNNum.value);
        };
    });
};

function M8BLoad() {
    M8BCall.addEventListener('click', function (e) {
        if (M8BQuestion.value === "") {
            M8BResponse.innerText = "Your input is empty."
        } else {
            M8BApiCall(M8BQuestion.value);
        };
    });
};

function RPLoad() {
    RPCall.addEventListener('click', function (e) {
        if (RPCategory.value === "") {
            RPResponse.innerText = "Your input is empty."
        } else {
            RPApiCall(RPCategory.value);
        };
    });
};

// API Calls
async function HelloApiCall(name) {
    const promise = await fetch(`http://localhost:5191/HelloThere/${name}`);
    const data = await promise.text();
    HelloResponse.innerText = data;
};

async function AdditionApiCall(number1, number2) {
    const promise = await fetch(`http://localhost:5191/AdditionCalculator/${number1}/${number2}`);
    const data = await promise.text();
    AddResponse.innerText = data;
};

async function SQApiCall(name, time) {
    const promise = await fetch(`http://localhost:5191/SomeQuestions/${name}/${time}`)
    const data = await promise.text();
    SQResponse.innerText = data;
};

async function GOLTApiCall(num1, num2) {
    const promise = await fetch(`http://localhost:5191/GOLT/${num1}/${num2}`)
    const data = await promise.text();
    GOLTResponse.innerText = data;
};

async function MadLibApiCall(nameOne, pronoun, nounOne, warriorsWeapon, creatureOne, locationOne, nameTwo, ageOne, toolOne, pocketItem) {
    const promise = await fetch(`http://localhost:5191/MadLib/${nameOne}/${pronoun}/${nounOne}/${warriorsWeapon}/${creatureOne}/${locationOne}/${nameTwo}/${ageOne}/${toolOne}/${pocketItem}`)
    const data = await promise.text();
    MadLibResponse.innerText = data;
};

async function OOEApiCall(num) {
    const promise = await fetch(`http://localhost:5191/OddOrEven/${num}`)
    const data = await promise.text();
    OOEResponse.innerText = data;
};

async function ReverseTextApiCall(userInput) {
    const promise = await fetch(`http://localhost:5191/ReverseText/${userInput}`)
    const data = await promise.text();
    RTResponse.innerText = data;
};

async function ReverseNumApiCall(userInput) {
    const promise = await fetch(`http://localhost:5191/ReverseNum/${userInput}`)
    const data = await promise.text();
    RNResponse.innerText = data;
};

async function M8BApiCall(question) {
    const promise = await fetch(`http://localhost:5191/Magic8Ball/${question}/`)
    const data = await promise.text();
    M8BResponse.innerText = data;
};

async function RPApiCall(category) {
    const promise = await fetch(`http://localhost:5191/RP/${category}/`)
    const data = await promise.text();
    RPResponse.innerText = data;
};