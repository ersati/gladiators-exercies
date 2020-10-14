const sample = [ 1, 2, 3, 4, 5]

function mapFn(array, callback) {
    return array.reduce((prev, curr) => [...prev, callback(curr)],[])
}

const result = mapFn(sample, x => x* x)

console.log(result)


function filterFn(array, callback) {
    
    return array.reduce((prev,curr) => callback(curr) ? [...prev, curr] : prev , [])
}


const resultFilter = filterFn(sample, x => x >2)

console.log(resultFilter)

function someFn(array, callback) {
    return array.reduce((prev,curr) => {
        if(callback(curr) && callback(prev)){
            return true
        }
        else {
            return false
        }
    })
}

const resultSome = someFn(sample, x => x>0)

console.log(resultSome)

function everyFn(array, callback) {
    return array.reduce((prev,curr) => {
        let value;
        if(callback(curr)){
            value = true
        }
        else {
            value = false
        }
        return value
    })
}

const resultEvery = everyFn(sample, x => x >2)

console.log(resultEvery)



