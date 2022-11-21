let item = [{
    img: "./image/69V42nb.jpg",
    name: "MacBook Pro 14' M1 Max (64GB RAM | 4TB) ",
    price: "USD 4,699 ",
    monney: 4699,
    amount: 0,
}, {
    img: "./image/CugpEfY.jpg",
    name: "PS 5",
    price: " USD 599",
    monney: 599,
    amount: 0
}, {
    img: "./image/HgPROm3.jpg",
    name: "Xbox Series X ",
    price: "USD 5,699 ",
    monney: 5699,
    amount: 0,
}, {
    img: "./image/XrStrbb.jpg",
    name: "Razer Blade 14 Top spec (2022) ",
    price: "USD 9,699 ",
    monney: 9699,
    amount: 0,
}, {
    img: "./image/TaO01Rv.jpg",
    name: "2022 Mac Studio M1 Ultra (128GB RAM | 8TB)",
    price: "USD 12,699 ",
    monney: 12699,
    amount: 0,
}, {
    img: "./image/SH7FrjV.jpg",
    name: "Iphone 14 Pro Max - 1TB",
    price: "USD 10,699 ",
    monney: 10699,
    amount: 0,
}, {
    img: "./image/LUyQhmF.jpg",
    name: "Nintendo Switch",
    price: "USD 9,699 ",
    monney: 9699,
    amount: 0,
}, {
    img: "./image/Kx4cEmk.jpg",
    name: "Mac Pro Top spec (2022) (28 Cores, 8TB SSD, 1TB RAM, 32GB Video)",
    price: "USD 59,699 ",
    monney: 59699,
    amount: 0,
}, {
    img: "./image/jImRpPw.jpg",
    name: "AirPods Pro",
    price: "USD 99,699 ",
    monney: 99699,
    amount: 0,
}, {
    img: "./image/PXJj7z0.jpg",
    name: "Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)",
    price: "USD 1,000,000 ",
    monney: 8000000,
    amount: 0,
}
]

function showItem(item) {
    let divItem = ""
    for (const i in item) {
        divItem += ` 
        <div class="infor-item" >
        <img src="${item[i].img}"
            alt="${item[i].img}"">
        <p id="name"> ${item[i].name}</p>
        <span id="price"> ${item[i].price}</span>
        <div class="buyAndSell" data-price >
            <button class="sell-btn" disabled >Sell</button>
            <span class="amount"> ${item[i].amount}</span>
            <button class="buy-btn" >Buy</button>
        </div>
        </div>
        `
    }
    document.getElementById("allElements").innerHTML = divItem
}
showItem(item)
let totalMoney = 217000000000

document.getElementById("totalMoney").innerText = `Remaining: ${totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`
document.getElementById("spended").innerText = `You haven't spent a single dollar! start buying!`



let sellBtn = document.getElementsByClassName("sell-btn");
let buyBtn = document.getElementsByClassName("buy-btn");
let amount = document.getElementsByClassName("amount");
let sum = 0


function caculator() {
    for (let i = 0; i < sellBtn.length; i++) {

        buyBtn[i].addEventListener('click', function () {
            item[i].amount += 1
            amount[i].innerText = item[i].amount
            sum = 0
            for (let i = 0; i < item.length; i++) {
                sum +=  (item[i].amount * item[i].monney)

            }
            let remaining = totalMoney - sum
            document.getElementById("totalMoney").innerText = `Remaining: ${remaining.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`
            document.getElementById("spended").innerText = `You only spent ${((sum/totalMoney)*100).toFixed(6)}% of the total!`
            // let receipt = ""
            if (item[i].amount > 0) {
                sellBtn[i].disabled = false;
                // receipt += `<p>
                //     "${item[i].name} x" <strong>${item[i].amount}</strong>
                //     ".......$ ${(item[i].monney * item[i].amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}"
                //     </p>
                //     `
                // document.getElementById('receipt').innerHTML = receipt
                // document.getElementById('total-receipt').innerHTML = `Total is: ${(item[i].monney * item[i].amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}$`
            }
        })
        sellBtn[i].addEventListener('click', function () {
            item[i].amount -= 1
            amount[i].innerText = item[i].amount
            sum = 0
            for (let i = 0; i < item.length; i++) {
                sum +=  (item[i].amount * item[i].monney)
            }
            let remaining = totalMoney - sum
            document.getElementById("totalMoney").innerText = `Remaining: ${remaining.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`
            document.getElementById("spended").innerText = `You only spent ${((sum/totalMoney)*100).toFixed(6)}% of the total!`

            if (item[i].amount == 0) {
                sellBtn[i].disabled = true;
            }
           
        })

    }

}
caculator()






