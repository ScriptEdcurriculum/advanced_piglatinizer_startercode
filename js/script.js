$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

    $("#button").click(function(){
        let input = $(".input").val();

        let res = input[0] + "ay";
        let restwo = input - input[0];
        let final = restwo + res;
        $(".output").html(res);
    });

    console.log(input)






});
