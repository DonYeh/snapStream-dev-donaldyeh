
export default function numToStringBase(number,base){

    let answer = ""
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

   if(number < 0){
        return "-" + numToStringBase(-number,base)
    }

    if(number === 0){
        console.log('number is 0')
        return answer + 0
    }

    while (number > 0 && base > 0){
        const remainder = number % base;
        answer = digits[remainder] + answer
        number = Math.floor(number / base)
        console.log('inside while, number: ', number)
    }

    return {answer}
        
    
}