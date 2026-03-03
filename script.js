let blogs = [
  {
    title: "Travel Adventures",
    desc: "Explore amazing places around the world.",
    image: "https://picsum.photos/400/250?1"
  },
  {
    title: "Tech Innovations",
    desc: "Latest updates in technology world.",
    image: "https://picsum.photos/400/250?2"
  },
  {
    title: "Healthy Living",
    desc: "Tips for better lifestyle and health.",
    image: "https://picsum.photos/400/250?3"
  },
  {
    title: "Food & Recipes",
    desc: "Delicious food ideas and cooking tips.",
    image: "https://picsum.photos/400/250?4"
  },
  {
    title: "Creative Ideas",
    desc: "Boost your creativity with new ideas.",
    image: "https://picsum.photos/400/250?5"
  }
];

function createCard(blog){
  return `
    <div class="card">
      <img src="${blog.image}">
      <h3>${blog.title}</h3>
      <p>${blog.desc}</p>
    </div>
  `;
}

/* HOME PAGE - Only 3 */
let homeContainer = document.getElementById("homeBlogs");

if(homeContainer){
  blogs.slice(0,3).forEach(blog=>{
    homeContainer.innerHTML += createCard(blog);
  });
}

/* BLOG PAGE - All */
let allContainer = document.getElementById("allBlogs");

if(allContainer){
  blogs.forEach(blog=>{
    allContainer.innerHTML += createCard(blog);
  });
}

let form = document.getElementById("contactForm");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("successMsg").textContent =
      "Thank you! Your message has been sent successfully.";

    form.reset();
  });
}
