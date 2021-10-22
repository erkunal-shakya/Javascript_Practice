document.write('coderbyte jquery test quations');

import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = `<div id="mainArea">
  <p>button count: <span class="output">0</span></p>
  <button id="mainButton">Increase</button>
</div>`;



$(document).ready(function(){
$('#mainButton').click(function(){
$('.output').html(function(i,value){
return value*1+1;
});
});
});