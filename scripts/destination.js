const destination= {
  activeSection(){
      const headerMoon = document.querySelector('.header nav ul li a#moon')
      const headerMars = document.querySelector('.header nav ul li a#mars')
      const headerEuropa = document.querySelector('.header nav ul li a#europa')
      const headerTitan = document.querySelector('.header nav ul li a#titan')

      const image = document.querySelector('section.stars img')

      headerMoon.addEventListener('click', (event) => {
        
        headerMoon.classList.add('active')
        headerMars.classList.remove('active')
        headerEuropa.classList.remove('active')
        headerTitan.classList.remove('active')

        document.querySelector('div.space-stars#moon').classList.remove('hidde')
        document.querySelector('div.space-stars#mars').classList.add('hidde')
        document.querySelector('div.space-stars#europa').classList.add('hidde')
        document.querySelector('div.space-stars#titan').classList.add('hidde')   

        image.setAttribute('src', '/assets/destination/image-moon.webp')

        event.preventDefault()
      })

      headerMars.addEventListener('click', (event) => {
          
        headerMars.classList.add('active')
        headerMoon.classList.remove('active')
        headerEuropa.classList.remove('active')
        headerTitan.classList.remove('active')

        document.querySelector('div.space-stars#mars').classList.remove('hidde')
        document.querySelector('div.space-stars#moon').classList.add('hidde')
        document.querySelector('div.space-stars#europa').classList.add('hidde')
        document.querySelector('div.space-stars#titan').classList.add('hidde')

        image.setAttribute('src', '/assets/destination/image-mars.webp')

        event.preventDefault()
        
      })

      headerEuropa.addEventListener('click', (event) => {
          
        headerEuropa.classList.add('active')
        headerMoon.classList.remove('active')
        headerMars.classList.remove('active')
        headerEuropa.classList.remove('active')

        document.querySelector('div.space-stars#europa').classList.remove('hidde')
        document.querySelector('div.space-stars#moon').classList.add('hidde')
        document.querySelector('div.space-stars#mars').classList.add('hidde')
        document.querySelector('div.space-stars#titan').classList.add('hidde')

        image.setAttribute('src', '/assets/destination/image-europa.webp')

        event.preventDefault()
          
      })

      headerTitan.addEventListener('click', (event) => {
          
        headerTitan.classList.add('active')
        headerMoon.classList.remove('active')
        headerMars.classList.remove('active')
        headerEuropa.classList.remove('active')

        document.querySelector('div.space-stars#titan').classList.remove('hidde')
        document.querySelector('div.space-stars#moon').classList.add('hidde')
        document.querySelector('div.space-stars#mars').classList.add('hidde')
        document.querySelector('div.space-stars#europa').classList.add('hidde')

        image.setAttribute('src', '/assets/destination/image-titan.webp')

        event.preventDefault()
          
      })
  }
}

destination.activeSection()