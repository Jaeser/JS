/*
        _____ _______ _______ _______ _______  ______
          |   |_____| |______ |______ |______ |_____/
        __|   |     | |______ ______| |______ |    \_
        _____________________________________________
           Ｉ  ｆｏｕｎｄ  Ｗａｌｔｅｒ，  ｎｏｗ  Ｉ＇ｌｌ  ｆｉｎｄ  ｙｏｕ．
           twitter.com/jaesercode
 
        => DVZ Chatbox Greentext
v1.1
*/
$(document).ready(function(){
String.prototype.insert=function(t,e){return t>0?this.substring(0,t)+e+this.substring(t,this.length):e+this},$("#greentext").length<1&&($("head").append("<style id='greentext'>.greentext{color:#789922;font-family: arial,helvetica,sans-serif;font-weight:100}</style>"),$(".window").parent().prepend("<span class='greentext'>&gt;Greentext JS by <a href='http://twitter.com/jaesercode'>Jaeser</a></span>")),$(".window").bind("DOMSubtreeModified",function(){$("div.entry").each(function(){var t=$(this).find(".text");t.text().indexOf(">")>-1&&"true"!==t.attr("greentext")&&(t.html(t.html().insert(t.html().indexOf("&gt;"),"<span class='greentext'>")+"</span>"),t.attr("greentext","true"))})});
});