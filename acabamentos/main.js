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

let imageAcabamentos = [
    {
    'src': 'Amaro.jpg',
    'name': 'AMARO',
    'content': 'woqifgnboekgjdkjwkebjmbl'
    },
    {
    'src': 'Arena.jpg',
    'name': 'Arena',
    'content': 'woqifgnboekgjdkjwkebjmbl'
    },
    {
    'src': 'Coffee.jpg',
    'name': 'Coffe',
    },
    {
    'src': 'Madeirado_Malaga.jpg',
    'name': 'Madeirado-Malaga',
    },
    {
    'src': 'Madeirado_Malta.jpg',
    'name': 'Madeirado Malta',
    },
    {
    'src': 'Madeirado_Toscana.jpg',
    'name': 'Madeirado-Toscana',
    },
    {
    'src': 'Malmo.jpg',
    'name': 'Malmo',
    },
    {
    'src': 'Maya.jpg',
    'name': 'Laca Maya',
    },
    {
    'src': 'Metalizado-Bronze.jpg',
    'name': 'Laca Metalizado-Bronze',
    },
    {
    'src': 'Metalizado-Chumbo.jpg',
    'name': 'Laca Metalizado-Chumbo',
    },
    {
    'src': 'Metalizado-Cobre.jpg',
    'name': 'Laca Metalizado-Cobre',
    },
    {
    'src': 'Metalizado-Ouro.jpg',
    'name': 'Laca Metalizado-Ouro',
    },
    {
    'src': 'Neutral.png',
    'name': 'Neutral',
    },
    {
    'src': 'Opera-Pedra.jpg',
    'name': 'Opera-Pedra',
    },
    {
    'src': 'Orion.jpg',
    'name': 'Orion',
    },
    {
    'src': 'Oslo.png',
    'name': 'Oslo',
    },
    {
    'src': 'Papaya.jpg',
    'name': 'Laca Papaya',
    },
    {
    'src': 'Pau-Ferro.jpg',
    'name': 'Pau-Ferro',
    },
    {
    'src': 'Pedra-Magma.jpg',
    'name': 'Pedra-Magma',
    },
    {
    'src': 'Pedra-Pietra.jpg',
    'name': 'Pedra-Pietra',
    },
    {
    'src': 'Perolizado-Branco.jpg',
    'name': 'Laca Perolizado-Branco',
    },
    {
    'src': 'Reflecta-Bronze.png',
    'name': 'Reflecta-Bronze',
    },
    {
    'src': 'Reflecta-Prata.png',
    'name': 'Reflecta-Prata',
    },
    {
    'src': 'Rose-Quartz.jpg',
    'name': 'Laca Rose-Quartz',
    },
    {
    'src': 'Royal.jpg',
    'name': 'Laca Royal',
    },
    {
    'src': 'Sedona2.jpg',
    'name': 'Sedona',
    },
    {
    'src': 'Serenity.jpg',
    'name': 'Laca Serenity',
    },
    {
    'src': 'Silver.jpg',
    'name': 'Laca Silver',
    },
    {
    'src': 'Sylt.jpg',
    'name': 'Laca Sylt',
    },
    {
    'src': 'Tabasco.jpg',
    'name': 'Tabasco',
    },
    {
    'src': 'Teal.jpg',
    'name': 'Laca Teal',
    },
    {
    'src': 'Terracota.jpg',
    'name': 'Terracota',
    },
    {
    'src': 'Toledo.jpg',
    'name': 'Toledo',
    },
    {
    'src': 'Topázio.jpg',
    'name': 'Topázio',
    },
    {
    'src': 'Unicolor-Nero.jpg',
    'name': 'Unicolor-Nero',
    },
    {
    'src': 'Unicolor-Saara.jpg',
    'name': 'Unicolor-Saara',
    },
    {
    'src': 'Unicolor-Vulcano.jpg',
    'name': 'Unicolor-Vulcano',
    },
    {
    'src': 'Verona.jpg',
    'name': 'Verona',
    },
    {
    'src': 'Vert.jpg',
    'name': 'Vert',
    },
    {
    'src': 'Viena.jpg',
    'name': 'Viena',
    },
    {
    'src': 'Wadden.jpg',
    'name': 'Laca Wadden',
    },
    {
    'src': 'Quadretti.jpg',
    'name': 'Quadretti',
    },
    {
    'src': 'Royal.jpg',
    'name': 'Royal',
    },

    {
    'src': 'Azul.jpg',
    'name': 'Azul',
    'content': 'woqifgnboekgjdkjwkebjmbl'
    }, 
    {
    'src': 'Avela.jpg',
    'name': 'Laca Avelã',
    'content': 'woqifgnboekgjdkjwkebjmbl'
    }, 
    {
    'src': 'Basalto.jpg',
    'name': 'Basalto',
    'content': 'woqifgnboekgjdkjwkebjmbl'
    }, 
    {
    'src': 'Baviera.jpg',
    'name': 'Laca Baviera',
    'content': 'woqifgnboekgjdkjwkebjmbl'
    },
    {
    'src': 'Bali.jpg',
    'name': 'Bali',
    },
    {
    'src': 'Bertha.jpg',
    'name': 'Laca Bertha',
    },
    {
    'src': 'Bianco.jpg',
    'name': 'Laca Bianco',
    },
    {
    'src': 'Black.jpg',
    'name': 'Laca Black',
    },
    {
    'src': 'Blanc.png',
    'name': 'Laca Blanc',
    },
    {
    'src': 'Braganca.jpg',
    'name': 'Laca Braganca',
    },
    {
    'src': 'Capuccino.jpg',
    'name': 'Laca Capuccino',
    },
    {
    'src': 'Cardeal.jpg',
    'name': 'Laca Cardeal',
    },
    {
    'src': 'Cinder-1.jpg',
    'name': 'Laca Cinder',
    },
    {
    'src': 'Cobalto.jpg',
    'name': 'Cobalto',
    },
    {
    'src': 'Carvalho-natural_.jpg',
    'name': 'Carvalho-Natural',
    },
    {
    'src': 'ESMERALDA.jpg',
    'name': 'Esmeralda',
    },
    {
    'src': 'Espelho_Bronze.png',
    'name': 'Espelho-Bronze',
    },
    {
    'src': 'Espelho_Fume.png',
    'name': 'Espelho-Fume',
    },
    {
    'src': 'Espelho.png',
    'name': 'Espelho',
    },
    {
    'src': 'Freijó.jpg',
    'name': 'Freijó',
    },
    {
    'src': 'Elba.jpg',
    'name': 'Laca Elba',
    // 'content': 'oioi'
    },
    {
    'src': 'Concretto.jpg',
    'name': 'Laca Concretto',
    },
    {
    'src': 'Golden.jpg',
    'name': 'Laca Golden',
    },
    {
    'src': 'Himalaia.jpg',
    'name': 'Himalaia',
    },
    {
    'src': 'Lago.jpg',
    'name': 'Laca Lago',
    },
    {
    'src': 'Land.jpg',
    'name': 'Laca Land',
    },
    {
    'src': 'Coney.jpg',
    'name': 'Coney',
    },
    {
    'src': 'Lilac.jpg',
    'name': 'Laca Lilac',
    },
    {
    'src': 'Dakar.jpg',
    'name': 'Dakar',
    },

]

