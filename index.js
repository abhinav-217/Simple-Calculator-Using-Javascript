let input = document.getElementById('input');
let btn9 = document.getElementById('btn9');
let btn8 = document.getElementById('btn8');
let btn7 = document.getElementById('btn7');
let btn6 = document.getElementById('btn6');
let btn5 = document.getElementById('btn5');
let btn4 = document.getElementById('btn4');
let btn3 = document.getElementById('btn3');
let btn2 = document.getElementById('btn2');
let btn1 = document.getElementById('btn1');
let add = document.getElementById('btnadd');
let sub = document.getElementById('btnsub');
let mul = document.getElementById('btnmul');
let div = document.getElementById('btndiv');
let btnequal = document.getElementById('btnequal');
let clear = document.getElementById('btnAC');

let InputNum = input.value;

btn9.addEventListener('click',()=>{
    // console.log("9");
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"9";

})
btn8.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"8";

})
btn7.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"7";

})
btn6.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"6";

})
btn5.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"5";

})
btn4.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"4";

})
btn3.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"3";

})
btn2.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"2";

})
btn1.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"1";

})
clear.addEventListener('click',()=>{
    input.value = ""

})
add.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"+";
})
sub.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"-";
})
mul.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"*";
})
div.addEventListener('click',()=>{
    let previousVal = input.value;
    // console.log(previousVal)
    input.value = previousVal+"/";
})

btnequal.addEventListener('click',()=>{
    // console.log(input.value);
   let ans =  eval(input.value)
//    console.log(ans);
   input.value = ans;
})
