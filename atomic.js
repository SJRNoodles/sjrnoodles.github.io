function dTex(a,t) {
document.write("<p style='"+a+"'>"+t+"</p>");
}
function dBtn(o,a,t){
document.write("<button onclick='"+o+"'style='"+a+"'>"+t+"</button>");
}
function dTaggedHTM(z,a,t) {
document.write("<p id='"+z+"'style='"+a+"'>"+t+"</p>");
}
function dLink(l,a,t) {
document.write("<a href='"+l+"'style='"+a+"'>"+t+"</a>");
}
function dHead(h,a,t) {
document.write("<h"+h+" style='"+a+"'>"+t+"</h"+h+">");
}
function br(){
document.write("<br>");
}
function hr(){
document.write("<hr>");
}
function dCode(code){
document.write("<code style='color:#ffa;background-color:#260C0C;'>"+code+"</code>");
}
function dImg(img){
document.write("<img src='"+img+"'>");
}
function Bg(color){
document.write("<style>body{background-color:"+color+";}</style>");
}
function sDiv(id,style){
document.write("<div style='"+style+"'id='"+id+"'>");
}
function eDiv(){
document.write("</div>");
}
function dNavBar(i1,l1,s){
   for(i=0;i<i1.length;i++){
   document.write("<a href='"+l1[i]+"' style='"+s+"'>"+i1[i]+"</a>");
   }
}
