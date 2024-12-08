const merge = (num1, m, num2, n) => {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (num1[i] > num2[j]) {
        num1[k] = num1[i];
        i--;
        } else {
        num1[k] = num2[j];
        j--;
        }
        k--;
    }
    
    while (j >= 0) {
        num1[k] = num2[j];
        j--;
        k--;
    }
}

let a = [3, 5 ,9, 12, 16, 20, 25, 30, 36]
let b = []

const checkSquareNumber = () => {
    for(let i = 0; i < a.length; i++) {
        if (Math.sqrt(a[i]) * Math.sqrt(a[i]) === a[i]) {
            b.push(a[i])
        }
    }
}
checkSquareNumber()
console.log(b)

const average = () => {
    let sum = 0
    for(let i = 0; i < b.length; i++) {
        sum += b[i]
    }
    return sum / b.length
}