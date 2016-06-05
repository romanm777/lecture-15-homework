// Represents table object

var table = {};

$(document).ready(function() {
  // creates module
  table = (function() {
    var tableEl = document.getElementById("table");

    function clearTable() {
      var rowCount = tableEl.rows.length;
      for(var i = rowCount - 1; i > 0; --i) {
        tableEl.deleteRow(i);
      }
    }

    function fillTable(users) {
      users.forEach(function(user, index) {
        var row = tableEl.insertRow(-1);
        row.setAttribute("data-id", index);

        // creates cells
        var nameCell = row.insertCell(0);
        var sexCell = row.insertCell(1);
        var birthDateCell = row.insertCell(2);
        var addressCell = row.insertCell(3);
        var phoneCell = row.insertCell(4);
        var emailCell = row.insertCell(5);

        // Add some text to the new cells:
        nameCell.innerHTML = user.getName();

        if(user.isVisible()) {
          sexCell.innerHTML = user.getSex();
          birthDateCell.innerHTML = user.getBirthDate();
          addressCell.innerHTML = user.getAddress();
          phoneCell.innerHTML = user.getPhone();
          emailCell.innerHTML = user.getEmail();
        }
      });
    }

    return {
      clearTable: clearTable,
      fillTable: fillTable
    }
  })();
});
