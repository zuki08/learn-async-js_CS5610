function doComputation(row){
    return new Promise((res, rej) => {
        res(row.reduce((acc, ele) => acc += ele, 0))
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rpromise = []

for(let i = 0; i < array2D.length; i++){
    rpromise.push(doComputation(array2D[i]));
}

Promise.all(rpromise)
.then(rSums => console.log(rSums.reduce((acc, ele) => acc += ele, 0)))