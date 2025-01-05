// time function created here
function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

const removeActiveClass = () => {
    const button = document.getElementsByClassName("category-btn");
    // console.log(button);
    for (let btn of button) {
        btn.classList.remove("active");
    }
}

console.log(getTimeString(4320));
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

const loadCategoryVideos = (id) => {
    // alert(id);
    // fetch here
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
            // remove all active class
            removeActiveClass();

            const activeBtn = document.getElementById(`btn-${id}`);
            // console.log(activeBtn);
            activeBtn.classList.add("active");
            displayVideos(data.category);
        })
        .catch((error) => console.log(error))

}

const loadDetails = async (videoId) => {
    console.log(videoId);
    const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(uri);
    const data = await res.json();
    displayDetails(data.videos);
}

const displayDetails = (videos) => {
    console.log(videos);

    const detailContainer = document.getElementById("modal-content");
    detailContainer.innerHTML = `
    <img src=${video.thumbnail}/>
    <p>${videos.description} </p>
    `
    // way-1
    // document.getElementById("showModalData").click();
    // way-02
    document.getElementById("customModal").showModal();
}

// const cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaad",
//     "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
//     "title": "Smells Like Teen Spirit",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//             "profile_name": "Oliver Harris",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "5.4K",
//         "posted_date": "1672656000"
//     },
//     "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
// }

// create an videos function

const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = "";

    if (videos.length == 0) {
        videosContainer.classList.remove("grid");
        videosContainer.innerHTML = `
     <div class="min-h-[200px] flex flex-col gap-5 justify-center items-center ">
  <img src="./my-tube-resources/Icon.png" alt="">
  <h2 class="text-center text-xl font-bold">
  NO Content Here In This Category
  </h2>
     </div>
     `;
        return;
    } else {
        videosContainer.classList.add("grid");
    }

    videos.forEach(videos => {
        console.log(videos);
        const card = document.createElement("div");
        card.classList = "card card-compact "
        card.innerHTML = `
         <figure class="h-[200px] relative">
    <img
      src=${videos.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
${videos.others.posted_date?.length == 0 ? "" : ` <span class="absolute right-2 bottom-2 bg-black text-white text-xs rounded p-1">${getTimeString(videos.others.posted_date)} </span>`};
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
<img class="w-10 h-10 rounded-full object-cover" scr=${videos.authors[0].profile_picture}>
    </div>
    <div>
    <h2 class="font-bold"> ${videos.title}</h2>
    <div class="flex items-center gap-2"> 
    <P class="text-gray-400"> ${videos.authors[0].profile_name}</P>
  
   ${videos.authors[0].verified == true ? ` <img class="w-5" src="https://img.icons8.com/?size=48&id=FNbnqlDTjR45&format=gif">` : ""};
   
    </div>
    <P>
    <button onclick="loadDetails('${videos.video_id}')" class="btn btn-sm btn-error">details</button>
    </P>
    </div>
  </div >
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
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
${item.category}
        </button>
        `;



        // button.classList = "btn";
        // button.innerText = item.category;
        // button.onclick = () => { alert("Hello.!") };

        // add btn to the category container
        categoryContainer.append(buttonContainer);


    })

};



// calling function here
loadCategories();
loadVideos();