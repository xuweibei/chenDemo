/*
    控制当前一列的功能
        1.点击第一个 - 号，数量发生改变
*/
var list=document.getElementById('list');
var lis=list.querySelectorAll('li')[0];
var minus=lis.querySelector('.minus');
var n=lis.querySelector('.n');
var minus=lis.querySelector('.minus');
var num=0;
minus.onclick=function(){
    if(num>0){
        n.innerHTML=num--;
    }
    
}