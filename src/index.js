module.exports = function toReadable (number) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  
    if(number < 100){
      if(number <= 20){
        return arr[number];
      } else if (number > 20 && number < 100 && number%10 === 0){
        return (number === 40)? 'forty' : `${arr[10 + number/10].split('').slice(0,-3).join('')}y`;
      } else {
        const firstNum = +number.toString().split('').slice(0,1).join(''),
              lastNum = +number.toString().split('').slice(1).join('');
        
        return (firstNum === 2)? `${arr[20]} ${arr[lastNum]}` : 
               (firstNum === 4)? `forty ${arr[lastNum]}` : 
               `${arr[firstNum + 10].split('').slice(0,-3).join('')}y ${arr[lastNum]}`;
      }
    } else {
      if(number%100 === 0){
        return `${arr[number / 100]} hundred`;
      } else {
        const firstNum = +number.toString().split('').slice(0,1).join(''),
              secondNum = +number.toString().split('').slice(1,2).join(''),
              lastNum = +number.toString().split('').slice(2).join('');
        let num = +(secondNum.toString() + lastNum.toString());
  
        if(num <= 20){
          return `${arr[firstNum]} hundred ${arr[num]}`;
        } else if (num > 20 && num%10 === 0){
          return (secondNum === 4)? `${arr[firstNum]} hundred forty` : `${arr[firstNum]} hundred ${arr[10 + num/10].split('').slice(0,-3).join('')}y`;
        } else {
          return (secondNum === 2)? `${arr[firstNum]} hundred ${arr[20]} ${arr[lastNum]}` : 
                 (secondNum === 4)? `${arr[firstNum]} hundred forty ${arr[lastNum]}` : 
                 `${arr[firstNum]} hundred ${arr[secondNum + 10].split('').slice(0,-3).join('')}y ${arr[lastNum]}`;
        }    
      }
    }            
}
