function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  
  let result;

  if (isNaN(num1)) {
    result = 'Please enter valid numbers';
  } else if (num1<=100|| num1>=0) {
    result = num1*5;
  } else if (num1>=101|| num1<=200) {
    result = (100*5)+((num1-100)*7);
  } else if (num1>=201) {
    result = (100*5)+(100*7)((num1-200)*10);
  }  else {
    result = 'Enter Correct Units';
  }

  document.getElementById('result').textContent = `Total Electricity Bill: Rs. ${result}`;
}