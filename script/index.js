function removeBtn () {
    const remove = document.getElementsByClassName('active')
    for(let btn of remove){
        btn.classList.remove("active")
        
    }
}
function loadCategorys () {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json()
    .then(data => showCategories(data.categories)
    )
    )
}

function showCategories(categories) {
    for (cat of categories) {
       
        const categoryId = document.getElementById('category-container')
        const categoryDiv = document.createElement('div')
       
        categoryDiv.innerHTML = `
        <button id ="btn-${cat.category_id}" onclick="videoMusic(${cat.category_id})" class="btn btn-sm hover:bg-red-600 hover:text-white">${cat.category}</button>
        `
        categoryId.append(categoryDiv)
    }
    
}

function videoCategory (searchText = "") {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then(res => res.json())
    .then(data => {
        removeBtn();
        document.getElementById('btn-all').classList.add('active');
        displayVideo(data.videos)
    } 
    )
}
const videoMusic = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
       
        removeBtn();
        const clickButton = document.getElementById(`btn-${id}`)
        clickButton.classList.add('active')
        displayVideo(data.category)
    }
    )
    
    
}

// {
//     "status": true,
//     "message": "successfully fetched all the videos",
//     "videos": [
//       {
//         "category_id": "1001",
//         "video_id": "aaaa",
//         "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//         "title": "Shape of You",
//         "authors": [
//           {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//           }
//         ],
//         "others": {
//           "views": "100K",
//           "posted_date": "16278"
//         },
//         "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//       },

const displayVideo = (videos) => {
    const videoContainer = document.getElementById('video-container')
        videoContainer.innerHTML = "";
        if(videos.length === 0) {
            videoContainer.innerHTML = `
                    <div class="card bg-base-100  shadow-xl">
            <figure class="relative">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Z7Xirb8BOdY?si=W6ktEBy3fWcjqk0b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <span class=" bottom-2 right-2 absolute bg-black text-white px-3 text-sm rounded ">3hrs 56 min ago</span>
            </figure>
            <div class=" py-6 flex gap-3 px-1">
                <div>
                    <div class="avatar">
                        <div class=" ring-primary ring-offset-base-100 w-7 h-7 rounded-full ring ring-offset-2">
                          <img class="" src="assets/WhatsApp Image 2025-03-10 at 00.48.36_6bf69100.jpg" />
                        </div>
                      </div>
                </div>
                <div>
                    <h2 class="font-bold">Videos</h2>
                    <p class=" text-gray-500 flex gap-1 py-1 text-sm">Mahmud Hasan
                    <img class="w-6 h-6" src="https://img.icons8.com/?size=96&id=SRJUuaAShjVD&format=png" alt=""></p>
                    <p class="text-sm text-gray-400">100k</p>
                </div>
         
            </div>
          </div>
        <div class="card bg-base-100  shadow-xl">
            <figure class="relative">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HsEIKQ5nbuI?si=6enlHsdF0HlfAfPu"
                 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <span class=" bottom-2 right-2 absolute bg-black text-white px-3 text-sm rounded ">3hrs 56 min ago</span>
            </figure>
            <div class=" py-6 flex gap-3 px-1">
                <div>
                    <div class="avatar">
                        <div class=" ring-primary ring-offset-base-100 w-7 h-7 rounded-full ring ring-offset-2">
                          <img class="" src="assets/WhatsApp Image 2025-03-10 at 00.48.36_6bf69100.jpg" />
                        </div>
                      </div>
                </div>
                <div>
                    <h2 class="font-bold">Videos</h2>
                    <p class=" text-gray-500 flex gap-1 py-1 text-sm">Mahmud Hasan
                    <img class="w-6 h-6" src="https://img.icons8.com/?size=96&id=SRJUuaAShjVD&format=png" alt=""></p>
                    <p class="text-sm text-gray-400">100k</p>
                </div>
         
            </div>
          </div>
        <div class="card bg-base-100  shadow-xl">
            <figure class="relative">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cNMyUl0xwEI?si=7DilHydQ6yOl_0uv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <span class=" bottom-2 right-2 absolute bg-black text-white px-3 text-sm rounded ">3hrs 56 min ago</span>
            </figure>
            <div class=" py-6 flex gap-3 px-1">
                <div>
                    <div class="avatar">
                        <div class=" ring-primary ring-offset-base-100 w-7 h-7 rounded-full ring ring-offset-2">
                          <img class="" src="assets/WhatsApp Image 2025-03-10 at 00.48.36_6bf69100.jpg" />
                        </div>
                      </div>
                </div>
                <div>
                    <h2 class="font-bold">Videos</h2>
                    <p class=" text-gray-500 flex gap-1 py-1 text-sm">Mahmud Hasan
                    <img class="w-6 h-6" src="https://img.icons8.com/?size=96&id=SRJUuaAShjVD&format=png" alt=""></p>
                    <p class="text-sm text-gray-400">100k</p>
                </div>
         
            </div>
          </div>
        <div class="card bg-base-100  shadow-xl">
            <figure class="relative">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9L9gH555Fa8?si=-WzyO1HOUBrSOXMT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span class=" bottom-2 right-2 absolute bg-black text-white px-3 text-sm rounded ">3hrs 56 min ago</span>
            </figure>
            <div class=" py-6 flex gap-3 px-1">
                <div>
                    <div class="avatar">
                        <div class=" ring-primary ring-offset-base-100 w-7 h-7 rounded-full ring ring-offset-2">
                          <img class="" src="assets/WhatsApp Image 2025-03-10 at 00.48.36_6bf69100.jpg" />
                        </div>
                      </div>
                </div>
                <div>
                    <h2 class="font-bold">Videos</h2>
                    <p class=" text-gray-500 flex gap-1 py-1 text-sm">Mahmud Hasan
                    <img class="w-6 h-6" src="https://img.icons8.com/?size=96&id=SRJUuaAShjVD&format=png" alt=""></p>
                    <p class="text-sm text-gray-400">100k</p>
                </div>
         
            </div>
          </div>
              <div class="col-span-full text-center flex justify-center flex-col items-center py-5">
            <img src="assets/Icon.png" alt="">
            <h2 class="text-3xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
            `
            return;
        }
      

    videos.forEach(video => {
        const videoDiv = document.createElement('div')
    
        videoDiv.innerHTML = `
<div class="card bg-base-100  shadow-xl">
            <figure class="relative">
              <img class= "w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class=" bottom-2 right-2 absolute bg-black text-white px-3 text-sm rounded ">3hrs 56 min ago</span>
            </figure>
            <div class=" py-6 flex gap-3 px-1">
                <div>
                    <div class="avatar">
                        <div class=" ring-primary ring-offset-base-100 w-7 h-7 rounded-full ring ring-offset-2">
                          <img class="" src="${video.authors [0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div>
                    <h2 class="font-bold">${video.title}</h2>
                    <p class=" text-gray-500 flex gap-1 py-1 text-sm">${video.authors[0].profile_name}
                    <img class="w-6 h-6" src="https://img.icons8.com/?size=96&id=SRJUuaAShjVD&format=png" alt=""></p>
                    <p class="text-sm text-gray-400">${video.others.views}</p>
                </div>
         
            </div>
          </div>
        `
        videoContainer.append(videoDiv);
        
    });
}

document.getElementById('search-input')
.addEventListener('keyup', (e) => {
const value = e.target.value;
videoCategory(value)



})





 loadCategorys()