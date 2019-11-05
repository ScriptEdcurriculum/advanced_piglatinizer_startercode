$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

    $("#button").click(function(){
        let input = $(".input").val();
        var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
        let letterOne = input[0];

        if (vowels.indexOf(letterOne) > -1) {
		let final= input + 'ay';
        $(".output").html(final);
	} else {
		let final = input.slice(1) + letterOne + 'ay';
        $(".output").html(final);
    }



    });
});
