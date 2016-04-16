var fs = require('fs');
//console.log( fs.readFileSync('./cmudict.txt') );
var cmudictFile = readCmudictFile('./cmudict.txt');
var syllables = [];
for (var i = 0; i <= 7; i++) {
	syllables[i] = [];
}

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function getSyllableCount(phoneme) {
	if(phoneme.match(/\d/g)) {
		return phoneme.replace(/[^\d]/g,"").length;
	}
	return 0;
}

function sortBySyllables(word, syllableCount) {
	if(syllableCount > 0 && syllableCount <= 7) {
		syllables[syllableCount].push(word.replace(/\([\d+]\)/, ""));
		//console.log(word + " is in syllables[" + syllableCount + "]");
	}
}

function formatData(data){    
   var lines = data.toString().split("\n"), lineSplit, syllableCount
   lines.forEach(function(line){    
   	lineSplit = line.split("  ");
   	if (lineSplit[0] != "" && lineSplit[1] != undefined) {
    	syllableCount = getSyllableCount(lineSplit[1]);
    	//console.log("The word " + lineSplit[0] + " has this phoneme layout: " + lineSplit[1] + " and a syllable count of: " + syllableCount); 
    	sortBySyllables(lineSplit[0], syllableCount);
    }
  });  
}

formatData(cmudictFile);


function createHaiku(structure){
   console.log("This should log a haiku with the structure " + structure);
   var newHaiku = '';
    for(var i=0; i < structure.length; i++) {
    	//console.log("structure[i].length: " + structure[i].length);
    	for(var j=0; j < structure[i].length; j++) {
    		var syllableNum = structure[i][j];
	    	//console.log("syllableNum: " + syllableNum);
	    	//console.log("length of syllable array: " + syllables[syllableNum].length);
	    	var rand = Math.round(Math.random()*(syllables[syllableNum].length));
	    	//console.log("rand: " + rand);
	    	//console.log("haiku line: " + syllables[syllableNum][rand] + "\n");
	    	newHaiku += syllables[syllableNum][rand] + " ";
    	}
    	newHaiku += "\n";
    }
    return newHaiku;
}



/*
module.exports = {
  createHaiku: haiku.createHaiku,
};

function greet (name) { console.log('hello ' + name); }
function shout (name) { console.log('HELLO ' + name); }
module.exports = { greet: greet, shout: shout };

exports.greet = function (name) { console.log('hello ' + name); }
exports.shout = function (name) { console.log('HELLO ' + name); }	
*/
module.exports.createHaiku = createHaiku;