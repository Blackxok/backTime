const U_kun = new Date("Dec 18, 2022 15:00:00").getTime();
//
const count = setInterval(() => {
	//
	let now = new Date().getTime();
	let hisob = U_kun - now;
	//
	let kun = Math.floor(hisob / (1000 * 60 * 60 * 24));
	let soat = Math.floor((hisob % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let min = Math.floor((hisob % (1000 * 60 * 60)) / (1000 * 60));
	let sec = Math.floor((hisob % (1000 * 60)) / 1000);

	//
	document.getElementById("sec").innerHTML = sec;
	document.getElementById("min").innerHTML = min;
	document.getElementById("hour").innerHTML = soat;
	document.getElementById("day").innerHTML = kun;
	//
}, 1000);
