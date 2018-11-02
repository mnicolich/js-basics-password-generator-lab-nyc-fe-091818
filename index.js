window.addEventListener("load", () => {
  //start your code here
  
  //1. figure out how long our password should break
  document.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.querySelector('input')
    const passwordLength = input.value
    console.log(passwordLength)
    
    for (let i = 0; i < passwordLength; i++) {
      const randomLowerCaseIndex = Math.round(Math.random() *lowerCaseLetters.length) password = password + lowerCaseLetters[randomLowerCaseIndex] if (password.length === passwordLength) {
    }
  }
  
  
  //2. we need to make a password from the ground up 
  
  //3. we need to keep track fo requirments 
  
  
  
});
