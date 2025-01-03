// create an loadCategories function
const loadCategories = () => {
    // console.log("loadCategories is Created");

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))

};

// create an display categories

const displayCategories = (data) => {
    // console.log("displayCategories is Created");
    console.log(data);



};



// calling function here
loadCategories();
displayCategories();