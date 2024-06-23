let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let password = document.getElementById('password');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let generate = document.getElementById('generate');
let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerChar = 'abcdefghijklmnopqrstuvwxyz';
let allNumbers = '0123456789';
let specialChar = '~!@#$%^&*';

// Slider Value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
});

// Generate Button
generate.addEventListener('click', () => {
  password.value = generatePassword();
});

// Generate Password
function generatePassword() {
  let password = '';
  let allChars = '';
  allChars += uppercase.checked ? upperChar : '';
  allChars += lowercase.checked ? lowerChar : '';
  allChars += numbers.checked ? allNumbers : '';
  allChars += symbols.checked ? specialChar : '';

  if (allChars == '' || allChars.length == 0) {
    return password;
  }

  let i = 1;
  while (i <= inputSlider.value) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }

  return password;
}
