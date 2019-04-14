var traces =[];
for(let x=0;x<=10;x++){
    traces[x] = {type:'scatter',x:{}};
}
var data = [traces[0], traces[1]];
Plotly.newPlot('plot1', data);
let plotse = document.getElementById("plots");
let sp = require("serialport");
//console.log(sp.list());
document.getElementById("closebutton").onclick =() => {window.top.close()};
document.getElementById("minimizebutton").addEventListener("onclick",() => {window.minimize()});
document.getElementById("maximizebutton").onclick =() => {window.maximize()};