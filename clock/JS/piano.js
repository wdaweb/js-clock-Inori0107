const keys = document.getElementsByClassName("keys");
const sharps = document.getElementsByClassName("sharps");

for (const key of keys) {
	key.addEventListener("click", () => {
		key.classList.add("playing");
		const audio1 = document.querySelector(`audio#${key.id}`);
		audio1.currentTime = 0;
		audio1.play();
	});
	key.addEventListener("transitionend", () => {
		key.classList.remove("playing");
	});
}
for (const sharp of sharps) {
	sharp.addEventListener("click", () => {
		sharp.classList.add("playing");
		const audio2 = document.querySelector(`audio#${sharp.id}`);
		audio2.currentTime = 0;
		audio2.play();
	});
	sharp.addEventListener("transitionend", () => {
		sharp.classList.remove("playing");
	});
}

const piano = document.querySelector(".piano");
// const show = function () {
// 	piano.style.visibility = "visible";
// };
// show();
piano.addEventListener("mouseover", () => {
	piano.style.opacity = 1;
});
piano.addEventListener("mouseout", () => {
	piano.style.opacity = 0;
});
