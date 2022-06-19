const menu = [
  {
    id: 1,
    category: "breakfast",
    img: "./imgs/itm1.jpg",
    price: 15.99,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "breakfast",
    img: "./imgs/itm2.jpg",
    price: 15.99,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "shakes",
    img: "./imgs/itm3.jpg",
    price: 15.99,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "lunch",
    img: "./imgs/itm4.jpg",
    price: 19.99,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "breakfast",
    img: "./imgs/itm5.jpg",
    price: 17.99,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "breakfast",
    img: "./imgs/itm6.jpg",
    price: 15.99,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "shakes",
    img: "./imgs/itm7.jpg",
    price: 15.99,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "lunch",
    img: "./imgs/itm8.jpg",
    price: 15.99,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "breakfast",
    img: "./imgs/itm9.jpg",
    price: 15.99,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "shakes",
    img: "./imgs/itm7.jpg",
    price: 15.97,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "breakfast",
    img: "./imgs/itm5.jpg",
    price: 1.99,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
  {
    id: 1,
    category: "lunch",
    img: "./imgs/itm3.jpg",
    price: 15.9,
    title: "Lorem ipsum dolor sit",
    dics: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt fugit blanditiis adipisci dolores",
  },
];

const menuEr = document.querySelector(".menu");
const btn = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

btn.forEach((btn1) => {
  btn1.addEventListener("click", (e) => {
    let category = e.currentTarget.dataset.id;

    let matata = menu.filter((biti) => {
      return biti.category === category;
    });
    displayMenuItems(matata);
    if (category === "all") {
      displayMenuItems(menu);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((con) => {
    return `<div class="container">
           <div class="img">
             <img src=${con.img} alt="" />
           </div>
           <div class="text">
             <div class="title">
              ${con.title}
               <span class="prix">${con.price}</span>
             </div>
             <p>
              ${con.dics}
             </p>
           </div>
         </div>`;
  });
  displayMenu = displayMenu.join("");
  menuEr.innerHTML = displayMenu;
}
