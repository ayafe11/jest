import _ from "lodash";
import * as Sum from "./sum";

var btn_change_txt=document.getElementById("btn_change_txt");

var el = document.getElementById("el");
btn_change_txt.addEventListener("click", function(){
    el.innerHTML = "hello world!!!!!";
})

var list= document.getElementById("list");
var names =["aya","ali","ahmed"];
_.forEach(names,function(name){
    var li = document.createElement("li");
    li.innerHTML = name+"\n";
    list.appendChild(li);
    console.log(name);
})


var sum_results = document.getElementById("sum_results");
sum_results.innerHTML = Sum.default(2,2);