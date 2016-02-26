'use strict';

$(document).ready(init);

var team1 = [], team2 = [], team3 = [], team4 = [], total = [];
var count = 0, player;

function init() {
  console.log('readddddy');
  $('#start').on('click', getInfo);
  $('tbody').on('click', clickName);
  // $('#reallyBig').on('click', '.box', clickHolder);
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

  // count = ++count;
  console.log("count", count);
  // $('#totalNumber').detach();
  var $showTotal = $('<div>').text(count++);
  $('#totalNumber').append($showTotal);

  console.log("player:", player);
  team1.push(player);

  var $tr = $('#template').clone();
   $tr.removeAttr('id');
   $tr.children('.name').text(name);
   $tr.children('.position').text(position);
   $tr.children('.skill').text(skill);

   console.log("team1:", team1);
  $('#teamAllList').prepend($tr);
}

function clickName(event) {
  event.stopPropagation();

  console.log("working");
  $(".make").click(function () {
  var row = $(this).closest("tr").addClass("selected");

  var table = $(this).closest("table");
    console.log("working holder", table);

    row.detach();

    if (table.is("#tableHome")) {
        $("#table1").append(row);
        // $(this).closest("table").append(row);
    }  else {
        $("#table1").append(row);
    }

    // $("#table1").append(row);
    console.log("clickedPlayer");
  });
}
