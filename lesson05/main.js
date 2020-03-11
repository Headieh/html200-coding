let eachAmt = [];
let total = 0;

function bank() {
	let menu = [];
	const Q = 'Enter Q to quit';
	const W = 'Enter W to withdraw';
	const D = 'Enter D to deposit';
	const B = 'Enter B to view balance';
	menu.push(Q, W, D, B);
	let input = prompt(menu.join("\n\n"));
	switch (input.toLowerCase()) {
		case 'q':
			break;
		case 'b':
			let total = eachAmt.reduce(function (a, b) {
				return Number(a) + Number(b);
			}, 0);
			alert(`Your balance is: ${total}`);
			bank();
			break;
		case 'w':
			let wd = prompt('Enter amount to withdraw:');
			eachAmt.push(wd * -1);
			bank();
			break;
		case 'd':
			let dp = prompt('Enter amount to deposit:');
			eachAmt.push(dp);
			bank();
			break;
		default:
			alert('Invalid option');
			bank();
			break;
	}
}

let eachAmtLimit = [];
let totalLimit = 0;

function bankLimit() {
	let menu = [];
	const Q = 'Enter Q to quit';
	const W = 'Enter W to withdraw';
	const D = 'Enter D to deposit';
	const B = 'Enter B to view balance';
	menu.push(Q, W, D, B);
	let input = prompt(menu.join("\n\n"));
	switch (input.toLowerCase()) {
		case 'q':
			break;
		case 'b':
			let totalLimit = eachAmtLimit.reduce(function (a, b) {
				return Number(a) + Number(b);
			}, 0);
			alert(`Your balance is: ${totalLimit}`);
			bankLimit();
			break;
		case 'w':
			let wd = prompt('Enter amount to withdraw:');
			eachAmtLimit.push(-1 * wd);

			totalLimitTest = eachAmtLimit.reduce(function (a, b) {
				return Number(a) + Number(b);
			}, 0);
			if (totalLimitTest < 300 & totalLimitTest >= 0) {
				let cont = confirm("Warning: funds less than 300$ Do you wish to continue?");
			}
			if (totalLimitTest < 0) {
				eachAmtLimit.pop();
				alert('Withdrawl not complete - not enough funds');
			}

			bankLimit();
			break;
		case 'd':
			let dp = prompt('Enter amount to deposit:');
			if (Number(dp) <= 50000) {
				eachAmtLimit.push(dp);
			} else {
				alert('Deposits may not exceed $50,000');
			}
			bankLimit();
			break;
		default:
			alert('Invalid option');
			bankLimit();
			break;
	}
}