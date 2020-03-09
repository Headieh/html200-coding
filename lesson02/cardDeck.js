let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

for (let i = 0; i < values.length; i++) {
	for (let j = 0; j < suits.length; j++) {
		console.log(`${values[i]} ${suits[j]}`);
	}
}