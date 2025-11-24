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

//for of: array
// for in: object

for(let prop in school){
    console.log(prop)
    console.log(school[prop])
}