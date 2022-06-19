const arrow = [
  {
    color: "#c02c82",
    id: "a5",
  },
  {
    color: "#61ece0",
    id: "a1",
  },

  {
    color: "#79e71a",
    id: "a2",
  },
  {
    color: "#0040ff",
    id: "a3",
  },
  {
    color: "#79e71a",
    id: "a7",
  },
  {
    color: "#ff0095",
    id: "a4",
  },
  {
    color: "#eca061",
    id: "a6",
  },
  {
    color: "#61ece0",
    id: "a8",
  },
  {
    color: "#0040ff",
    id: "a9",
  },
  {
    color: "#ff0095",
    id: "a10",
  },
  {
    color: "#c02c82",
    id: "a11",
  },
  {
    color: "#eca061",
    id: "a12",
  },
];

const siction = document.querySelector(".section");

let ids = [];
let colors = [];

window.addEventListener("DOMContentLoaded", () => {
  insert(arrow);
  const pics = document.querySelectorAll(".pic");
  pics.forEach((pic) => {
    pic.addEventListener("click", (e) => {
      arrow.map((tot) => {
        if (tot.id === e.target.id && ids.length < 3) {
          ids.push(tot.id);
          colors.push(tot.color);
          document.getElementById(tot.id).style.backgroundColor = tot.color;
          if (ids.length == 2) {
            if (colors[0] !== colors[1] || ids[1] == ids[0]) {
              setTimeout(function () {
                document.getElementById(ids[1]).style.backgroundColor =
                  "cadetblue";
                document.getElementById(ids[0]).style.backgroundColor =
                  "cadetblue";
                console.log("waaaaa");
                ids = [];
                colors = [];
              }, 500);
            } else {
              ids = [];
              colors = [];
            }
          }
        }
      });
    });
  });
});

//----------function-------------
let rendom = function (area) {
  return area.sort(function () {
    return Math.random() - 0.5;
  });
};
let insert = function (arrey) {
  arrey = rendom(arrey);

  arrey.map((lol) => {
    siction.innerHTML += `<div class="pic" id="${lol.id}"></div>`;
  });
};
