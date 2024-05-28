function checkNumber(value) {
    if (typeof value === 'number') {
        return value % 2 === 0 ? 'парне' : 'непарне';
    }
    return '';
}

// Приклади використання:
console.log(checkNumber(4));  // 'парне'
console.log(checkNumber(7));  // 'непарне'
console.log(checkNumber('текст'));  // ''
