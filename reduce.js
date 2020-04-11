/************************* Concat *************************/

const concat = (...args) => {
    return args.reduce((acc, current) => {
        return typeof acc === 'object' ? [...acc,...current] : current;
    }, []);
};

//console.log('concat result ' + concat(['a', 'b'], 'cd'));


/************************* Every *************************/

const every = (args, func) => {
    return args.reduce((acc, current) => {
        return func(current) ? acc : false;
    }, true);
};

//console.log('every result ' + every([1, 4, 9, 77, 52], (numb) => numb !== 0));


/************************* Filter *************************/

const filter = (args, func) => {
    return args.reduce((acc, current) => {
        return func(current) ? [...acc, current] : acc;
    }, []);
};

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//console.log('filter result ' + filter(words, (word) => word.length > 6));


/************************* Find *************************/

const find = (args, func) => {
    return args.reduce((acc, current) => {
        return acc !== undefined ? acc : func(current) ? current : acc;
    }, undefined);
};

const wizards = ['Albus Dumbledore', 'Severus Snape', 'Potter'];
//console.log('find result ' + find(wizards, (fullname) => fullname.length <= 12));


/************************* findIndex *************************/

const findIndex = (args, func) => {
    return args.reduce((acc, current, idx) => {
        return func(current) && acc === -1 ? idx : acc;
    }, -1);
};

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
//console.log('findIndex result ' + findIndex(fruits, (fruit) => fruit === "blueberries"));


/************************* Includes *************************/

const includes = (args, item) => {
    return args.reduce((acc, current) => {
        return current === item ? true : acc;
    }, false);
};

const pets = ['cat', 'dog', 'bat'];
//console.log('include result ' + includes(pets, 'frog'));


/************************* indexOf *************************/

const indexOf = (args, item) => {
    return args.reduce((acc, current, idx) => {
        return current === item && acc === -1 ? idx : acc;
    }, -1);
};

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
//console.log('indexOf result ' + indexOf(beasts, ('bison')));


/************************* Map *************************/

const map = (args, func) => {
    return args.reduce((acc, current, idx) => {
        return [...acc, func(current, idx)];
    }, []);
};

//console.log('map result ' + map([1, 4, 9], (numb) => Math.sqrt(numb)));


/************************* Reverse *************************/

const reverse = (args) => {
    return args.reduce((acc, current, idx) => {
        return [...acc, args.length - idx];
    }, []);
};

//console.log('reverse relut ' + reverse(['one', 'two', 'three']));


/************************* Some *************************/

const some = (args, func) => {
    return args.reduce((acc, current) => {
        return func(current) ? true : acc;
    }, false);
};

//console.log('some result ' + some([2, 5, 8, 1, 4], (element) => element < 10));
