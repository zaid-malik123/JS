const arr = [
    {
        dp: "https://images.unsplash.com/photo-1765127586047-f158d5bd6a33?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        story: "https://images.unsplash.com/photo-1764973637721-312bf4e7d77a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://images.unsplash.com/photo-1764693756664-769420e4ad6e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1765394805239-aa07aeac4dcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1764943143902-e2a8e91e1497?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1765296123897-1650215ad87c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1764970692776-ce5fb30a7509?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1764626360826-544ae57f4e28?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1669590487094-c01dfc2ee939?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1764287336801-5ba6b81dceae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D"
    },
]
const stories = document.querySelector(".storiyan")
const full = document.querySelector(".full-screen")

let clutter = ""

arr.forEach((elem, idx) => {
   clutter += ` <div class="story w-[80px] h-[80px] bg-red-300 rounded-full border-4 border-pink shrink-0 overflow-hidden">
        <img id=${idx} class="w-full h-full object-cover" src= ${elem.dp} alt="">
    </div>`
})
stories.innerHTML = clutter

stories.addEventListener("click", (e) => {
  const story = arr[e.target.id].story;
  full.style.display = "block"
  full.innerHTML = `<img class="w-full h-full object-cover" src=${story} alt="">` 
  setTimeout(() => {
    full.style.display = "none"
  }, 3000);
  
})