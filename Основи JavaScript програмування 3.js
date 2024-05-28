function sumSeries(n) {
    let sum = 0;
    let currentNumber = 0;

    for (let i = 1; i <= n; i++) {
        currentNumber = currentNumber * 10 + 1;
        sum += currentNumber;
    }

    return sum;
}

// Приклад використання:
console.log(sumSeries(5));  // 12345 (1 + 11 + 111 + 1111 + 11111)
