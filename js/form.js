// Represents form object

var form = {};

$(document).ready(function() {
  // creates module
  form = (function() {
    // form data
    var data = {};

    function getData() {
      return data;
    }

    function onsubmit() {
      ;
    }

    var module = {
      getData: getData,
      onsubmit: onsubmit
    }

    document.getElementById("save").onclick = function(e) {
      var inputs = document.getElementById("form").elements;

      var validator = new Validator(inputs);
      if(validator.validate(data)) {
        //document.getElementById("form").submit();
        module.onsubmit();
      }
    }

    return module;
  })();
});
