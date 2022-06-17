const arr = [32,32,45,42,32,3232]
const print = (a)=>{
console.log(a);
}

const filter =(a)=>{
    return a.filter(i=>i>200)
}
console.log(filter(arr));