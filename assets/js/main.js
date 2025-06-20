/* Exemplo de Requisição AJAX  

function success () { console.log(JSON.parse(this.responseText)); } 
	function error (err) { console.log('Erro:', err); }
	var xhr = new XMLHttpRequest(); 
	xhr.onload = success; 
	xhr.onerror = error;
	xhr.open('GET', 'https://api.github.com/users/rommelcarneiro'); 
	xhr.send();
    
});
*/
