function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumFirstFivePrimes() {
    let primes = [];
    let num = 2; 

    while (primes.length < 5) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes.reduce((sum, prime) => sum + prime, 0);
}

// Приклад використання:
console.log(sumFirstFivePrimes());  // 28 (2 + 3 + 5 + 7 + 11)
