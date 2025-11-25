// Loop through an object and print the key-value pairs with their types

// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };

// for(let count in myObject){

//     let value =myObject[count];
//     let type =typeof value;
//     console.log('key: ',count,"| type:", type);
// }

let product = {
  title: "Laptop",
  price: 55000,
  brand: "TechBrand",
  inStock: true
};


for(let prop in product){
    let pVal = product[prop];
    let pType = typeof pVal;
    console.log('property:', prop, ' | ',pVal, ' | ',pType)
}