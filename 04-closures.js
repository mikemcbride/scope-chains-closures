function foo () {
	var bar;
	quux = 'hi';

	function zip () {
		var quux = 'hello';
		bar = true;
	}

	return zip;
}
