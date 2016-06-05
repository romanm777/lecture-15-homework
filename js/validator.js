//
//

function Validator(inputs) {
  this._inputs = inputs;
}

Validator.prototype.validate = function(data) {
  // remove old messages
  this._removeMessages();

  var inputCount = this._inputs.length;
  var tempData = {};
  var isCorrect = true;

  var thisPtr = this;
  [].forEach.call(this._inputs, function(input) {
    if(input.id == "save")
      return;

    if(input.name == "sex") {
      if(input.checked)
        tempData[input.name] = input.value;
    }
    else {
      tempData[input.name] = input.value;
    }

    isCorrect = thisPtr._checkBirthDate(input) ? isCorrect : false;
    isCorrect = thisPtr._checkPhone(input) ? isCorrect : false;
    isCorrect = thisPtr._checkEmail(input) ? isCorrect : false;
  });

  if(isCorrect) {
    for(var prop in tempData) {
      if(tempData.hasOwnProperty(prop)) {
        data[prop] = tempData[prop];
      }
    }

    return true;
  }
  else {
    return false;
  }
}

///////////////////////////////////////////////////////
///               Internals

Validator.prototype._checkBirthDate = function (input) {
  if(input.name != "birth_date")
      return true;

    // date field should contain current date (format dd/mm/yyyy)
    var SEPARATOR = "/",
        isCorrect = true;

    // slash position check
    if(!(input.value.indexOf(SEPARATOR) === 2
        && input.value.indexOf(SEPARATOR, 3) === 5
        && input.value.length == 10)) {
      input.focus();
      isCorrect = false;
    }

    // splits the date string to parts
    var dateParts = input.value.split(SEPARATOR);

    var day = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]);
    var year = parseInt(dateParts[2]);

    // check digits
    if(isNaN(day) || isNaN(month) || isNaN(year)) {
      isCorrect = false;
    }

    // check data if correct
    var date = new Date(year, month - 1, day);
    if(isNaN(date.getTime())) {
      isCorrect = false;
    }

    if(!isCorrect) {
      this._showErrorMessage(input, "Correct date format is dd/mm/yyyy");
    }
    else {
      // saves the date for output
      day = date.getDate().toString();
      month = (date.getMonth() + 1).toString();
      year = date.getFullYear().toString();

      day = (day.length == 1) ? "0" + day : day;
      month = (month.length == 1) ? "0" + month : month;

      input.value = day + SEPARATOR + month + SEPARATOR + year;
    }

    return isCorrect;
}

Validator.prototype._checkPhone = function (input) {
  if(input.name != "phone")
      return true;

  var bOnlyDigit = /^\d+$/.test(input.value);
  if(!bOnlyDigit) {
    this._showErrorMessage(input, "Phone number should have only digits");
    return false;
  }

  return true;
}

Validator.prototype._checkEmail = function (input) {
  if(input.name != "email")
      return true;

    var isCorrect = true,
        value = input.value,
        atIndex = -1;

    atIndex = value.indexOf("@");

    if(!(atIndex < value.length - 1 && atIndex > 0)) {
      this._showErrorMessage(input, "Input correct email");
      return false;
    }

    return true;
}

Validator.prototype._removeMessages = function () {
  $("em[class='error']").remove();
}

Validator.prototype._showErrorMessage = function (input, message) {
  $(input).after("<em class='error' style='color: red; font-size: 13px'>" + message + "</em>");
}
