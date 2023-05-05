let a = [12,22,23]
console.log(a.toString())
//to String method converts this to string

console.log(a.pop())
console.log(a.push(28))
console.log(a.toString())


let b = [11,12,13,14,15,16]
delete b[1]
console.log(b)
console.log(b.concat(a))

let c = [12,11,19,22]
console.log(c.sort())
console.log(c.slice(2,3))
console.log(c.splice(2,3,1002,1103))
console.log(c)