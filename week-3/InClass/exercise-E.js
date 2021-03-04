let names = ["Daniel", "mozafar", "irina"];

// let bills = [10, 20,30,50];
// function pay(amount) { console.log(`Payed ${amount}`)};
// bills.forEach(pay);


// function addTaxes(amount) { return amount * 1.20};

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const ages = birthYears.map(calculateTheAge);
console.log(ages);



function calculateTheAge(birthYear){
    return 2021 - birthYear;
}
console.log(calculateTheAge(2000));

