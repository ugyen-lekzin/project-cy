function myFunction(a, b){
    return a*b
}
console.log(myFunction(10, 2))

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "nov", "dec",]

function getMonth(month){
    return months[month - 1];
}
console.log(getMonth(4))

//Declare an empty array. Add months from January to June to an empty array using
// push() and for a loop.

const month = ["jan", "feb", "mar", "apr", "may", "jun"]
let mon = []

function addingToEmpty(){

    for(let i = 0; i < month.length; i++){
        mon.push(month[i])
    }
    console.log(mon)
}
addingToEmpty()

const price = [
    { "monthly": 200, "oneTime": 300, "total": 5000},
    { "monthly": 400, "oneTime": 300, "total": 700},
    { "monthly": 700, "oneTime": 600, "total": 300},
    { "monthly": 630, "oneTime": 1100, "total": 600},
    { "monthly": 100, "oneTime": 400, "total": 300},
    { "monthly": 2000, "oneTime": 800, "total": 3000},
    { "monthly": 200, "oneTime": 900, "total": 300}
]

//Filter monthly price between 300 to 700
function filtering(){
    return price.filter(price => price["monthly"] > 300 && price["monthly"] < 700)
}
console.log(filtering())

//Find a monthly price of 200 and a total of 300.
function finding(){
    return price.find(price => price["monthly"] == 200 && price["total"] == 300)
}
console.log(finding())

//Filter total price lesser than 3000.
function filteringOut(){
    return price.filter(price => price["total"] < 3000)
}
console.log(filteringOut())

//Find a monthly price of 400 and a total of 700 and print a oneTime price.
function findingOne(){
    return price.find(price => price["monthly"] === 400 && price["total"] === 700)["oneTime"]
}
console.log(findingOne())

//Add all oneTime prices and print the total.
const allOne = [];
function addingAllOne(){

    for(let i = 0; i <= price.length; i++){
        allOne+=i["total"]
    }
}
console.log(addingAllOne())

