$(document).ready(function(){
  $('.slider').slick({
    //autoplay: true,
    dots:false,
    arrows:false,
    fade:true
        });
        
});

$(document).ready(function(){
  $('.store__slider').slick({
    //autoplay: true,
    dots:false,
    arrows:false,
    fade:true
        });
        
});

$(document).ready(function(){
  $('.collections').slick({
    //autoplay: true,
    dots:false,
    arrows:false
        });
        
});
$(document).ready(function(){
  $('.brands').slick({
    //autoplay: true,
    dots:false,
    arrows:false
        });
        
});
$(document).ready(function(){
  $('.say').slick({
    //autoplay: true,
    dots:false,
    arrows:false
        });
        
});

function WinOp(str)
{
var msg = new String("");
msg = '<head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=windows-1251\" /><link rel="stylesheet" type="text/css" href="http://javascript.ru/clientscript/vbulletin_css/style-81884d78-00003.css" id="vbulletin_css" /><title>Search popup</title>'
msg+= "<body><div id=\"pun\" class=\"punbb\"><div id=\"pun-main\" class=\"main\">"
msg+="Search"+str;
msg+="</div></div></body></html>";
popup = window.open("", "", "height=300, width=700, top=300, left=300, scrollbars=1")
popup.document.write(msg)
popup.document.close()
return false
}
var Conten_000='<input placeholder="search"><input type="button" value="search">'

function WinOpaut(str)
{
var msg = new String("");
msg = '<head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=windows-1251\" /><link rel="stylesheet" type="text/css" href="http://javascript.ru/clientscript/vbulletin_css/style-81884d78-00003.css" id="vbulletin_css" /><title>Auth popup</title>'
msg+= "<body><div id=\"pun\" class=\"punbb\"><div id=\"pun-main\" class=\"main\">"
msg+="Login&password"+str;
msg+="</div></div></body></html>";
popup = window.open("", "", "height=300, width=700, top=300, left=300, scrollbars=1")
popup.document.write(msg)
popup.document.close()
return false
}
var Conten_0001='</br><input placeholder="login"></br><input placeholder="password"></br><input type="button" value="LogIN">'

