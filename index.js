// create an loadCategories function
const loadCategories = () => {
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))

};


// create an loadVideos function 
const loadVideos = () => {
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error))

};

const cardDemo = {
    "category_id": "1001",
    "video_id": "aaad",
    "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
    "title": "Smells Like Teen Spirit",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
            "profile_name": "Oliver Harris",
            "verified": true
        }
    ],
    "others": {
        "views": "5.4K",
        "posted_date": "1672656000"
    },
    "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
}

// create an videos function

const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos');
    videos.forEach(videos => {
        console.log(videos);
        const card = document.createElement("div");
        card.classList = "card card-compact "
        card.innerHTML = `
         <figure>
    <img
      src=${videos.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `;
        videosContainer.append(card);
    });
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
loadVideos();