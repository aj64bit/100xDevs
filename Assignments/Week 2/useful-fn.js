const input = [1, 3, 4, 5, 6]
function transform(x) {
    return x * 2;
}

const arr = input.map(transform);
console.log(arr);

const evens = input.filter((n) => {
    if (n % 2 == 0) return true;
    else return false;
})

console.log(evens);