// FAQ accordion
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  question.addEventListener('click', (e) => {
    e.preventDefault();
    if (question.parentNode.classList.contains('opened')) {
      question.parentNode.classList.remove('opened');
    } else {
      questions.forEach(q => q.parentNode.classList.remove('opened'));
      question.parentNode.classList.add('opened');
    }    
  })
})

// Close pop-ups
document.querySelectorAll('.close').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    el.closest('.popup').style.display = 'none';
    document.body.style.overflow = 'auto';
  })
})

// Get current year
document.getElementById('year').innerText = new Date().getFullYear();

// Marqee line
function marqee() {
  let marqee = document.getElementsByClassName('marqee');
  let elements = marqee[0].getElementsByClassName('marqee-item').length;

  for(var i=0;i < elements; i++){
    let m = marqee[0].cloneNode(true);
    document.getElementsByClassName('line')[0].prepend(m);
  };
}
marqee();

//Form calc
fetch('js/const.json')
  .then( response => response.json())
  .then( consts => {
    if (consts.online) {
      const comission = consts.comission / 100;
      const online = consts.online; 
      document.querySelector('input[name="sum"]').max = consts.limit;
      document.querySelector('input[name="sum"]').addEventListener('input', (evt) => {
        let sum = parseInt(document.querySelector('input[name="sum"]').value);
        let sumToPay = Math.round(sum + sum * comission);
        document.querySelector('.sum-to-pay').innerHTML = sumToPay + '&nbsp;₽';
        document.querySelector('.sum-to-get').innerHTML = sum + '&nbsp;₽';
        document.querySelector('.comission').innerHTML = Math.round(sum * comission) + '&nbsp;₽';
      })
    } else {
      let button = document.querySelector('.topup-button');
      button.style.filter = 'grayscale(1)';
      button.style.pointerEvents = 'none';
    }
  })

function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}

//Form send
button = document.querySelector('.topup-button');
button.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#submit').click();
});
