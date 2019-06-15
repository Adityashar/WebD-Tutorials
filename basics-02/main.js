// DOM

function handleClick(btnVal) {
	var result = document.getElementById('result');	
	if (btnVal === '=') {
		result.innerText = eval(result.innerText)
	} else if (btnVal === 'C') {
		result.innerText = ''
	} else if (result.innerText === '0') {
		result.innerText = btnVal
	} else {
		result.innerText += btnVal
	}
	
}
