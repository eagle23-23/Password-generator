const passBox = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols =  "!@#$%^&*()_-+{}[]<>/~`";
const rand = upperCase + lowercase + numbers + symbols;

function generator() {
    let password =  "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += rand[Math.floor(Math.random() * rand.length)];
    }

    passBox.value = password;
}

function copy(){
    passBox.select();
    document.execCommand("copy");
}
