function doComputation(row){
    return new Promise((res, rej) => {
        if(row.some(x => x < 0)){
            res(row);
        }
        else{
            rej("");
        }
    });
}
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let rpromise = []

for(let i = 0; i < array2D.length; i++){
    rpromise.push(doComputation(array2D[i]));
}

Promise.any(rpromise)
.then((rows) => console.log(rows))
.catch((e) => console.error(e));