/*
        _____ _______ _______ _______ _______  ______
          |   |_____| |______ |______ |______ |_____/
        __|   |     | |______ ______| |______ |    \_
        _____________________________________________
           Ｉ  ｆｏｕｎｄ  Ｗａｌｔｅｒ，  ｎｏｗ  Ｉ＇ｌｌ  ｆｉｎｄ  ｙｏｕ．
           twitter.com/jaesercode
 
        => DVZ Chatbox Clickable links
v1.0

Issues
-Breaks smileys
*/
String.prototype.linkify=function(){var t=/\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,i=/(^|[^\/])(www\.[\S]+(\b|$))/gim,e=/[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;return this.replace(t,'<a href="$&" target="_blank">$&</a>').replace(i,'$1<a href="http://$2" target="_blank">$2</a>').replace(e,'<a href="mailto:$&" target="_blank">$&</a>')},$(".window").bind("DOMSubtreeModified",function(){$("div.entry").each(function(){"true"!==$(this).attr("haslinked")&&($(this).attr("haslinked","true"),$(this).find(".text").html($(this).find(".text").html().linkify()))})}),$(".window").trigger("DOMSubtreeModified");