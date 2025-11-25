let str = 'Examine the example of Xylophone and x-ray.';
let newStr =str;
if(newStr.includes('x')){
    newStr = newStr.replace('x','y');
}

if(newStr.includes('x')){
    newStr = newStr.replace('X','Y');
}

console.log(str)
console.log(newStr)