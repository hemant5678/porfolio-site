var skills_a =document.getElementById("a");
var experience_b =document.getElementById("b");
var education_c =document.getElementById("c");

var skills =document.getElementById("skills");
var experience =document.getElementById("experience");
var education =document.getElementById("education");



skills_a.addEventListener("click",() => {
    skills.style.display="block"
    experience.style.display="none"
    education.style.display="none"

})

experience_b.addEventListener("click",() => {
    experience.style.display="block"
    skills.style.display="none"
    education.style.display="none"

})

education_c.addEventListener("click",() => {
    education.style.display="block"
    experience.style.display="none"
    skills.style.display="none"

})

// click menu


var sidemenu = document.getElementById("sidemenu");



function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}


// form

const msg = document.getElementById("msg");

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzP-sFv4ABdRMsxvzsn-50knMQbjmlJpiZN7Byk8p40pz529mgEJ6QXDCehR7JGhM6I7Q/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

 
