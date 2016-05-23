// Dirty implementation of family.scss with Javascript
// To make the demo playful


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
///////////////////////////////

function pairBetween(numa, numb) {
	function injectStyle(numa, numb){
		document.getElementById('style-pair-between').innerHTML = `ul.pair-between li { ${preStyle} }`;
		document.getElementById('style-pair-between').innerHTML += `.pair-between li:nth-child(even):nth-child(n + ${numa}):nth-child(-n + ${numb}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(numa, numb);

}
document.getElementById('pair-between').addEventListener('keyup', function(){
	var vala = document.getElementById('pair-between-a').innerHTML;
	var valb = document.getElementById('pair-between-b').innerHTML;
	pairBetween(vala, valb)
})

///////////////////////////////
///////////////////////////////

function impairBetween(numa, numb) {
	function injectStyle(numa, numb){
		document.getElementById('style-impair-between').innerHTML = `ul.impair-between li { ${preStyle} }`;
		document.getElementById('style-impair-between').innerHTML += `.impair-between li:nth-child(odd):nth-child(n + ${numa}):nth-child(-n + ${numb}){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(numa, numb);

}
document.getElementById('impair-between').addEventListener('keyup', function(){
	var vala = document.getElementById('impair-between-a').innerHTML;
	var valb = document.getElementById('impair-between-b').innerHTML;
	var valc = document.getElementById('impair-between-b').innerHTML;
	impairBetween(vala, valb)
})


///////////////////////////////
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
///////////////////////////////

function each(num) {
	function injectStyle(num){
		document.getElementById('style-each').innerHTML = `ul.each li { ${preStyle} }`;
		document.getElementById('style-each').innerHTML += `.each li:nth-child(${num}n){
			${selectedStyle}
		}
		`
	}

	var newStyle = injectStyle(num);

}
document.getElementById('each').addEventListener('keyup', function(){
	each(this.innerHTML)
})

///////////////////////////////
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
