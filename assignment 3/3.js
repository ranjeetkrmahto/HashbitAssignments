let string = 'INDIA';


let array = string.split('');


let index = array.indexOf('D');


array.splice(index, 0, 'NESIA');


let output = array.join('');

console.log(output); // Output: 'INDONESIA'
