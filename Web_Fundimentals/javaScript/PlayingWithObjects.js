//function PeopleNames(users){
var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];
console.log(users[1].name);
//printing johns age
console.log(users[0].name)
//printing the name of the first object

for(i = 0; i < users.length; i++){
    console.log(users[i].name)
    console.log("-")
    console.log(users[i].age)
}
