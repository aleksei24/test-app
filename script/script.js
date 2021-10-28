// ==================================================================
const pwField = document.querySelector('#pw-field');
const pwCopyBtn = document.querySelector('#copy-btn');
const pwLength = document.querySelector('#length');
const pwUpper = document.querySelector('#upper');
const pwLower = document.querySelector('#lower');
const pwNumber = document.querySelector('#number');
const pwSymbol = document.querySelector('#symbol');
const pwGenerateBtn = document.querySelector('#generate-btn');

// ==========================================
const upperLts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLts = 'abcdefghijklmnopqrstuvwxyz';
const nums = '0123456789';
const symb = '!@#$%^*()_+=';

// ======================================
function getUpperCase() {
  return upperLts[Math.floor(Math.random() * upperLts.length)];
}

function getLowerCase() {
  return lowerLts[Math.floor(Math.random() * lowerLts.length)];
}

function getNumber() {
  return nums[Math.floor(Math.random() * nums.length)];
}

function getSymbol() {
  return symb[Math.floor(Math.random() * symb.length)];
}

// =========================================
function generatePassword() {
  let len = pwLength.value;
  if (len > 20) {
    len = 20;
    pwLength.value = 20;
  }
  let password = '';

  for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwField.innerText = password;
}

function generateX() {
  const xs = [];
  if (pwUpper.checked) {
    xs.push(getUpperCase());
  }

  if (pwLower.checked) {
    xs.push(getLowerCase());
  }

  if (pwNumber.checked) {
    xs.push(getNumber());
  }

  if (pwSymbol.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) {
    return '';
  }

  return xs[Math.floor(Math.random() * xs.length)];
}

// ===================================
pwGenerateBtn.addEventListener('click', generatePassword);

// ==========================
pwCopyBtn.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = pwField.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  console.log('Password copied');
});
