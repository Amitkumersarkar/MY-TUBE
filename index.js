// create an loadCategories function
const loadCategories = () => {
    // console.log("loadCategories is Created");

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))

};

// create an display categories

const displayCategories = (categories) => {

    const categoryContainer = document.getElementById("categories");

    categories.forEach((item) => {
        console.log(item);

        // create an btn
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        // add btn to the category container
        categoryContainer.append(button);


    })

};



// calling function here
loadCategories();
// displayCategories();