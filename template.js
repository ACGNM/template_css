/* Button js */

//Back button 1
$('#bt_back_1').bind('touchstart',function(){
	$(this).removeClass('bt_back').addClass('bt_back_down');
}).bind('touchend',function(){
	$(this).removeClass('bt_back_down').addClass('bt_back');
});
$('#bt_back_1').bind('mousedown',function(){
	$(this).removeClass('bt_back').addClass('bt_back_down');
}).bind('mouseup',function(){
	$(this).removeClass('bt_back_down').addClass('bt_back');
});


//Back button 2
$('#bt_back_2').bind('touchstart',function(){
	$(this).removeClass('bt_back').addClass('bt_back_down');
}).bind('touchend',function(){
	$(this).removeClass('bt_back_down').addClass('bt_back');
});
$('#bt_back_2').bind('mousedown',function(){
	$(this).removeClass('bt_back').addClass('bt_back_down');
}).bind('mouseup',function(){
	$(this).removeClass('bt_back_down').addClass('bt_back');
});

//Continue button
$('#bt_continue_1').bind('touchstart',function(){
	$(this).removeClass('bt_continue').addClass('bt_continue_down');
}).bind('touchend',function(){
	$(this).removeClass('bt_continue_down').addClass('bt_continue');
});
$('#bt_continue_1').bind('mousedown',function(){
	$(this).removeClass('bt_continue').addClass('bt_continue_down');
}).bind('mouseup',function(){
	$(this).removeClass('bt_continue_down').addClass('bt_continue');
});

/* End button js */



/* Top select page */
for (var i = 1; i < 7; i++) {
	id = 'div#pay_'+i
	$(id).bind('touchstart',function(){
		$(this).addClass('home_content_touching');
	}).bind('touchend',function(){
		$(this).removeClass('home_content_touching');
	});
	$(id).bind('mousedown',function(){
		$(this).addClass('home_content_touching');
	}).bind('mouseup',function(){
		$(this).removeClass('home_content_touching');
	});
};

/* End top select page */


/* Credit card select page */

/* Credit card select page */
