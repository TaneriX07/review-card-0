// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: 
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: 
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "linda smith",
    job: "ux developer",
    img:
      "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    text:
      "The Christmas decorations came out before Halloween this year. When the fire alarm went off, she almost started crying. There is a big supermarket in my neighborhood. He was very excited when they officially decided to rename 'Columbus Day' as 'People's Day'."
  },
  {
    id: 6,
    name: "rudy brown",
    job: "general manager",
    img:
      "https://media.istockphoto.com/photos/middle-aged-man-portrait-picture-id1285156699?b=1&k=20&m=1285156699&s=170667a&w=0&h=l8Bs_xHY2um7IUHKXj7szXvNDW5jMJmnLMuvQWO5vEo=",
    text:
      "The computer was hot and overheated. My mom made a milkshake with frozen bananas and chocolate sauce. You can really get into the soul of the song with that. Come on down! For free pizza!"
  }
]

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentPerson = 0;

const changeCard = (person) => {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// initial load
window.addEventListener('DOMContentLoaded', changeCard(currentPerson))

// show next person
nextBtn.addEventListener('click', () => {
  currentPerson++;
  if (currentPerson > reviews.length - 1) {
    currentPerson = 0;
  }
  changeCard(currentPerson);
})

// show prev person
prevBtn.addEventListener('click', () => {
  currentPerson--;
  if(currentPerson < 0) {
    currentPerson = reviews.length - 1;
  }
  changeCard(currentPerson);
})