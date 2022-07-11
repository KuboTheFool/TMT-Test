let modInfo = {
	name: "The Tree of Insignificance",
	id: "treeofinsignificance",
	author: "Kubo",
	pointsName: "Primons",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1.1",
	name: "New day, new layer",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.01</h3><br>
	Added basic Generon layer<br>
	Balancing to come later<br><br>
	<h3>v0.1</h3><br>
	Balanced Generon layer<br>
	Added Extendon layer, to be worked on<br><br>
	<h3>v0.1.1</h3><br>
	Extendon layer now grants a proper passive boost and milestones<br>
	`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)

	if (getBuyableAmount('gen', 11) > 0) gain = gain.times(buyableEffect('gen', 11))
	if (getBuyableAmount('gen', 21) > 0) gain = gain.times(buyableEffect('gen', 21)) 
	if (getBuyableAmount('gen', 31) > 0) gain = gain.times(buyableEffect('gen', 31)) 
	if (getBuyableAmount('gen', 41) > 0) gain = gain.times(buyableEffect('gen', 41)) 
	if (getBuyableAmount('gen', 51) > 0) gain = gain.times(buyableEffect('gen', 51))
	if (getBuyableAmount('gen', 61) > 0) gain = gain.times(buyableEffect('gen', 61))
	if (getBuyableAmount('gen', 71) > 0) gain = gain.times(buyableEffect('gen', 71))
	if (getBuyableAmount('gen', 81) > 0) gain = gain.times(buyableEffect('gen', 81))
	if (getBuyableAmount('gen', 91) > 0) gain = gain.times(buyableEffect('gen', 91))
	if (getBuyableAmount('gen', 101) > 0) gain = gain.times(buyableEffect('gen', 101))
	
	if ((player['ext'].points) > 0) gain = gain.times(((player['ext'].points).log2()).plus(2))
	
	// gain = gain.times(1000) // lazy debug

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}