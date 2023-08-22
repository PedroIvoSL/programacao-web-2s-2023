function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function checkPrime() {
    const numberInput = document.getElementById("numberInput");
    const num = parseInt(numberInput.value);

    if (isNaN(num)) {
        window.alert("Coloque um numero valido.");
        return;
    }

    if (isPrime(num)) {
        window.alert(`1.`);
    } else {
        window.alert(`0.`);
    }
}
