const stella1 = document.getElementById("stella1");
const stella2 = document.getElementById("stella2");
const sky = document.getElementsByClassName("sky");

const star = () => {
	stella1.style.top = Math.round(Math.random() * 80) + "%";
	stella1.style.left = Math.round(Math.random() * 80) + "%";
	stella2.style.top = Math.round(Math.random() * 80) + "%";
	stella2.style.left = Math.round(Math.random() * 80) + "%";
};

stella1.addEventListener("animationiteration", () => {
	star();
});

// 設定範圍
// const star = () => {
// 	stella1.style.top = Math.round(Math.random() * 80) + "%";
// 	stella1.style.left = Math.round(Math.random() * 80) + "%";
// };
// setInterval(star, 3000);

// const star2 = () => {
// 	stella2.style.top = Math.round(Math.random() * 80) + "%";
// 	stella2.style.left = Math.round(Math.random() * 80) + "%";
// };
// setInterval(star2, 3000);
