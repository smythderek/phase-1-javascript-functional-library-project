function myEach(collection, callback) {    
    let generalCollection = collection;

    if (Array.isArray(collection) !== true) {
        generalCollection = Object.values(collection);   
    }

    for (let i = 0; i < generalCollection.length; i++) {
        const element = generalCollection[i];
        callback(element);
    }

    return collection;
} 

function myMap(collection, callback) {
    let generalCollection = collection;

    if (Array.isArray(collection) !== true) {
        generalCollection = Object.values(collection);   
    }

    const newArray = []; 

    for (let i = 0; i < generalCollection.length; i++){
        const element = generalCollection[i];
        newArray.push(callback(element));
    }

    return newArray;
}

function myReduce(collection, callback, acc) {
    let generalCollection = collection;

    if (Array.isArray(collection) !== true) {
        generalCollection = Object.values(collection);   
    }

    if (!acc) {
        acc = generalCollection[0];
        generalCollection = generalCollection.slice(1);
    }

    for (let i = 0; i < generalCollection.length; i++) {
        acc = callback(acc, generalCollection[i], generalCollection)
    }

    return acc;
}

function myFind(collection, predicate) {
    let generalCollection = collection;

    if (Array.isArray(collection) !== true) {
        generalCollection = Object.values(collection);   
    }

    for (let i = 0; i < generalCollection.length; i++) {
        const element = generalCollection[i];
        if (predicate(element) === true) {
            return element;
        }
    }
}

function myFilter(collection, predicate) {
    let generalCollection = collection;

    if (Array.isArray(collection) !== true) {
        generalCollection = Object.values(collection);   
    }

    const newArray = [];

    for (let i = 0; i < generalCollection.length; i++) {
        const element = generalCollection[i];
        if (predicate(element) === true) {
            newArray.push(element);
        }
    }

    return newArray;

}

function mySize(collection) {
    let generalCollection = collection;

    if (Array.isArray(collection) !== true) {
        generalCollection = Object.values(collection);   
    }

    let count = 0;

    for (let i = 0; i < generalCollection.length; i++) {
        count++;
    }

    return count;
}

function myFirst(array, n) {
    if (!n) {
       return array[0];
    }

    else return array.slice(0, n);
}

function myLast(array, n) {
    if (!n) {
        return array[array.length - 1];
    }

    else return array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}
console.log(myValues({one: 1, two: 2, three: 3}));