let product = (fa, ba) => (fb, bb) => (fc, bc) => (
    fa * fb * fc + ba * bb * bc
);

console.log(product(1, 2)(1, 1)(2, 3))
console.log(product(10, 2)(5, 0)(2, 3))
console.log(product(1, 2)(2, 3)(3, 4))
console.log(product(1, 2)(0, 3)(3, 0))