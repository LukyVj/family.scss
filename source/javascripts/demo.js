// Dirty implementation of family.scss with Javascript
// To make the demo more playful


var selectedStyle = `
background: #FF1B63 !important;
background: linear-gradient(to bottom, #FF3A76, #FF1B63) !important;
font-weight: bold !important;
`;

var preStyle = `
background: rgba(255, 255, 255, 0.5) !important;
background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.6)) !important;
font-weight: 300 !important;
`;

///////////////////////////////
// first
///////////////////////////////

function first(num) {

	function injectStyle(num){
		document.getElementById('style-first').innerHTML = `ul.first li { ${preStyle} }`;
		document.getElementById('style-first').innerHTML += `.first li:nth-child(-n + ${num}){
			${selectedStyle}
		}`;
	}

	var newStyle = injectStyle(num);

}
document.getElementById('first').addEventListener('keyup', function(){
	first(this.innerHTML)
})

///////////////////////////////
// last
///////////////////////////////

function last(num) {

	function injectStyle(num){
		document.getElementById('style-last').innerHTML = `ul.last li { ${preStyle} }`;
		document.getElementById('style-last').innerHTML += `.last li:nth-last-child(-n + ${num}){
			${selectedStyle}
		}`;
	}

	var newStyle = injectStyle(num);

}
document.getElementById('last').addEventListener('keyup', function(){
	last(this.innerHTML)
})

///////////////////////////////
// afterFirst
///////////////////////////////

