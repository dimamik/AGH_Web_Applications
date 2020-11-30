let Categories;
let List1;
let List2;
let getDataCategories = () => {
    fetch("http://localhost:3000/Categories")
        .then((object) => object.json())
        .then(

            (cat) => { return turnToDataCategories(cat) }
        )
        .catch(error => console.log(error)
        )
        ;
};

function turnToDataCategories(obj) {
    Categories = obj;
    console.log(Categories);
    return (obj);
}
let getDataList1 = () => {
    fetch("http://localhost:2999/List1")
        .then((object) => object.json())
        .then(

            (cat) => { return turnToDataList1(cat) }
        )
        .catch(error => console.log(error)
        )
        ;
};
function turnToDataList1(cat) {
    List1 = cat;
    console.log(List1);
    return cat
}
let getDataList2 = () => {
    fetch("http://localhost:2998/List2")
        .then((object) => object.json())
        .then(

            (cat) => { turnToDataList2(cat) }
        )
        .catch(error => console.log(error)
        )
        ;
};
function turnToDataList2(cat) {
    List2 = cat;
    console.log(List2);
    return cat;
}
function getAllData() {
 /*    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    wait()
    .then( new Promise(resolve => getDataCategories()))
    .then( new Promise(resolve => getDataList1()))
    .then(new Promise( resolve => getDataList2()))
    .then(new Promise(resolve => AllLogic()))
    .catch(err => console.log(err)); */
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    Promise.resolve()
    .then(() =>getDataCategories() )
    .then (() => getDataList1() )
    .then (() => getDataList2());
    wait().then (() => AllLogic());
}

//At this point the data should be in pocket
getAllData();
function AllLogic(){
    console.log(Categories);
    
}