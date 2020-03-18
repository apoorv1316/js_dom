var color=["red","green","orange","yellow","black"];
var p=0;
document.body.addEventListener('click',function(){
    p=p<color.length ? ++p : 0;
    document.body.style.background=color[p]
})