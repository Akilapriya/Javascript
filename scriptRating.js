var stars = document.querySelectorAll(".star i");

stars.forEach((item, index1) => {
  item.addEventListener("click", () => {
   // console.log(index1)
    stars.forEach((star, index2) => {
        console.log(index2)
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
