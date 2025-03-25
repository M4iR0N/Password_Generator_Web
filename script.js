let stringLength;
let textArea = document.getElementById('textArea');

function generateRandomString(stringLength) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let result = '';
    for (let i = 0; i < stringLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


function submitBtn(){
const submit = document.getElementById('myButton');
submit.addEventListener('click', () => {
    if (document.querySelector('#checkbox-16').checked === true) {
        textArea.value = generateRandomString(16)
    }else if (document.querySelector('#checkbox-32').checked === true){
        textArea.value = generateRandomString(32)
    }else if (document.querySelector('#checkbox-64').checked === true) {
        textArea.value = generateRandomString(64)
    }else if (document.querySelector('#checkbox-128').checked === true) {
        textArea.value = generateRandomString(128)
    } else{
        alert("please select");
    }
});
}
submitBtn();

function resetBtn(){
    const resetOne = document.getElementById('resetBtn');
    resetOne.addEventListener('click', () =>{    
        textArea.value = "";
    })
};

resetBtn();










// Title Generator Animation

const stringArray = ['Hello', 'Welcome', 'To', 'My', 'Website'];

const wordIndex = 0;
const userString = 0;
let isTyping = false;

const typingText = document.querySelector('.description');


