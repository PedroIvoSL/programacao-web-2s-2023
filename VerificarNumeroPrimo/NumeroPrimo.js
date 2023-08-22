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

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Coloque um numero: ', (answer) => {
    const num = parseInt(answer);

    if (isNaN(num)) {
        console.log('Coloque um numero valido.');
    } else {
        if (isPrime(num)) {
            console.log(`0`);
        } else {
            console.log(`1`);
        }
    }

    rl.close();
});