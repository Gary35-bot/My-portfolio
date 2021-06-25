let cards = [
  {
    imgURL: "./images/Screenshot_2021-05-04 Contact Form.png",
    imgALT: "Photo",
    title: "ContactForm",
    techStack: "Html/CSS",
    description:
      "Making a new discovery I found glass Glassmorphism to create this form.",
    githubURL: "https://github.com/Gary35-bot/first-Contact-from-created",
    liveURL: "https://agitated-kepler-cb2c57.netlify.app/",
  },

  {
    imgURL: "./images/Screenshot_2021-05-04 My timeline.png",
    imgALT: "Photo",
    title: "TimeLine",
    techStack: "Html/CSS",
    description:
      "This is a timeline I created using aos-animation",
    githubURL: "https://github.com/Gary35-bot/first-Contact-from-created",
    liveURL: "https://admiring-bardeen-57658c.netlify.app/",
  },

  {
    imgURL: "./images/Screenshot_2021-05-04 My timeline.png",
    imgALT: "Photo",
    title: "Testimonial-Slider",
    techStack: "Html/CSS",
    description:
      "I used owl-carousel to create these testimonials.",
    githubURL: "https://github.com/Gary35-bot/Testomonial-slider",
    liveURL: "https://wizardly-clarke-0f2d34.netlify.app/",
  },

  {
    imgURL: "./images/sneakersite.png",
    imgALT: "Photo",
    title: "Testimonial-Slider",
    techStack: "Html/CSS",
    description:
      "This sneaker-site me and my group put together making it as one.",
    githubURL: "#",
    liveURL: "https://relaxed-saha-d93563.netlify.app/",
  },

  {
    imgURL: "./images/tkinter-program.png",
    imgALT: "Photo",
    title: "tKinter-program",
    techStack: "Python",
    description:
      "This sneaker-site me and my group put together making it as one.",
    githubURL: "https://github.com/Gary35-bot/tkinter-program",
    liveURL: "https://replit.com/@Gary35bot/UntriedThisSdk#main.py",
  },
  {
    imgURL: "./images/tempreture-Converter.png",
    imgALT: "Photo",
    title: "Tempreture-Converter",
    techStack: "Python",
    description:
      "Tempreture Converter I build to convert fahrenheit to celsius vice versa ",
    githubURL: "https://github.com/Gary35-bot/tkinter-program",
    liveURL: "https://replit.com/@Gary35bot/UntriedThisSdk#main.py",
  },

];

function createCard(cards){
    let createCard =  
`<div class="cardcontainer"
techStack=${cards.techStack} > "<img src=${cards.imgURL}"
alt ="${cards.imgALT}">
    <h2>${cards.title}</h2>
    <h3>${cards.techStack}</h3>
    <p>${cards.description}</p>
href="${card.githubURL}">Github</a>
<a href="${card.liveProjectURL}">Live</a>
  </div>
  `;
return createCard;

}

function renderCards() {
  let cards =
  document.querySelector("./cards");
  for (project of project) {
      let card = createCard(project); 
      cardcontainer.innerHTML += cards;  
      
  } 
}

renderCards();

function filterCards(catergory) {
    let cards = 
document.getElementsByClassName("cards");
if (catergory == "All") {
    for (cards of cards) {
        card.style.display = "block";
    }
    return;
}

for (cards of cards) {
    console.log(cards);
    card.style.display = "none";
}
    let selectedCards = document.querySelectorAll(`[techStack='${category}']`);
for (card of selectedCards) {
  card.style.display = "block";
}

}