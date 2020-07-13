
function switchMain(){
    let mainSlides = document.getElementsByClassName('main-slider')
    for(let i = 0; i<mainSlides.length; i++){
        mainSlides[i].classList.toggle('hide')
    }
}


const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 15);
    }
  };


if(document.querySelector('.info-img-wrapper')){
    let circleElement = document.querySelector('.info-img-card-circle')
    let cardElement = document.querySelector('.info-img-card')
    circleElement.addEventListener('click', ()=>{
        cardElement.classList.toggle('show')
    })
}

if(document.querySelector('.choose-us')){
    let btn = document.getElementsByClassName('points-btn')
    for(let i = 0; i<btn.length; i++){
        btn[i].addEventListener('click', e=>e.path[1].classList.toggle('show'))
    }
}

