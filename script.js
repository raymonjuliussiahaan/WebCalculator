const calculatorScreen=document.querySelector(`.calculator-Screen`)

const updateScreen=(number) =>{
    calculatorScreen.value=number
}


const numbers= document.querySelectorAll(".number")
const inputNumber = (number) => {
   if (currentNumber==='0') {
     currentNumber=number   
}  else{
    currentNumber+=number
 }
}
numbers.forEach((number) => {
    number.addEventListener("click",(event) =>{
    input0perator(event.target.value)
    })
})
const inputOperator=(operator) =>{
    prevNumber=currentNumber
    calculation0perator=operator
    currentNumber=''
}
const equalSign=document.querySelector('.equal-Sign')

equalSign.addEventListener('click',()=>{
console.log('equal button is pressed')
})
const calculate =()=>{
    let result=''
    switch (calculation0perator){
        case'+':
         result=parseInt(prevNumber)+(CurrentNumber)
         break
        case '-':
            result=prevNumber-CurrentNumber
         break
        case'*':
        result=prevNumber*CurrentNumber 
         break
        case "/"
            result=prevNumber/CurrentNumber
         break
        default:
            return     
    }
        currentnumber=result
        calculation0perator=''   
}
const clearAll=()=>{
    prevNumber=''
    calculation0perator=''
    currentNumber='0'
}
const clearBtn=document.querySelector(.all=clear)
clearBtn.addEventLListener('click',()=>{
    clearAll()
    updateScreen(currentNumber)
}
const clearBtn=document.querySelector(.decimal)
decimal.addEventLListener('click',(event)=>{
console.log(event.target.value)    
}