const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// Map Function

function mapFun(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

console.log(mapFun(sample, (x) => x * 3));



// Filter Function

function filterFun(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(filterFun(sample, (x) => x < 5));



// Reduce Function

const reduce = (array, callback, initial) => {
  let value = initial;
  
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    value = callback(value, currentValue);
  }
  return value;
};

const sumReduceFn = (initial, current) => initial + current;
const reduceTest = reduce(sample, sumReduceFn, 0);

console.log(`before ${sample} after reduce function ${reduceTest}`);




// reduce right

const reduceRight = (array, callback, initial) => {
  let value = initial;
  for (let i = array.length - 1; i >= 0; i--) {
    let currentValue = array[i];
    value = callback(value, currentValue);
  }
  return value;
};
const reduceRightTest = reduceRight(sample, sumReduceFn, 0);
console.log(reduceRightTest);



// every method

function everyFn(array, callback) {
  let value;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      value = true;
    } else {
      return (value = false);
    }
  }
  return value;
}

console.log(everyFn(sample, (x) => x > 6));



//some method.

function someFn(array, callback) {
  let value;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      value = true;
    } else {
      value = false;
    }
  }
  return value;
}

console.log(
  `array ${sample} after used some method : ${someFn(sample, (x) => x > 6)}`
);




//entries

function entriesFn(array) {
  let newObj = {};

  for (let i = 0; i < array.length; i++) {
    newObj[i] = [i, array[i]];
  }
  return newObj;
}

console.log(entriesFn(sample));

var interator = entriesFn(sample);
for (let e of Object.keys(interator)) {
  let value = interator[e];
  console.log(value);
}

