const technology = {
  desktop(){
    const childOne = document.querySelector('.menu > .button:nth-child(1)')
    const childTwo = document.querySelector('.menu > .button:nth-child(2)')
    const childThree = document.querySelector('.menu > .button:nth-child(3)')

    const image = document.querySelector('section.photo-spaceship img')
    
    childOne.addEventListener('click', () => {
      childOne.classList.add('active')
      childTwo.classList.remove('active')
      childThree.classList.remove('active')
    
      document.querySelector('.spaceship#lauch-vehicle').classList.remove('hidde')
      document.querySelector('.spaceship#spaceport').classList.add('hidde')
      document.querySelector('.spaceship#space-capsule').classList.add('hidde')
    
      image.setAttribute('src', './assets/technology/image-launch-vehicle-portrait.jpg')
    })
    
    childTwo.addEventListener('click', () => {
      childTwo.classList.add('active')
      childOne.classList.remove('active')
      childThree.classList.remove('active')
    
      document.querySelector('.spaceship#spaceport').classList.remove('hidde')
      document.querySelector('.spaceship#lauch-vehicle').classList.add('hidde')
      document.querySelector('.spaceship#space-capsule').classList.add('hidde')
    
      image.setAttribute('src', './assets/technology/image-spaceport-portrait.jpg')
    })
    
    childThree.addEventListener('click', () => {
      childThree.classList.add('active')
      childOne.classList.remove('active')
      childTwo.classList.remove('active')
    
      document.querySelector('.spaceship#space-capsule').classList.remove('hidde')
      document.querySelector('.spaceship#lauch-vehicle').classList.add('hidde')
      document.querySelector('.spaceship#spaceport').classList.add('hidde')
    
      image.setAttribute('src', './assets/technology/image-space-capsule-portrait.jpg')
    })
  },

  mobile(){
    let intViewportWidth = window.innerWidth;

    const childOne = document.querySelector('.menu > .button:nth-child(1)')
    const childTwo = document.querySelector('.menu > .button:nth-child(2)')
    const childThree = document.querySelector('.menu > .button:nth-child(3)')

    const image = document.querySelector('section.photo-spaceship source')

    if(intViewportWidth < 1008){
      childOne.addEventListener('click', () => {
        childOne.classList.add('active')
        childTwo.classList.remove('active')
        childThree.classList.remove('active')
      
        document.querySelector('.spaceship#lauch-vehicle').classList.remove('hidde')
        document.querySelector('.spaceship#spaceport').classList.add('hidde')
        document.querySelector('.spaceship#space-capsule').classList.add('hidde')
      
        
      
        image.setAttribute('srcset', './assets/technology/image-launch-vehicle-landscape.jpg')
      })
      
      childTwo.addEventListener('click', () => {
        childTwo.classList.add('active')
        childOne.classList.remove('active')
        childThree.classList.remove('active')
      
        document.querySelector('.spaceship#spaceport').classList.remove('hidde')
        document.querySelector('.spaceship#lauch-vehicle').classList.add('hidde')
        document.querySelector('.spaceship#space-capsule').classList.add('hidde')
      
        image.setAttribute('srcset', './assets/technology/image-spaceport-landscape.jpg')
      })
      
      childThree.addEventListener('click', () => {
        childThree.classList.add('active')
        childOne.classList.remove('active')
        childTwo.classList.remove('active')
      
        document.querySelector('.spaceship#space-capsule').classList.remove('hidde')
        document.querySelector('.spaceship#lauch-vehicle').classList.add('hidde')
        document.querySelector('.spaceship#spaceport').classList.add('hidde')
      
        image.setAttribute('srcset', './assets/technology/image-space-capsule-landscape.jpg')
      })
    }

  }
}

const init = {
  init(){
    technology.desktop()
    technology.mobile()
  }
}

init.init()