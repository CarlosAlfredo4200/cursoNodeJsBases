

let res = 0;
for (let index = 2; index < process.argv.length; index++) {
   // res += process.argv[index] * 1;
    res += Number(process.argv[index]);
    
}

console.log(res);