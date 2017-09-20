
jQuery(window).load(function() {
	
    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate() +"  "+ d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    $("#lastUpdate").text(strDate);
	
});

