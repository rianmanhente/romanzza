const header = document.querySelector('header')
window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollBy > 100)
})

const menuIcon = document.getElementById('menu-icon')
const navList = document.querySelector('.navlist')

 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navList.classList.toggle('open')
 }
const form = document.querySelector('.modalContainer');
const button = document.querySelector('.buttonSubmit');
const body = document.querySelector('body');
const catalago = document.querySelector('.catalago')
const overlay = document.querySelector('.overlay')
const btnCloseDiv = document.querySelector('.btnCloseDiv')
const inputsData = document.querySelector('.inputsData')
const link = document.querySelector('.link')
 
function openModal() {
  form.classList.add('active')
  overlay.classList.add('overlayShow')
}

function closeModal() {
  form.classList.remove('active')
  body.classList.remove('overlay')
  overlay.classList.remove('overlayShow')
  
}
 
btnCloseDiv.addEventListener('click', closeModal)

const addLoading = () => {
  button.innerHTML = '<img src="../assetsprojetos/loading.svg" class="loading">';
}

const removeLoading = () => {
  button.innerHTML = 'Enviar';
}

const addLink = () => {
  link.classList.add('linkShow')
}
 
const handleSubmit = (event) => {
  event.preventDefault();

  addLoading();
  const nome = document.querySelector('input[name=name]').value
  const email = document.querySelector('input[name=email]').value

  fetch('https://api.sheetmonkey.io/form/oU6wXs9FLCBu4ZjcJzCYat', {
    method: 'post',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome: nome, email: email }),
  }).then(() => removeLoading()).then(() => addLink())
}

form.addEventListener('submit', handleSubmit);

//fazer um orcamanento mande um email para a gnt ou entre em contato com wpp


//if submited to the form desabilitar essa funcao 


const form2 = document.getElementById('form2')

form2.addEventListener('submit', () => {
alert('Obrigado')
})

