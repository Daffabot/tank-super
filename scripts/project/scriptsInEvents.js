
// Put imports here that you wish to use for script blocks in event sheets, e.g.:

// import * as myModule from "./mymodule.js";

// Then you can use 'myModule' in script blocks in event sheets.


const scriptsInEvents = {

	async Maincode_Event1(runtime, localVars)
	{
		const button = document.getElementsByClassName("btn");
		
		for (let i = 0; i < button.length; i++) {
		  button[i].style.fontWeight = 'bold';
		  button[i].style.fontSize = '16px';
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

