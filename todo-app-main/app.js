const list = document.querySelector(".list");
const addBtn = document.querySelector(".add-btn");
const input = document.getElementById("Todo-id");
const nomberOfItmes = document.querySelector(".items");
const filterBtns = document.querySelectorAll(".item .btn");
const clearBtn = document.querySelector(".clear-btn");
let data;
let b = false;
let filteredItems = [];
if (localStorage.data) {
  data = JSON.parse(localStorage.data);
} else {
  data = [];
}
window.addEventListener("DOMContentLoaded", () => {
  addItem(data);
  itemsLift(data);
  selectElement(data);
  selectRemoveTasks(data);
});

addBtn.addEventListener("click", (e) => {
  let value = input.value;
  input.value = "";
  if (value !== "") {
    data.push({ value, category: "active" });
    addItem(data);
    itemsLift(data);
    localStorage.setItem("data", JSON.stringify(data));
  }
  selectElement(data);
  selectRemoveTasks();
});
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.target.dataset.category;
    filterItems(category);
  });
});
clearBtn.addEventListener("click", () => {
  data = clearComplitedTasks(data);

  addItem(data);
  itemsLift(data);
  selectElement(data);
  selectRemoveTasks();
  localStorage.setItem("data", JSON.stringify(data));
});

const selectElement = () => {
  const complitedTasks = document.querySelectorAll(".box");
  complitedTasks.forEach((task) => {
    task.addEventListener("click", (e) => {
      const taskId = task.parentElement.id;
      console.log(taskId);
      complited(task, taskId);
    });
  });
};

const addItem = (x) => {
  console.log(data);
  let info = x
    .map((item, inedx) => {
      let i = data.indexOf(item);
      console.log(item, i, inedx);
      return `<div class="valueee flex" id="${i}">
       <div class="check-box box ${
         item.category === "active" ? "" : " active"
       }">
         <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
           <path
             fill="none"
             stroke="#FFF"
             stroke-width="2"
             d="M1 4.304L3.696 7l6-6"
           />
         </svg>
       </div>
       <div class="paragraph ${item.category === "active" ? "" : "inder-line"}">
         <p>
          ${item.value}
         </p>
       </div>
       <div class="svg-1 remove-btn">
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
           <path
             fill="#494C6B"
             fill-rule="evenodd"
             d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
           />
         </svg>
       </div> </div>`;
    })
    .join(" ");

  list.innerHTML = info;
};
const itemsLift = (data) => {
  let nomber = data.length;
  if (nomber === 0) {
    nomberOfItmes.innerHTML = "<p>no item yet</p>";
  } else if (nomber === 1) {
    nomberOfItmes.innerHTML = "<p>one item left</p>";
  } else {
    nomberOfItmes.innerHTML = `<p>${nomber} items left</p>`;
  }
};

const complited = (task, id) => {
  task.classList.toggle("active");
  if (task.classList.contains("active")) {
    task.nextElementSibling.classList.add("inder-line");
    data[id].category = "complited";
  } else {
    task.nextElementSibling.classList.remove("inder-line");
    data[id].category = "active";
  }
  localStorage.setItem("data", JSON.stringify(data));
  return data;
};

const filterItems = (category) => {
  filteredItems = data.filter((item) => item.category === category);
  if (category === "all") {
    addItem(data);
    itemsLift(data);
    selectElement(data);
    selectRemoveTasks(data);
  } else {
    addItem(filteredItems);
    itemsLift(filteredItems);
    selectElement(filteredItems);
    selectRemoveTasks(filteredItems);
  }
};

const clearComplitedTasks = (data) => {
  const dataCleared = data.filter((task) => task.category !== "complited");
  if (dataCleared) {
    data = dataCleared;

    return data;
  }
};

const removeTask = (datas, id, i) => {
  const newDatas = datas.filter((task, index) => {
    if (index !== i) {
      return task;
    }
  });
  const newData = data.filter((task, index) => {
    if (index != id) {
      return task;
    }
  });
  if (newData) {
    datas = newDatas;

    data = newData;
    localStorage.setItem("data", JSON.stringify(data));
    return datas;
  }
};

const selectRemoveTasks = (datas) => {
  const removeBtns = document.querySelectorAll(".remove-btn");
  removeBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      const taskIdToRemove = btn.parentElement.id;
      datas = removeTask(datas, taskIdToRemove, i);

      addItem(datas);
      itemsLift(datas);
      selectElement(datas);
      selectRemoveTasks(datas);
    });
  });
};
