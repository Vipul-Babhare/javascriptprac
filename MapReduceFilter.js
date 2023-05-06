let arr = [12,13,14,15]

let a = arr.map((value)=>{
  console.log(value)
  return value + 1
})
console.log(a)

let b = arr.map((value,index,array)=>{
  console.log(value,index,array)
  return value+index
})


let a2 = [45,23,20,39]
let n = a2.filter((b)=>{
  return b<30
})
console.log(n)

let a3 = [12,13,14]
let newa3 = a3.reduce((h1,h2)=>{
  return h1 + h2
})
console.log(newa3)