// 1 - utils
const elBtn = _d_Q(".btn")

console.log(elBtn);


// 2 - map
const arr = ['olma', 'uzum', 'nok', 'anor']
const arrMap = arr.map((e)=>{
    return e + ' meva'
})

console.log(arrMap);


// 3 - sort
const numb = [1,2,3,4,5,6,700,8,9,11]
let sortArrr = numb.sort((a,b)=>{
    return a-b
})

console.log(sortArrr);


// 4 - keycode
window.addEventListener('keyup',(e)=>{
    console.log(e.keyCode);
})


// 