/*console.log(NaN==NaN)
console.log(NaN===NaN)
console.log(undefined==null)
console.log(typeof(+[]))
console.log(2**3**2)
console.log(4&2/5*2+2)
console.log(3|2*(4**2))
console.log(5&&3)
console.log(3||"")
console.log(+ true)
console.log(+ [])
console.log(+ "")
console.log("hello"&&0&&5&&9)
console.log((5||false||"hello")&&true)
console.log(9&&true||false&&true)
console.log(5||6||7||8||9||9||false)   
console.log(5&&7&&9&&true) */


// we cant represent NaN.
// undefined, null NaN, empty string , 0, -0 are false have false value.
//console.log(5&2)
//console.log(5|2)
//console.log(9|5&2)
//console.log(10&5|2)

/* 1.PRINT NUMBERS FROM 1 TO N ;
function naturalnum(n){
    for(let i=1; i<=n;i++){
        console.log(i)
    }
}
naturalnum(10)


//2.PRINT EVEN NUMBERS USING WHILE LOOP;
 function evennumber(){
    let num =2
    while(num<=10){

    
        console.log(num)
    num=num+2
    }
 }
 
 evennumber()

//3.PRINT ODD NUMBERS USING DO WHILE LOOP;
function oddnum(n){
    let i=1
    do{if(i%2==1){
        console.log(i)
    }
    i++

    }
    while(i<=n)
}
oddnum(5)

// 4. REVERSE THE ARRAY;
function reversearr(arr){
    for(let i=0;i<arr.length/2;i++){
        let temp= arr[i]
      arr[i]=  arr[arr.length-1-i]
        arr[arr.length-1-i]=temp
    }
    console.log(arr)
}
reversearr([1,2,3,4,5])*/

//5.REVERSING A STRING

/*let str= "ANUPAM"
let arr=str.split('')
console.log(arr)

let strs= "anupam"
str[0]='k'
console.log([0])*/

let strr= "anupam"
let arrs=strr.split('')
let start=0
let end= arrs.length-1
while(start<end){
    let temp= arrs[start]
    arrs[start]=arrs[end]
    arrs[end]=temp
    start=start+1
    end=end-1

}
console.log(arrs.join(''))

//Q. CREATE A FUNCTION CAR WHICH TAKES AN OBJECTHAS PROPERTIES , NUMBER_PLATE,COLOR,YEAROF PURCHASE AND A FUNCTION
//WHICH WILL CALCULATE THE CAR HOW OLD IT IS . THIS FUNCTION WILL TAKE ONE PARAMETER(CURRENT YEAR) AND DISPLAY THE 
//RESULT (YOUR TESLA CAR IS 10 YEARS OLD).

    function car( carmodel,year,color){
return{
    carmodel:carmodel,
    year:year,
    color:color,
    old:function(n){
        console.log(`your ${this.carmodel} is ${n - this.year} years old`)
    }
  }
}
    
    let car1 = car("TESLA", 2015,"BLACK");
    console.log(car1);
    car1.old(2020);

    

    
    let a ="ANUPAM SINGH"
    let v="aeiouAEIOU"

    function countvowels(a,v){
        // Initialize a counter variable to 0
        let count = 0;
        
        // Loop through each character in the string
        count=0
        for(let i=0;i<a.length;i++){
            // Check if the character is a vowel
            if(v.includes(a.charAt(i))){
                // Increment the counter
                count++;
            }
                count++
            }   
        }
        // Return the counter
        return count;
        return count
    }

    let res = countvowels(a,v);
    console.log(res);
    
           
                    