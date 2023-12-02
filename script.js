const scriptURL = 'https://script.google.com/macros/s/AKfycby7IEeerGnrb5XiyvkRsyCarjZb4D4XP3BOoOQ1ErCeEp1xJeDR0sb59Cnh77jn-pb4bQ/exec'
  const form = document.forms['submit-to-google-sheet']
   const msg=document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
      msg.innerHTML="Form submitted successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },800)
            form.reset() })
      .catch(error => console.error('Error!', error.message))
  })