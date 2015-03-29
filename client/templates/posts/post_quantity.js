Template.postQuantity.events({
	'submit amount': function(e) {
		

		var a = document.querySelectorAll('input[type=button]');

		for (var i = 0; i<a.length; i++) {
 		a[i].addEventListener('click', increaseDecrease);   
		}

		function increaseDecrease () {
    	var b = document.getElementById('textBox');
    	if (this.id == 'decreaseNumber') {
    	b.value = parseInt(b.value) - 1;
    	}
    	else if (this.id == 'increaseNumber') {
    	b.value = parseInt(b.value) + 1;                                      
    	}
		}
	}
});