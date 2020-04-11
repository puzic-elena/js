const compose = (...args) => {
    return (array) => {
        args.map((func) => {
            [...array] = [...array].map((elem) => func(elem));
        });
        return [...array];
    };
};
console.log(compose((numb) => numb + 1,
    (numb) => Math.pow(numb, 0.5),
    (numb) => numb * 10,)([3, 8, 15]));
