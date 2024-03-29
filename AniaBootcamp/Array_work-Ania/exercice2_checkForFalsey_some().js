const check = [11, '', [], 'Angels'];


function checkForFalsey() {
    return item => !item;
}
console.log(check.some(checkForFalsey))