'use strict';

$(document).ready(init);

var team1 = [], team2 = [], team3 = [], team4 = [];
var count = 0;

function init() {
  console.log('readddddy');
  $('#start').on('click', getInfo);
  $('tbody').on('click', clickName);
  $('#reallyBig').on('click', '.box', clickHolder);
}

function getInfo() {

  var name = $('#name').val();
  var position = $('#position').val();
  var skill = $('#skill').val();
  console.log(name, position, skill);

  var player = {
  "playerName": name,
  "position": position,
  "skill": skill,
  }
  //
  // var $name = $('<div>').addClass('name');
  // console.log('player', player);
  console.log("player:", player);
  team1.push(player);

  var $tr = $('#template').clone();
   $tr.removeAttr('id');
   $tr.children('.name').text(name);
   $tr.children('.position').text(position);
   $tr.children('.skill').text(skill);

   console.log("team1:", team1);
  $('#team1List').prepend($tr);
}

function clickName(event) {
  // $(this).closest('tr').css("color","red");
  var $this = $(this).closest('tr').addClass("name");
  console.log("change", $this);
  // $('.selected').appendTo($this);
  // $('.selected').removeClass('selected');
  var wasSelected = $this.hasClass('selected');
  $('box').removeClass('selected');

  if(!wasSelected) {
    $this.addClass('selected');
  }
}

function clickHolder() {
  event.stopPropagation();
  console.log("working");
  var $this = $(this).closest('tr');
  console.log("working", $this);
  // var $destination = $this.parent().siblings();
  // var $box = $(this).detach();
  $('#table2').append($this);
  // $destination.append($box);
}
// for(var i = 0; i < player; i++) {
//   var total = ++count;
//   console.log(total);
//   console.log('inside', i);
//   $('#total1').text("Total = " + total);
// }
