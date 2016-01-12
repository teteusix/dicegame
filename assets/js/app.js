var cwidth = 585,
		cheight = 242,
		dicex = 60,
		dicey = 22,
		dicewidth = 200,
		diceheight = 200,
		dotrad = 10,
		ctx,
		dx,
		dy;
var firstturn = true;
var point;


// Create throw of dice and insert messages in inputs
function throwdice() {
	var sum,
			ch = 1+Math.floor(Math.random()*6);
	sum = ch;
	dx = dicex;
	dy = dicey;
	drawface(ch);
	dx = dicex + 260;
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

// Design dice and your points
function drawface (n) {
	ctx = document.getElementById('canvas').getContext('2d');
	ctx.lineWidth = 5;
	ctx.clearRect(dx,dy,dicewidth,diceheight);
	ctx.strokeRect(dx,dy,dicewidth,diceheight);
	ctx.fillStyle = "#53DF83";

	switch(n) {
		case 1:
		draw1();
		break;

		case 2:
		draw2();
		break;

		case 3:
		draw2();
		draw1();
		break;

		case 4:
		draw4();
		break;

		case 5:
		draw4();
		draw1();
		break;

		case 6:
		draw4();
		draw2mid();
		break;
	}
}

function draw1 () {
	var dotx,
			doty;

	ctx.beginPath();
		dotx = dx + .5*dicewidth;
		doty = dy + .5*diceheight;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();

	ctx.fill();
}

function draw2 () {
	var dotx,
			doty;

	ctx.beginPath();
		dotx = dx + 3*dotrad;
		doty = dy + 3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);

		dotx = dx + dicewidth - 3*dotrad;
		doty = dy + diceheight - 3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();

	ctx.fill();
}



function draw4 () {
	var dotx,
			doty;

	ctx.beginPath();
		dotx = dx + 3*dotrad;
		doty = dy + 3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);

		dotx = dx + dicewidth - 3*dotrad;
		doty = dy + diceheight - 3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();

	ctx.fill();

	ctx.beginPath();
		dotx = dx + 3*dotrad;
		doty = dy + diceheight - 3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);

		dotx = dx + dicewidth - 3*dotrad;
		doty = dy + 3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();

	ctx.fill();
}


function draw2mid () {
	var dotx,
			doty;

	ctx.beginPath();
		dotx = dx + 3*dotrad;
		doty = dy + .5*diceheight;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);

		dotx = dx + dicewidth - 3*dotrad;
		doty = dy + .5*diceheight;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();

	ctx.fill();
}
