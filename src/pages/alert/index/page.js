import '@babel/polyfill'
import ob from './a.js'
const a = 34
const b = [3,5]
console.log(a,ob)
let c = {
    name: 'dona'
}
let d = {
    age: '23'
}
let e = Object.assign( c,d,ob)
console.log(e)
console.log(e)