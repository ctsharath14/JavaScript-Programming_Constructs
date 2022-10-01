let number = parseInt(15);
let primeNumber = [];
function primeFactors() {
    for (i = 2; i <= number; i++) {
        if (number % i == 0) {
            for (j = 2; j < i; j++) {
                if (i % j == 0) {
                    isPrime = false;
                }
            }
            isPrime = true;
            primeNumber.push(i);
            number = number / i;
        }
    }
    console.log(primeNumber);
}
primeFactors();