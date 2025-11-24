let person ={
    name: 'abul khan',
    age: 30,
    profession: 'devloper',
    salary: 4000,
    married: true,
    'fev place': ['sajek', 'cox-bazar', 'kuakata']
}

person.salary = 50000;
person['age'] = 70;
person['fev place'] = ['maldives', 'bali', 'pataya']


let propName = 'profession';
person[propName] = 'devops'

console.log(person)


// console.log(person.name)

//dot notation
const income = person.salary;
// console.log(income)


//bracket notation

console.log(person['age'])