// Map

// const arr = [ 'Apple' , 'Banana', 'Mango']

// function renderHtml(){
//     const listItems = arr.map((user) => {
//             const div = document.createElement('div')
//             div.innerText = user
//             div.style.color = 'white'
//             document.body.appendChild(div)
//     })
// }

// renderHtml()

const prices = [100, 300, 500]
// const calculate = prices.map(p => p * 0.9)
// console.log(calculate)
// console.log(prices)

const inr = prices.map(p => `$${p}`)
console.log(inr)

const users = [
  { first: "Rakesh", last: "Shil" }
];

const name = users.map(n => ({
    ...n, Fullname: `${n.first} ${n.last}`
}))
console.log(name)

