$(document).ready(function(){	
	$('img').click(function() {
		var newSource = $this.attr('alt-src');

		$this.attr('alt-src', $this.attr('src'));
		$this.attr('src', newSource);
	})
});	