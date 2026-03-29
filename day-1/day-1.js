/* const parent = document.querySelector('.parent')
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[0])

for (let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML)
}

parent.children[2].style.color = 'grey'

const parent = document.querySelector('.parent')
const body = document.querySelector('body')

parent.children[2].innerText = 'Hello i am third children'
const div = document.createElement('div')
div.innerText = 'Hello i am newly Born Children'
body.appendChild(div)
div.setAttribute('class' , 'new-child')
console.log(div.getAttribute('class'))
const newDiv = document.querySelector('.new-child')
newDiv.style.color = 'red'
// div.removeAttribute('class', 'new-child')
console.log(div)
*/




const btn = document.querySelector('.btn')

function generateListItems(){
    const tbl = document.createElement('table')
    const tbody = document.createElement('tbody')

    for(let i = 0; i < 2 ; i++){
        const row = document.createElement('tr')

        for(let j = 0 ; j < 2; j++){
            const cell = document.createElement('td');
            const texts = document.createTextNode(`cell in row ${i} , columns ${j}`);

            cell.appendChild(texts);
           row.appendChild(cell); 

        }
        tbody.appendChild(row);
    }
    tbl.appendChild(tbody);
    document.body.appendChild(tbl);

    tbl.setAttribute('border' , '2')
}

btn.addEventListener('click' ,() => {
    generateListItems()
})
