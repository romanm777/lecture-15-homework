// Create form in html file for adding people with following fields:
//  - name
//  - sex (male/female/other)
//  - birth date
//  - address
//  - phone
//  - email,
// and table with the same columns under the form for added people.
//
// When we click “save” button you should create instance of User. Every time
// when we create new user, push it’s instance to users array, then render our
// users to table under the form.
//
// User should inherit next method from SuperUser:
//  - changeDataVisibility() //changes value of property isDataVisible (from User)
//
//
// When we click on table row (tr), we have to get user by index from array and
// call changeDataVisibility. Depending on isDataVisible property you should
// show or hide all columns in table except name for current user.
//
// // tip: user’s index can be stored in tr attribute, for instance <tr data-id=”3”>

$(document).ready(function() {
  // array of users
  var users = [];

  //document.getElementById("form").onsubmit = function(e) {
  form.onsubmit = function(e) {
    //event.preventDefault();

    var data = form.getData();
    users.push(new User(
      data.name,
      data.sex,
      data.birth_date,
      data.address,
      data.phone,
      data.email
    ));

    // refills table
    table.clearTable();
    table.fillTable(users);
  };

  document.getElementById("table").onclick = function(e) {
    var tableRow = e.target.parentNode;
    var userId = tableRow.getAttribute("data-id");
    if(userId.length == 0 || userId == null)
      return;

    var user = users[parseInt(userId)];
    user.changeDataVisibility(!user.isVisible());

    // refills table
    table.clearTable();
    table.fillTable(users);
  }
});
