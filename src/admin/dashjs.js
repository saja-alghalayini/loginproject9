// const card = document.querySelector(".card");

// card.addEventListener("mousemove", moveCard);
// card.addEventListener("mouseleave", leaveCard);

// function moveCard(event) {
//   const cardWidth = card.offsetWidth;
//   const cardHeight = card.offsetHeight;
//   const centerX = card.offsetLeft + cardWidth/2;
//   const centerY = card.offsetTop + cardHeight/2;
//   const mouseX = event.clientX - centerX;
//   const mouseY = event.clientY - centerY;
//   const rotateX = ((-1) * 25 * mouseY / (cardHeight/2)).toFixed(2);
//   const rotateY = ((+1) * 25 * mouseX / (cardWidth/2)).toFixed(2);
//   card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.2,1.2,1.2)`;
// }

// function leaveCard(event) {
//     event.preventDefault();
//   card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
// }