var date 		= new Date();
var hours 		= date.getHours();
var min 		= date.getMinutes();
var minutes 	= min > 9 ? min : '0' + min;
var ampm 		= hours >= 12 ? ' مساءً' : ' صباحًا';
var month 		= date.getMonth(); 
var day 		= date.getDate();
var year 		= date.getFullYear();
var dayname 	= date.getDay();
var monthNames 	= [ 'يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
var week 		= [ 'الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
var mwp_date 	= week[dayname] + " " + day + " " + monthNames[month] + " " + year +" - "+ hours+":"+minutes+ " "+ampm;
var mselector 	= document.querySelector('span.today');
mselector.innerHTML += mwp_date;



function myFunction() {
alert("WELCOME TO OUR SITE");
}
