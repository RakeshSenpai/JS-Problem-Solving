const arr = [ 'Apple' , 'Banana', 'Mango']

function renderHtml(){
    const listItems = arr.map((user) => {
            const div = document.createElement('div')
            div.innerText = user
            div.style.color = 'white'
            document.body.appendChild(div)
    })
}

renderHtml()