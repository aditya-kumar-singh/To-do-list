//checkoff specific todos

//$("li").click(function(){
	/*$(this).css("color","red")
	$(this).css("text-decoration","line-through")*/
	//console.log($(this).css("color"))


$("ul").on("click","li",function(){///using on instead of click due to future adding problems//also now adding listener on ul
$(this).toggleClass("completed")


	/*if($(this).css("color")==="rgb(128, 128, 128)"){
		//console.log("line is already gray")
		//$(this).css("color","Black")

		$(this).css({
		color:"black",
		textDecoration:"none"

	});

	}
else{
	$(this).css({
		color:"gray",
		textDecoration:"line-through"

	});
}*/
	
})

///click on todo to delete /////////////////////////

//$("span").click(function(event){

$("ul").on("click","span",function(event){///using on instead of click


	
	      event.stopPropagation();//for stopping bubbling

//$(this).parent().remove()


$(this).parent().fadeOut(500,function(){
	$(this).remove()///for removing
})

})

$("input[type='text']").keypress(function(event){

	if(event.which===13){

		//console.log("you pressed a enter")
		//console.log($(this).val())

var toDotext=$(this).val()//grabbing new todo text

//creating a new li and append
$(this).val("");

$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>   "  + toDotext + "</li>")

	}

	//console.log("you pressed")
})


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()//using fade toggle instead of fadeout
})