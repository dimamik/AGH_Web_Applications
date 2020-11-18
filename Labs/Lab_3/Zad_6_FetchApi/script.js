let showEl = document.getElementById("show");

let getData = () => {

    fetch("http://localhost:3000/Persons")
        .then((object) => object.json())
        .then(

            (persons) => transformData(persons)
        )
        .catch(error => console.log(error)
        )
        ;
};

PersonsObj = getData();

function transformData(persons) {
    let copiedPerson = JSON.parse(JSON.stringify(persons));
    let average_age = 0;
    let listOfPersonsWithRInName = [];
    let listOf2OldestAnd3YoungestPersons = [];
    copiedPerson.sort((a, b) => (a.old > b.old) ? 1 : ((b.old > a.old) ? -1 : 0));
    for (person of copiedPerson) {
        person.name = person.name + " " + (person.name).length;
        average_age += person.old;
        if (person.name.includes("r")) {
            listOfPersonsWithRInName.push(person);
        }
    }
    if (copiedPerson.length >= 3) {
        listOf2OldestAnd3YoungestPersons.push(copiedPerson[copiedPerson.length - 2]);
        listOf2OldestAnd3YoungestPersons.push(copiedPerson[2]);
    }
    console.log("Persons with added number of letters:\n" + JSON.stringify(copiedPerson));
    console.log("Average age is " + average_age / copiedPerson.length)
    console.log("List of persons with r in name: \n" + JSON.stringify(listOfPersonsWithRInName));
    console.log("Second Oldest and Third Youngest Persons: \n" + JSON.stringify(listOf2OldestAnd3YoungestPersons));

    showEl.innerText =
        "Persons with added number of letters:\n" + JSON.stringify(copiedPerson) + "\n\n" +

        "Average age is " + average_age / copiedPerson.length + "\n\n" +

        "List of persons with r in name: \n" + JSON.stringify(listOfPersonsWithRInName) + "\n\n" +

        "Second Oldest and Third Youngest Persons: \n" + JSON.stringify(listOf2OldestAnd3YoungestPersons);

}