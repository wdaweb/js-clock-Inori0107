const elDate = document.getElementById("date");
const Time = document.getElementById("time");

const clock = () => {
	const date = new Date();
	//日期
	const days = date.getDay();
	const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const dayName = weeks[days];
	elDate.innerText = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${dayName}`;
	// 時 & 分
	let hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	// second = second < 10 ? "0" + second : second
	Time.innerText = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
	// AM/PM
	let d = "";
	d = hour < 12 ? "AM" : "PM";
	hour = hour > 12 ? hour - 12 : hour;
	hour = hour == 0 ? (hour = 12) : hour;
	Time.innerHTML += `<span>${d}</span>`;
};
setInterval(clock, 1000);