function afterFirst(num) {

	function injectStyle(num){
		var num = parseInt(num) + 1;
		document.getElementById('style-after-first').innerHTML = `ul.after-first li { ${preStyle} }`;
		document.getElementById('style-after-first').innerHTML += `.after-first li:nth-child(n+${num}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('after-first').addEventListener('keyup', function(){
	afterFirst(this.innerHTML)
})

///////////////////////////////
// fromEnd
///////////////////////////////

function fromEnd(num) {
	function injectStyle(num){
		document.getElementById('style-from-end').innerHTML = `ul.from-end li { ${preStyle} }`;
		document.getElementById('style-from-end').innerHTML += `.from-end li:nth-last-child(${num}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('from-end').addEventListener('keyup', function(){
	fromEnd(this.innerHTML)
})

///////////////////////////////
// between
///////////////////////////////

function between(numa, numb) {
	function injectStyle(numa, numb){
		document.getElementById('style-between').innerHTML = `ul.between li { ${preStyle} }`;
		document.getElementById('style-between').innerHTML += `.between li:nth-child(n+${numa}):nth-child(-n+${numb}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(numa, numb);

}
document.getElementById('between').addEventListener('keyup', function(){
	var vala = document.getElementById('between-a').innerHTML;
	var valb = document.getElementById('between-b').innerHTML;
	between(vala, valb)
})


///////////////////////////////
// evenBetween
///////////////////////////////

function evenBetween(numa, numb) {
	function injectStyle(numa, numb){
		document.getElementById('style-even-between').innerHTML = `ul.even-between li { ${preStyle} }`;
		document.getElementById('style-even-between').innerHTML += `.even-between li:nth-child(even):nth-child(n + ${numa}):nth-child(-n + ${numb}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(numa, numb);

}
document.getElementById('even-between').addEventListener('keyup', function(){
	var vala = document.getElementById('even-between-a').innerHTML;
	var valb = document.getElementById('even-between-b').innerHTML;
	evenBetween(vala, valb)
})

///////////////////////////////
// oddBetween
///////////////////////////////

function oddBetween(numa, numb) {
	function injectStyle(numa, numb){
		document.getElementById('style-odd-between').innerHTML = `ul.odd-between li { ${preStyle} }`;
		document.getElementById('style-odd-between').innerHTML += `.odd-between li:nth-child(odd):nth-child(n + ${numa}):nth-child(-n + ${numb}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(numa, numb);

}
document.getElementById('odd-between').addEventListener('keyup', function(){
	var vala = document.getElementById('odd-between-a').innerHTML;
	var valb = document.getElementById('odd-between-b').innerHTML;
	oddBetween(vala, valb)
})

///////////////////////////////
// nBetween
///////////////////////////////

function nBetween(numa, numb, numc) {
	function injectStyle(numa, numb, numc){
		document.getElementById('style-n-between').innerHTML = `ul.n-between li { ${preStyle} }`;
		document.getElementById('style-n-between').innerHTML += `.n-between li:nth-child(${numa}n):nth-child(n + ${numb}):nth-child(-n + ${numc}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(numa, numb, numc);

}
document.getElementById('n-between').addEventListener('keyup', function(){
	var vala = document.getElementById('n-between-a').innerHTML;
	var valb = document.getElementById('n-between-b').innerHTML;
	var valc = document.getElementById('n-between-c').innerHTML;
	nBetween(vala, valb, valc)
})


///////////////////////////////
// allBut
///////////////////////////////

function allBut(num) {
	function injectStyle(num){
		document.getElementById('style-all-but').innerHTML = `ul.all-but li { ${preStyle} }`;
		document.getElementById('style-all-but').innerHTML += `.all-but li:not(:nth-child(${num})){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('all-but').addEventListener('keyup', function(){
	allBut(this.innerHTML)
})

///////////////////////////////
// each
///////////////////////////////

function each(numa, numb) {
	function injectStyle(numa, numb){
		document.getElementById('style-each').innerHTML = `ul.each li { ${preStyle} }`;

		if (numb == 0) {
  		document.getElementById('style-each').innerHTML += `.each li:nth-child(${numa}n){
  			${selectedStyle}
  		}
  		`
		}
		else {
  		document.getElementById('style-each').innerHTML += `.each li:nth-child(${numa}n + ${numb}){
  			${selectedStyle}
  		}
  		`
		}
	}

	var newStyle = injectStyle(numa, numb);

}
document.getElementById('each').addEventListener('keyup', function(){
	var vala = document.getElementById('each-every').innerHTML;
	var valb = document.getElementById('each-from').innerHTML;
	each(vala, valb)
})

///////////////////////////////
// eachAfter
///////////////////////////////

function eachAfter(numa, numb) {
	function injectStyle(numa, numb){
		document.getElementById('style-each-after').innerHTML = `ul.each-after li { ${preStyle} }`;
		// if (numb < numa ) {
			document.getElementById('style-each-after').innerHTML += `.each-after li:nth-child(${numb - numa}n) ~ :nth-child(${numa}n){
				${selectedStyle}
			}
			`
		// }
		//  else {
		// 	document.getElementById('style-each-after').innerHTML += `.each-after li:nth-child(${numb}n) ~ :nth-child(${numa}n){
		// 		${selectedStyle}
		// 	}
		// 	`
		// }
	}

	var newStyle = injectStyle(numa, numb);

}
document.getElementById('each-after').addEventListener('keyup', function(){
	var vala = document.getElementById('each-after-a').innerHTML;
	var valb = document.getElementById('each-after-b').innerHTML;
	eachAfter(vala, valb)
})


///////////////////////////////
// fromFirstLast
///////////////////////////////

function fromFirstLast(num) {
	function injectStyle(num){
		document.getElementById('style-from-first-last').innerHTML = `ul.from-first-last li { ${preStyle} }`;
		document.getElementById('style-from-first-last').innerHTML += `.from-first-last li:nth-child(${num}),
		.from-first-last li:nth-last-child(${num}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('from-first-last').addEventListener('keyup', function(){
	fromFirstLast(this.innerHTML)
})


///////////////////////////////
// middle
///////////////////////////////

function middle(num) {
	function injectStyle(num){
		document.getElementById('style-middle').innerHTML = `ul.middle li { ${preStyle} }`;
		document.getElementById('style-middle').innerHTML += `.middle li:nth-child(${Math.round(num/2)}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('middle').addEventListener('keyup', function(){
	middle(this.innerHTML)
})


///////////////////////////////
// allButFirstLast
///////////////////////////////

function allButFirstLast(num) {
	function injectStyle(num){
		num = parseInt(num) + 1;
		document.getElementById('style-all-but-first-last').innerHTML = `ul.all-but-first-last li { ${preStyle} }`;
		document.getElementById('style-all-but-first-last').innerHTML += `.all-but-first-last li:nth-child(n+${num}):nth-last-child(n+${num}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('all-but-first-last').addEventListener('keyup', function(){
	allButFirstLast(this.innerHTML)
})


///////////////////////////////
// firstOf
///////////////////////////////

function firstOf(num) {
	function injectStyle(num){
		document.getElementById('style-first-of').innerHTML = `ul.first-of li { ${preStyle} }`;
		document.getElementById('style-first-of').innerHTML += `.first-of li:nth-last-child(${num}):first-child {
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('first-of').addEventListener('keyup', function(){
	firstOf(this.innerHTML)
})


///////////////////////////////
// lastOf
///////////////////////////////

function lastOf(num) {
	function injectStyle(num){
		document.getElementById('style-last-of').innerHTML = `ul.last-of li { ${preStyle} }`;
		document.getElementById('style-last-of').innerHTML += `.last-of li:nth-of-type(${num}):nth-last-of-type(1) {
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('last-of').addEventListener('keyup', function(){
	lastOf(this.innerHTML)
})



///////////////////////////////
// atLeast
///////////////////////////////

function atLeast(num) {
	function injectStyle(num){
		document.getElementById('style-at-least').innerHTML = `ul.at-least li { ${preStyle} }`;
		document.getElementById('style-at-least').innerHTML += `.at-least li:nth-last-child(n + ${num}), .at-least li:nth-last-child(n + ${num}) ~ li {
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('at-least').addEventListener('keyup', function(){
	atLeast(this.innerHTML)
})


///////////////////////////////
// atMost
///////////////////////////////

function atMost(num) {
	function injectStyle(num){
		document.getElementById('style-at-most').innerHTML = `ul.at-most li { ${preStyle} }`;
		document.getElementById('style-at-most').innerHTML += `.at-most li:nth-last-child(-n + ${num}):first-child, .at-most li:nth-last-child(-n + ${num}):first-child ~ li {
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('at-most').addEventListener('keyup', function(){
	atMost(this.innerHTML)
})


///////////////////////////////
// inBetween
///////////////////////////////

function inBetween(numa, numb) {
	function injectStyle(numa, numb){
		document.getElementById('style-in-between').innerHTML = `ul.in-between li { ${preStyle} }`;
		document.getElementById('style-in-between').innerHTML += `ul.in-between li:nth-last-child(n + ${numa}):nth-last-child(-n + ${numb}):first-child, ul.in-between li:nth-last-child(n + ${numa}):nth-last-child(-n + ${numb}):first-child ~ li{
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(numa, numb);

}
document.getElementById('in-between').addEventListener('keyup', function(){
	var vala = document.getElementById('in-between-a').innerHTML;
	var valb = document.getElementById('in-between-b').innerHTML;
	inBetween(vala, valb)
})
