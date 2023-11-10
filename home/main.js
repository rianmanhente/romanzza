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

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
          
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
 
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

