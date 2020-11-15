
/* Theory from lecture */

/* Objects */
Persons = [

    {
        name: "Mike",
        age: 25
    },
    {
        name: "Dymitr",
        age: 38
    }
];

const obStr = JSON.stringify(Persons);
console.log(obStr);

const getData = () => {
    return fetch(`http://localhost:3000`)
        .then(res => res.json())
        .then(post => console.log(post));
}

getData();
    

