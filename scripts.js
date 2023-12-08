const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")


let myLi = ''

function showAll() {
    menuOptions.forEach((product) => {
        Myli += `

       <li>
            <img src=${product.src}>
            <p> ${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
        `
    })
    
    list.innerHTML =   myLi
}

function mapAllItems (){
console.log('chamei')
}

buttonShowAll.addEventListener('clik', showAll )
buttonMapAll.addEventListener('clik', mapAllItems)
