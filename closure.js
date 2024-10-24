/*function f1(){
    let a=10
    function f2(){
        let b=20
        console.log(a)
        console.log(b)
    }
    return f2
}
f1()
console.log(f1())

function create_counter(){
    let count=0
    return{
        increment:function(){
            count++
            return count
        },
        decrement:function(){
            count--
            return count
        }
    }
}
let a=create_counter()
console.log(a.increment())
console.log(a.increment())
console.log(a.decrement())

//PROMISE;
let p=new Promise((resolve,reject)=>{
    num1=12
    num2=10
    if(num2!=0){
        res=num1/num2
        resolve(`result is ${res}`)
    }
    else{
        reject("invalid")
    }
})
    p.then((msg)=> {
        console.log(msg)
    })
    p.catch((err)=>{
        console.log(err)
    })*/
        


//  let n=5
// for(let i=1; i<=n; i++){
//   let star=''
//   for(let j=1;j<=i;j++){
//     star=star+'*'
//   }
// console.log(star)
// }
 

/*let n=5
for(let i=1;i<=n;i++){
    let row=' '
    for(let j=1;j<=n-i;j++){
        row=row+' '
    }
    for(let k=1;k<=i;k++){
        row=row+'*'
    }
    console.log(row)
}*/

let n=5
for(let i=0;i<=n;i++){
    let row=' '
    for(let i=1;i<=n-i;i++){
        row=row+' '
    }
    for(let j=1;j<=2*i-1;j++){
        row=row+'*'
    }
    console.log(row)
}