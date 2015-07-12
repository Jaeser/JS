/*
        _____ _______ _______ _______ _______  ______
          |   |_____| |______ |______ |______ |_____/
        __|   |     | |______ ______| |______ |    \_
        _____________________________________________
           Ｉ  ｆｏｕｎｄ  Ｗａｌｔｅｒ，  ｎｏｗ  Ｉ＇ｌｌ  ｆｉｎｄ  ｙｏｕ．
           twitter.com/jaesercode
 
        => DVZ Chatbox Kawaiiness, works on any DVZ Shoutbox, made for raidtalk.io
v1.2
-Running as soon as page loaded up fully
v1.1
-Changed font color
*/
$(document).ready(function(){
function GetChar(t){for(var e=0;e<N_AL.length;e++)if(N_AL[e]==t[0])return F_AL[e];return t}function FullWidth(t){for(var e="",n=0;n<t.length;n++)e+=GetChar(t[n]);return e}var N_AL="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"§$%&/()=?`'²³{[]}\\^_-|°*+#,.;: ",F_AL="ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９！＂§＄％＆／（）＝？｀＇²³｛［］｝＼＾＿－｜°＊＋＃，．；： ";$("#TOUCBOX").length&&$("#TOUCBOX").remove(),$(".panel").parent().append("<div id='TOUCBOX'></div>");var $tb=$("#TOUCBOX");$tb.html('<input type="text" autocomplete="off" placeholder="Ｂｅ ｋａｗａｉｉ ／／ Ｊａｅｓｅｒ" class="text">').find("input").css("background-color","rgb(200,200,200)").css("color","rgb(40,40,40)"),$tb.find("input").keypress(function(t){13==t.which?dvz_shoutbox.shout():setTimeout(function(){$(".panel").find("input").first().val(FullWidth($tb.find("input").val()))},1)}),$tb.append("<hr><a href='http://twitter.com/jaesercode'target='_blank'>Made by Jaeser</a>").find("a").css("font-size","150%");
});