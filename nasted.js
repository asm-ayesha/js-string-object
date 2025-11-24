let school = {
    name : 'vnc',
    class: ['6','7','8','9','10'],
    events:['sciense fair', 'bijoy dibos', '21 feb'],
    unique:{
        color:'blue',
        result:{
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(school.unique.color)
school.unique.result.merit = 'top top top most'
console.log(school.unique.result.merit)
//delete object key
delete school.name;
console.log(school)