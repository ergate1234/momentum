const title = document.querySelector("h2");

const colors = ["skyblue", "blue", "purple", "tomato"];

function handleMouseEnter(){
  title.innerText = "The mouse is here!";
  title.style.color = colors[0];
}

function handleMouseLeave(){
  title.innerText = "The mouse is gone!";
  title.style.color= colors[1];
}

function handleWindowResize(){
  title.innerText = "You just resized!";
  title.style.color = colors[2];
}

function handleMouseRightClick(){
  title.innerText = "That was a right click!";
  title.style.color = colors[3];
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
title.addEventListener("contextmenu", handleMouseRightClick);

