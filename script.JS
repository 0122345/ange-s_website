$(document).ready(function () {
  // Hover event
  $('.color-option img').hover(function () {
    var src = $(this).attr('src');
    $('.card-img-top').attr('src', src);
  });

  // Click event
  $('.color-option img').click(function () {
    var src = $(this).attr('src');
    $('.card-img-top').attr('src', src).css('height', '100%').css('width', '100%');
  });
});

// function expand() {
//   const stock = document.getElementById('store');
//   stock.addEventListener('click', () => {
//     stock.classList.toggle('active');
//     if
//   })
//   stock.style.display = 'block';
// }


document.getElementById('toggleButton').addEventListener('click', function () { 
  var store = document.getElementById('store');
  if(store.style.display === 'none') {
    store.style.display = 'block';
  }
  else{
    store.style.display = 'none';
  }
});


//searchbar

  const searchBar = document.getElementById['search'].querySelector('input').value;
  searchBar.addEventListener('keyup', function (apes) {
    const term = apes.target.value.toLowerCase();
    const searchs = list.getElementByTagName('li');
    Array.from(searchs).forEach(function (search) {
      const title = search.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(term) != -1) {
        search.style.display = 'block';
      }
      else {
        search.style.display = 'none';
      }
    })
  })



function validate() {

  var name = document.getElementById("name")
  var email = document.getElementById("email")
  var subject = document.getElementById("subject")
  var msgbox = document.getElementById("msgbox")


  var x = document.myform.email.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");


  if (name.value.trim() == "") {
    alert("please enter your name")
    name.style.border = "solid 3px red";
    return false;
  }


  else if (email.value.trim() == "") {
    alert("please enter your email")
    email.style.border = "solid 3px red";
    return false;
  }



  else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
    alert("Please enter a valid e-mail address ! ");
    return false;
  }

  else if (subject.value.trim() == "") {
    subject.style.border = "solid 3px red";
    return false;
  }


  else if (msgbox.value.trim() == "") {
    msgbox.style.border = "solid 3px red";
    return false;
  }
  else if (msgbox.value.trim().length < 20) {
    alert("please enter atleast 20 characters")
    return false;
  }


  else if (email.value.trim() != "") {
    email.style.border = "solid 3px green";
    email.style.transitionDelay(25);
    return true;
  }

  else if (subject.value.trim() != "") {
    subject.style.border = "solid 3px green";
    subject.style.transitionDelay(25);
    return true;
  }
  else if (name.value.trim() != "") {
    name.style.border = "solid 3px green";
    name.style.transitionDelay(25);
    return true;
  }

  else {
    alert("your post was received is unsuccessful received!")
    name.style.border = "solid 3px green";
    email.style.border = "solid 3px green";
    subject.style.border = "solid 3px green";
    msgbox.style.border = "solid 3px green";
    return false;
  }
}
function con() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const msgbox = document.getElementById("msgbox").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("subject", subject);
  localStorage.setItem("msgbox", msgbox);


};


function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    msgbox: document.getElementById("msgbox").value,
  };
  const serviceID = "service_xcg0t07";
  const templateID = "template_2p8rhkn";

  emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msgbox").value = "";
        console.log(res);
        alert("your message was sent successfully!")
      }
    )
    .catch(err => console.log(err));

}

