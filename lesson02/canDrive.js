const firstName = "Billy"
const lastName = "Idol"
let age = 64 //12
const driveAge = 16

if (age >= driveAge) {
	console.log(`${firstName} ${lastName} can drive!`);
	console.log(`Driven for: ${age - driveAge} years`);
}

if (age < driveAge) {
	let x = 5;
	while (x >= 0) {
		console.log(x);
		x--;
	}
}