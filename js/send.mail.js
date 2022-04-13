const contactForm = document.querySelector('.contact__form');

const email = document.getElementsByName('email');
const name = document.getElementsByName('name');
const object = document.getElementsByName('object');
const message = document.getElementsByName('message');

const sendMessage = (e) => {
  e.preventDefault();
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "redilutunx@gmail.com",
      Password : "BE17B5CAB4735C788D53508CDFDF35C0F8AC",
      To : 'redilutunx@gmail.com',
      From : email,
      Subject : object,
      Body : message
  }).then(
    message => alert("message envoyé avec succès")
  );
}

contactForm.addEventListener("submit", sendMessage);