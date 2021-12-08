const eventActive = {
    headerPageActive(){
        const bodyMenu = document.querySelectorAll('body[id]')

        const checkpoint = window.pageYOffset + window.screenY
        for(const body of bodyMenu){
            const bodyTop = body.offsetTop
            const bodyHeight = body.offsetHeight
            const bodyId = body.getAttribute('id')
    
            const checkpointStart = checkpoint >= bodyTop
            const checkpointEnd = checkpoint <= bodyTop + bodyHeight
    
            if(checkpointStart && checkpointEnd){
                document
                    .querySelectorAll('nav ul li a[href*=' + bodyId + ']').forEach(nav => {
                        nav.classList.add('active')
                    })
            } else{
                document
                .querySelectorAll('nav ul li a[href*=' + bodyId + ']').forEach(nav => {
                    nav.classList.remove('active')
                })
            }
        }
    }
}

const initEvent = {
    initWindow(){
        window.addEventListener('pageshow', () => {
            eventActive.headerPageActive()
        })
    },

    hamburguerShow(){
        const hamburguer = document.querySelectorAll('div.hamburguer img')

        hamburguer.forEach(nav => {
            nav.addEventListener('click', () => {
                document
                    .querySelector('div.menu-hamburguer')
                        .classList.toggle('show')

                document
                    .querySelector('body')
                        .classList.toggle('overflow')
            })
        })
    }
}

const appInit = {
    init(){
        initEvent.initWindow()
        initEvent.hamburguerShow()
    }
}

appInit.init()