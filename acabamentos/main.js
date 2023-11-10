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
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Arena.jpg',
    'name': 'Arena',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Coffee.jpg',
    'name': 'Coffe',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Madeirado_Malaga.jpg',
    'name': 'Madeirado-Malaga',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Madeirado_Malta.jpg',
    'name': 'Madeirado Malta',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Madeirado_Toscana.jpg',
    'name': 'Madeirado-Toscana',
    'content': 'Com leves marcações de veios envelhecidos, Toscana é um padrão com aspecto semidecorativo de tonalidade clara. Harmoniza muito bem com o conceito urbano/natural. Uso: painéis editáveis, portas editáveis e complementos em geral. Espessura disponível: 18mm.'
    },
    {
    'src': 'Malmo.jpg',
    'name': 'Malmo',
    'content': 'Malmo é uma cidade sueca, limpa, organizada e desenvolvida, é a mais próxima da Dinamarca e chegou a pertencer ao território dinamarquês até o século XVII. O topônimo Malmö deriva de malm (areia) e Hög (monte), significando "monte de areia". Malmo tem sua própria história, com heranças do período medieval e da cultura escandinava por todos os lados. Desta forma o novo acabamento Malmo traduz em sua cor neutra a delicadez e aconchego dos ambientes escandinavos. Uso: Linha Tailor Made, gavetas, portas e painéis editáveis. Espessuras disponíveis: 6mm, 15mm, 18mm, 25mm e 43mm.'
    },
    {
    'src': 'Maya.jpg',
    'name': 'Laca Maya',
    'content': 'Inspirado na lâmina de madeira natural com acabamento polido, Malta possui textura suave e traz marcas da natureza, dando sofisticação ao ambiente. Serve para ambientes que buscam combinar outros amadeirados, elementos de decoração mais vibrantes e cores mais neutras. Uso: painéis editáveis, portas editáveis e complementos em geral. Espessuras disponíveis: 6mm, 18mm, 25mm, 43mm.'
    },
    {
    'src': 'Metalizado-Bronze.jpg',
    'name': 'Laca Metalizado-Bronze',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Metalizado-Chumbo.jpg',
    'name': 'Laca Metalizado-Chumbo',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Metalizado-Cobre.jpg',
    'name': 'Laca Metalizado-Cobre',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.' 
    },
    {
    'src': 'Metalizado-Ouro.jpg',
    'name': 'Laca Metalizado-Ouro',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Neutral.png',
    'name': 'Neutral',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Opera-Pedra.jpg',
    'name': 'Opera-Pedra',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Orion.jpg',
    'name': 'Orion',
    'content': 'Inspirado na Constelação de Órion, uma das mais respeitadas da mitologia, seu tom areia é associado às areias dos desertos, o melhor local para apreciarmos a profusão das estrelas de uma constelação. Padrão Unicolor em tom areia, sem pigmentação complementar com textura lisa e toque aveludado,que traz a sensação de pintura acetinada. Seguindo a tendência do monocromatismo, possui complemento de mesma cor em perfis de alumínio e vidro. Uso: Linha Tailor Made, portas e painéis editáveis. Espessuras disponíveis: 6mm, 18mm, 36mm, 43mm.'
    },
    {
    'src': 'Oslo.png',
    'name': 'Oslo',
    'content': 'Oslo, capital da Noruega, é conhecida por suas áreas verdes e seus museus, seu nome deriva do nórdico mais primitivo e significa "a colina dos deuses". Ao longo da história, a capital também ficou conhecida como "a cidade dos tigres", devido ao seu clima frio e hostil. Batizado como Oslo, o novo padrão amadeirado claro remete ao Estilo Escandinavo clássico e típico, criando a sensação de serenidade, limpeza e bem-estar. O acabamento traduz a leveza do tom amadeirado em uma atmosfera aconchegante e natural, transmitindo simplicidade e conforto, sem deixar a sofisticação de lado. Um padrão versátil que combina muito bem com a paleta de tons cinza e bege. Uso: Linha Tailor Made, gavetas, portas e painéis editáveis. Espessuras disponíveis: 6mm, 15mm, 18mm, 25mm e 43mm.'
    },
    {
    'src': 'Papaya.jpg',
    'name': 'Laca Papaya',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Pau-Ferro.jpg',
    'name': 'Pau-Ferro',
    'content': 'O padrão Pau-Ferro leva elegância e delicadeza ao ambiente graças ao seu desenho marcante. O tingimento com verniz protege e dá longevidade ao produto. Uso: tampos, painéis e portas de MDF. Espessuras disponíveis: 18mm, 50mm.'
    },
    {
    'src': 'Pedra-Magma.jpg',
    'name': 'Pedra-Magma',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Pedra-Pietra.jpg',
    'name': 'Pedra-Pietra',
    'content': 'O padrão Pietra é inspirado no mármore claro, é marcado pela rusticidade da natureza e possui textura de pedra. Uso: painéis editáveis, portas editáveis e complementos em geral. Espessura disponível: 18mm.'
    },
    {
    'src': 'Perolizado-Branco.jpg',
    'name': 'Laca Perolizado-Branco',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Reflecta-Bronze.png',
    'name': 'Reflecta-Bronze',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Reflecta-Prata.png',
    'name': 'Reflecta-Prata',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Rose-Quartz.jpg',
    'name': 'Laca Rose-Quartz',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Royal.jpg',
    'name': 'Laca Royal',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Sedona2.jpg',
    'name': 'Sedona',
    'content': 'O padrão Sedona possui a combinação sutil dos poros com a cor natural e textura de lâmina de madeira lixada, resultando em elegância e delicadeza. Combina perfeitamente com tons acinzentados e azulados. Uso: painéis editáveis, portas editáveis e complementos em geral. Espessura disponível: 6mm, 18mm, 36mm e 43mm.'
    },
    {
    'src': 'Serenity.jpg',
    'name': 'Laca Serenity',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Silver.jpg',
    'name': 'Laca Silver',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Sylt.jpg',
    'name': 'Laca Sylt',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Tabasco.jpg',
    'name': 'Tabasco',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Teal.jpg',
    'name': 'Laca Teal',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Terracota.jpg',
    'name': 'Terracota',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Toledo.jpg',
    'name': 'Toledo',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Topázio.jpg',
    'name': 'Topázio',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Unicolor-Nero.jpg',
    'name': 'Unicolor-Nero',
    'content': 'Nero é a uma peça curinga para completar ambientes mais claros e criar um contraste requintado no projeto. Sua textura trama traz um toque acetinado. Espessuras disponíveis: 6mm, 18mm, 25mm e 43mm.'
    },
    {
    'src': 'Unicolor-Saara.jpg',
    'name': 'Unicolor-Saara',
    'content': 'O padrão Saara remete ao papel reciclado, com leve pigmentação em tons de bege, marrom, branco, amarelo e cobre. Harmoniza bem com todos os padrões Romanzza e pode ser utilizado com diferentes projetos. Uso: MDF, painéis editáveis, portas editáveis e complementos em geral. Espessuras disponíveis: 6mm, 15mm, 18mm, 25mm, 43mm.'
    },
    {
    'src': 'Unicolor-Vulcano.jpg',
    'name': 'Unicolor-Vulcano',
    'content': 'O padrão Vulcano possui tom cinza-escuro/grafite e pigmentação complementar azulada que combina perfeitamente com padrões amadeirados, valorizando-os. Indicado para áreas nobres e sociais. Uso: painéis editáveis, portas editáveis e complementos em geral. Espessuras disponíveis: 6mm, 18mm, 25mm, 43mm.'
    },
    {
    'src': 'Verona.jpg',
    'name': 'Verona',
    'content': 'O padrão Verona é em tom unicolor cinza, com toque suave e efeito de laca fosca. Transmite sensação de sobriedade e elegância, combinando perfeitamente com tons amadeirados e rosados. Seguindo a tendência do monocromatismo, possui complemento de mesma cor em perfis de alumínio e vidro. Uso: painéis editáveis, portas editáveis e complementos em geral. Espessura disponível: 6mm, 18mm e 43mm.'
    },
    {
    'src': 'Vert.jpg',
    'name': 'Vert',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Viena.jpg',
    'name': 'Viena',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Wadden.jpg',
    'name': 'Laca Wadden',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Quadretti.jpg',
    'name': 'Quadretti',
    },  
    {
    'src': 'Azul.jpg',
    'name': 'Azul',
    'content': 'Seguindo a linha do Purist Blue, o Azul Purista cor do Verão 2020, definido pela Pantone. O azul traz equilíbrio, paz, confiança. Com uma textura suave com aspecto híbrido é um unicolor aquecido. O padrão vem na tendência de unicolores com textura aveludada para dar equilíbrio e sofisticação aos espaços onde está aplicado. Seguindo a tendência do monocromatismo, possui complemento de mesma cor em perfis de alumínio e vidro. Uso: painéis editáveis, portas editáveis. Espessuras disponíveis: 18mm, 36mm.'
    }, 
    {
    'src': 'Avela.jpg',
    'name': 'Laca Avelã',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    }, 
    {
    'src': 'Basalto.jpg',
    'name': 'Basalto',
    'content': 'woqifgnboekgjdkjwkebjmbl'
    }, 
    {
    'src': 'Baviera.jpg',
    'name': 'Laca Baviera',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Bali.jpg',
    'name': 'Bali',
    },
    {
    'src': 'Bertha.jpg',
    'name': 'Laca Bertha',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'

    },
    {
    'src': 'Bianco.jpg',
    'name': 'Laca Bianco',
    },
    {
    'src': 'Black.jpg',
    'name': 'Laca Black',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'

    },
    {
    'src': 'Blanc.png',
    'name': 'Laca Blanc',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Braganca.jpg',
    'name': 'Laca Braganca',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Capuccino.jpg',
    'name': 'Laca Capuccino',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Cardeal.jpg',
    'name': 'Laca Cardeal',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Cinder-1.jpg',
    'name': 'Laca Cinder',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Cobalto.jpg',
    'name': 'Cobalto',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Carvalho-natural_.jpg',
    'name': 'Carvalho-Natural',
    'content': 'O padrão Carvalho-Natural proporciona elegância e delicadeza ao móvel e ao ambiente. O tingimento com verniz protege e dá longevidade ao produto, além de valorizar o desenho da madeira. Uso: tampos e portas de MDF. Espessuras disponíveis: 18mm, 50mm.'
    },
    {
    'src': 'ESMERALDA.jpg',
    'name': 'Esmeralda',
    'content': 'Referência de sofisticação, elegância e beleza, a Esmaralda está no nosso imaginário e relacionada às mais diversas histórias, desde lendas da antiguidade, até sua relação com sentimentos mais intensos. Originada do latim smaragdus, que quer dizer “clarão, raio”, a palavra esmeralda faz referência à pedra esverdeada preciosa e valiosa. Seguindo a tendência do monocromatismo, possui complemento de mesma cor em perfis de alumínio e vidro. Disponível na linha Trends. Espessura disponível: 18mm.'
    },
    {
    'src': 'Espelho_Bronze.png',
    'name': 'Espelho-Bronze',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Espelho_Fume.png',
    'name': 'Espelho-Fume',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Espelho.png',
    'name': 'Espelho',
    'content': 'Espessura disponível: 4mm'
    },
    {
    'src': 'Freijó.jpg',
    'name': 'Freijó',
    'content': 'O Freijó é um padrão com toque natural, sua coloração e textura sincronizada criam a sensação de uma lamina de madeira natural. Sua coloração amarelada vem de encontro à tendência de elementos naturais associados à Brasilidade e ao uso de elementos naturais na composição de projetos sofisticados. Uso: Módulos Tailor Made, Portas e painéis editáveis. Espessura disponível: 6mm, 18mm, 25mm, 36mm e 43mm.'
    },
    {
    'src': 'Elba.jpg',
    'name': 'Laca Elba',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Concretto.jpg',
    'name': 'Laca Concretto',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Golden.jpg',
    'name': 'Laca Golden',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Himalaia.jpg',
    'name': 'Himalaia',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Lago.jpg',
    'name': 'Laca Lago',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Land.jpg',
    'name': 'Laca Land',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Coney.jpg',
    'name': 'Coney',
    'content': 'Conheça o Coney, o novo padrão MDF Romanzza. O seu batismo vem de Coney Island, bairro do distrito de Brooklyn, principal destino de descanso e diversão durante o verão de Nova York. Coney Island é famosa pelo seu calçadão feito totalmente em ipê. A composição do novo padrão é feita com pigmentos dourados que ressaltam sua elegância e nobreza, aquecem e trazem aconchego aos ambientes. Uso: Linha Tailor Made, portas e painéis editáveis. Espessuras disponíveis: 6mm, 18mm, 25mm, 36mm e 43mm.'
    },
    {
    'src': 'Lilac.jpg',
    'name': 'Laca Lilac',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
    },
    {
    'src': 'Dakar.jpg',
    'name': 'Dakar',
    'content': 'Espessuras disponíveis: 12mm, 18mm, 25mm, 30mm e 50mm.'
        
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

    // if(windowSize < )
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
