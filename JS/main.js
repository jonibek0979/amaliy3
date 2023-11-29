fetch('https://6565a42aeb8bb4b70ef20029.mockapi.io/phone')
    .then((res) => res.json())
    .then((data) => mapData(data))


    let elList = document.querySelector('.list')

    function mapData(data) {
        window.localStorage.setItem('data',JSON.stringify(data))
        data.map((item)=>{
            let newLi = document.createElement('li')
            newLi.innerHTML = `<div class="card ul__card" style="width: 18rem;">
            <img src=${item.img} class="card-img-top ul__img" alt="...">
            <div class="card-body ul__div">
              <h5 class="card-title ul__title">${item.name}</h5>
              <p class="card-text ul__text">${item.price}</p>
              <p class="card-text ul__text">${item.color}</p>
              <a href="#" class="btn btn-danger ul__a">${item.memory}</a>
              <button onclick="getId(${item.id})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-success ul__btn"><i class="bi bi-pen"></i></button>
              <button onclick="phoneDel(${item.id})"   
               class="btn btn-info ul__btnn"><i class="bi bi-trash"></i></button>
            </div>
          </div>`
          elList.appendChild(newLi)
        })
    }
function phonePost(event) {
    event.preventDefault()
    let phoneName = event.target.name.value
    let phoneImg = event.target.img.value
    let phonePrice = event.target.price.value
    let phoneColor = event.target.color.value
    let phoneMemory = event.target.memory.value
    let data = {
        name: phoneName,
        img: phoneImg,
        price: phonePrice,
        color: phoneColor,
        memory: phoneMemory
    }
    fetch('https://6565a42aeb8bb4b70ef20029.mockapi.io/phone', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then((data) => console.log(data))
        .then(() => {
            event.target.name.value = ''
            event.target.img.value = ''
            event.target.price.value = ''
            event.target.color.value = ''
            event.target.memory.value = ''
        })
}

function phoneUpdate(event) {
    event.preventDefault()
    let phoneName = event.target.name.value
    let phoneImg = event.target.img.value
    let phonePrice = event.target.price.value
    let phoneColor = event.target.color.value
    let phoneMemory = event.target.memory.value
    let data = {
        name: phoneName,
        img: phoneImg,
        price: phonePrice,
        color: phoneColor,
        memory: phoneMemory
    }
    fetch(`https://6565a42aeb8bb4b70ef20029.mockapi.io/phone/${window.localStorage.getItem('id')}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then((data) => console.log(data))
        .then(() => {
            event.target.name.value = ''
            event.target.img.value = ''
            event.target.price.value = ''
            event.target.color.value = ''
            event.target.memory.value = ''
        })
}
let elUp__name = document.querySelector('.up__name')
let elUp__img = document.querySelector('.up__img')
let elUp__price = document.querySelector('.up__price')
let elUp__color = document.querySelector('.up__color')
let elUp__memory = document.querySelector('.up__memory')




function getId(id) {
    let data = JSON.parse(window.localStorage.getItem('data')).find((item) => item.id == id);
    elUp__name.value = data.name
    elUp__img.value = data.img
    elUp__price.value = data.parse
    elUp__color.value = data.color
    elUp__memory.value = data.memory
   window.localStorage.setItem('id',id) 

}


// function phoneDel(id) {
//     fetch(`https://6565a42aeb8bb4b70ef20029.mockapi.io/phone/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//         .then((res) => {
//             console.log(res);
//             return res.json()
//         })
//         .then((data) => console.log(data))
// }

 function phoneDel(id) {
    fetch(`https://6565a42aeb8bb4b70ef20029.mockapi.io/phone/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then((data) => console.log(data))
}











