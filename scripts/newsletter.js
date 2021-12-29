/*
Script Credit: https://github.com/jamiewilson/form-to-google-sheets
*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbzHZ0WfeazbWR5bUZhRn7tcZEVHJKW13SU9OL60NVWs67mHg8SUMYa8kaCzPgisyRiUOg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  element1 = document.getElementById('confirmation-message');
  element2 = document.getElementById('contactForm')

  element2.style.opacity = "50%";

  e.preventDefault()
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      console.log('Success!', response)
      element1.innerHTML = "🎉 You have successfully subscribed!"
      element2.style.opacity = "100%";
    })
    .catch(error => {
      console.error('Error!', error.message)
      element1.innerHTML = "There was an error connecting to our server. Please try again later."
      element2.style.opacity = "100%";
    })
})
