const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')

const URL = 'https://api.chucknorris.io/jokes/random'


btn.addEventListener('click', async () => {
    try {
        
    } catch (error) {
        
    }
    const data = await fetch(URL)
    const response = await data.json()
    displayData(response)
})



function displayData({value:joke}) {
    img.classList.add('shake-img')
    // const { value: joke } = data
    content.textContent = joke
    const random = Math.random() * 1000
    setTimeout(() => {
        img.classList.remove('shake-img')
    }, random)
}