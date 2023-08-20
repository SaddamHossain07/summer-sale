
let totalPrice = document.getElementById('totalPrice')
let totalPriceValue = parseFloat(totalPrice.innerText)

let discountPrice = document.getElementById('discountPrice')
let discountPriceValue = parseFloat(discountPrice.innerText)

let totalAmount = document.getElementById('total')
let previousTotal = parseFloat(totalAmount.innerText)


function discountCalculation() {
    const couponField = document.getElementById('apply-coupon-field')
    const couponCode = couponField.value

    if (couponCode === 'SELL200') {
        let total = parseFloat(totalPrice.innerText)
        const discountAmount = (total * 20) / 100
        discountPrice.innerText = discountAmount.toFixed(2)

        const totals = totalPriceValue - discountAmount
        totalAmount.innerText = totals.toFixed(2)
    }
}


function addToCart(target) {
    // show product name list in th cart 
    const productName = target.children[1].children[1].innerText
    const cartProductList = document.getElementById('product-list')
    const li = document.createElement('li')
    li.innerText = productName
    cartProductList.appendChild(li)

    // updating total price 
    const productPrice = target.children[1].children[2].innerText.split(' ')[0]
    const productPriceValue = parseFloat(productPrice)
    totalPriceValue = totalPriceValue + productPriceValue
    totalPrice.innerText = totalPriceValue.toFixed(2)

    // Calculating grant Total 
    const totals = totalPriceValue - discountPriceValue
    totalAmount.innerText = totals.toFixed(2)
    discountCalculation()

    // activate make purchase btn 
    if (totalPriceValue >= 200) {
        document.getElementById('make-purchase-btn').removeAttribute('disabled')
    }
}

