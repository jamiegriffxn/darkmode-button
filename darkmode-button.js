let theme = localStorage.getItem("theme");

const enabledarkmode = () => {
	let element = document.body;
	element.classList.add("darkmode");
	document.getElementById("togglelight").style.display = "block";
	document.getElementById("toggledark").style.display = "none";
};

const disabledarkmode = () => {
	let element = document.body;
	element.classList.remove("darkmode");
	document.getElementById("togglelight").style.display = "none";
	document.getElementById("toggledark").style.display = "block";
};

window.addEventListener("load", () => {
	let theme = localStorage.getItem("theme");
	var element = document.body;
if (theme === "dark") { enabledarkmode();
} 
else if (theme === "light") {
	   	disabledarkmode();
}
 else {
	let element = document.body;
			document.getElementById("toggledark").style.display = "block";
	document.getElementById("togglelight").style.display = "none";
		element.classList.remove("darkmode");
}})
;

if (theme === "dark") {
	enabledarkmode();
};

if (theme === "light") {
		disabledarkmode();

};

function darkmode() {
   let element = document.body;
	let theme = localStorage.getItem("theme");
   element.classList.add("darkmode");
	localStorage.setItem("theme", "dark");
	document.getElementById("togglelight").style.display = "block";
	document.getElementById("toggledark").style.display = "none";
};

function lightmode() {
   let element = document.body;
	let theme = localStorage.getItem("theme");
   element.classList.remove("darkmode");
	document.getElementById("toggledark").style.display = "block";
	document.getElementById("togglelight").style.display = "none";
	localStorage.setItem("theme", "light");
};
