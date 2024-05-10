
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.

	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
const button = document.getElementsByClassName("btn");

for (let i = 0; i < button.length; i++) {
button[i].classList.add('custom-button');
button[i].style.padding = '10px 20px';
button[i].style.border = 'none';
button[i].style.borderRadius = '5px';
button[i].style.backgroundColor = '#3498db';
button[i].style.color = '#ffffff';
button[i].style.fontFamily = 'Arial, sans-serif';
button[i].style.cursor = 'pointer';

// Menambahkan efek hover
button[i].addEventListener('mouseover', () => {
  button[i].style.backgroundColor = '#2980b9';
});

button[i].addEventListener('mouseout', () => {
  button[i].style.backgroundColor = '#3498db';
});

// Menambahkan efek active saat tombol ditekan
button[i].addEventListener('mousedown', () => {
  button[i].style.backgroundColor = '#2c3e50';
});

button[i].addEventListener('mouseup', () => {
  button[i].style.backgroundColor = '#3498db';
});
}

function closet() {
  window.close();
}

const quitter = document.getElementById("quit");
quitter.addEventListener('click', () => {
  closet()
});
}