let main = document.getElementById('main')
let divMain = document.getElementById('divmain')

window.addEventListener('load', () => {
    imageAcabamentos.map((acabamento) => {
        let div = document.createElement('div')
        div.classList.add('containerCenter')

        let img = document.createElement('img')
        img.setAttribute('src', `../assets/${acabamento.src}`)
        img.classList.add('imgAcabamento')
        div.appendChild(img)
        main.appendChild(div)
       
        let divName = document.createElement('div')
        divName.classList.add('divName')
        let acabamentoName = document.createElement('p')
        acabamentoName.innerHTML = `${acabamento.name}`
        acabamentoName.classList.add('acabamentoName')
        divName.appendChild(acabamentoName)
        div.appendChild(divName)    

    img.addEventListener('click', () => {
        let divPopUp = document.createElement('div')
        let popUpWrapper = document.createElement("div")
        popUpWrapper.classList.add('popUpWrapper')
        divPopUp.appendChild(popUpWrapper)
        div.appendChild(divPopUp)
        let popUp = document.createElement('div')
        popUp.classList.add('popUp')
        popUpWrapper.appendChild(popUp)
        let h2 = document.createElement('h2')
        h2.innerHTML = `${acabamento.name}`
        h2.classList.add('h2PopUp')
        let p = document.createElement('p')
        p.classList.add('pContent')
        p.innerHTML = `${acabamento.content}`
        let buttonClose = document.createElement("button")
        buttonClose.classList.add('buttonPopUp')
        buttonClose.innerHTML = 'X'
        popUp.appendChild(buttonClose)
        popUp.appendChild(h2)
        popUp.appendChild(p)

        popUpWrapper.addEventListener('click', () => {
            divPopUp.classList.add('popUpDisplay')
            
        })

    })
    })
})
