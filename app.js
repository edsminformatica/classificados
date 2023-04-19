const monstros = [
    {
        
        habilidades: 'A melhor da cidade!!!',
        foto: 'logocafé.png'
    },
    
    {
        habilidades: 'Em breve inaururação',
        foto: 'imperiofeminino.png'
    },

    {
        habilidades: 'Acompanhe nossa página no Facebook.',
        foto: 'lopetiscosdelivery.png'
    },

    {
        habilidades: '10 e Faixa Podcast, A sua resenha sobre futebol... disponivél no Youtube, Spotify, Deezer e Itunes.',
        foto: 'logopodcast.png'
    }
]

const secao = document.querySelector('.anuncio')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map((monstro) => {
  return `<div> 
        <img src="${monstro.foto}">
        <p class="habilidades">Habilidades: ${monstro.habilidades}</p>
    </div>`
})

secao.innerHTML = todosOsMonstros