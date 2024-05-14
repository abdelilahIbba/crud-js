// get total
// create products
//save localstorage
// clear inputs
// read
// count : creat l3adad d element li an7ded
// delete
// update
// search by titel and gategorey
// clean data

let titel = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

console.log(titel, price, taxes, ads, discount, count, category, submit);

function getTotal() {
    if (price.value != '' || taxes.value != '' || ads.value != '' || discount.value != '')
    {
        let result = (+price.value + +taxes.value + +ads.value)
            - +discount.value;
        total.innerHTML = result;
        total.style.background = '#12bb20';
        
    }
    else
    {
        total.innerHTML = '';
        total.style.background = '#780000';
    }
}