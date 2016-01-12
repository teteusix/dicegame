var cwidth = 400,
		cheight = 300,
		dicex = 50,
		dicey = 50,
		dicewidth = 100,
		diceheight = 100,
		dotrad = 6,
		ctx,
		dx,
		dy;
var firstturn = true;
var point;

function throwdice() {
	var sum,
			ch = 1+Math.floor(Math.random()*6);
	sum = ch;
	dx = dicex;
	dy = dicey;
	drawface(ch);
	dx = dicex + 150;
	ch = 1+Math.floor(Math.random()*6);
	sum += ch;
	drawface(ch);


	var bank = Number(document.f.bank.value);

	if (bank<10){
		alert("You ran out money! Add some more and try again");
		return;
	};
	bank = bank - 10;
	document.f.bank.value = String(bank);


	// new rules
	if (firstturn) {
		switch(sum) {
			case 7:
			case 11:
				document.f.outcome.value = "You win!";
				bank = Number(document.f.bank.value);
				bank += 20;
				document.f.bank.value = String(bank);
				break;
			case 2:
			case 3:
			case 12:
				document.f.outcome.value = "You lose!";
				break;
			default:
				document.f.pv.value = point;
				firstturn = false;
				document.f.stage.value = "Need fallow-up throw";
				document.f.outcome.value = "";
		}
	} else {
		switch(sum) {
			case point:
				document.f.outcome.value = "You win!";
				document.f.stage.value = "Back to first throw";
				document.f.pv.value = " ";
				firstturn = true;

				document.f.outcome.value = "You win!";
				bank = Number(document.f.bank.value);
				bank += 20;
				document.f.bank.value = String(bank);
				break;
			case 7:
				document.f.outcome.value = "You lose!";
				document.f.stage.value = "Back to first throw";
				document.f.pv.value = " ";
				firstturn = true;
				break;
		}
	};
}