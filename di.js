let di =document.getElementById("demo");
function get()
{
    let s="&#";
    let n=9856;
    let r=Math.floor(Math.random()*6);
    n=n+r;
    s=s+n+";";
    di.innerHTML=s;

}
