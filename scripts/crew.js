const swiper = {
  swiperSlide(){
    let swiper = new Swiper(".mySwiper", {
      simulateTouch: false,
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  },

  eventSlide(){
    const image = document.querySelector('section.photo-commander img')

    const slideOne = document.querySelector('div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal> .swiper-pagination-bullet:nth-child(1)')

    const slideTwo = document.querySelector('div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal> .swiper-pagination-bullet:nth-child(2)')

    const slideTree = document.querySelector('div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal> .swiper-pagination-bullet:nth-child(3)')

    const slideFor = document.querySelector('div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal> .swiper-pagination-bullet:nth-child(4)')

    slideOne.addEventListener('click', () => {
      image.setAttribute('src', '/assets/crew/image-douglas-hurley-370.webp')
    })

    slideTwo.addEventListener('click', () => {
      image.setAttribute('src', '/assets/crew/image-mark-shuttleworth-330.webp')
    })

    slideTree.addEventListener('click', () => {
      image.setAttribute('src', '/assets/crew/image-victor-glover-410.webp')
    })

    slideFor.addEventListener('click', () => {
      image.setAttribute('src', '/assets/crew/image-anousheh-ansari-470.webp')
    })
  }
}

const init = {
  init(){
    swiper.swiperSlide()
    swiper.eventSlide()
  }
}

init.init()