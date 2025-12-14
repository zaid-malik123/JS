const form = document.querySelector("form");
const todos = document.querySelector(".todos");
const inputForm = document.querySelector("input");
const todo = [];


form.addEventListener("submit", (e) => {
  e.preventDefault();
  todo.push(inputForm.value);
  todo.forEach((t) => {
   todos.appendChild = `<li
          class="w-full h-full bg-white text-black text-xl font-semibold text-center py-2 rounded-md"
          >
          ${t}
        </li>`
});
});



