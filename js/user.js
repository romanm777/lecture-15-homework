// Represents User object inherited from SuperUser

function User(name, sex, birthDate, address, phone, email) {
  SuperUser.call(this, name);

  this._sex = sex;
  this._birthDate = birthDate;
  this._address = address;
  this._phone = phone;
  this._email = email;

  // inits visibility
  this._isDataVisible = true;
}

User.prototype = Object.create(SuperUser.prototype);
User.prototype.constructor = User;

/////////////////////////////////////////////////////////
///                   Public

User.prototype.isVisible = function () {
  return this._isDataVisible;
}

User.prototype.getSex = function () {
  return this._sex;
}

User.prototype.getBirthDate = function () {
  return  this._birthDate;
}

User.prototype.getAddress = function () {
  return this._address;
}

User.prototype.getPhone = function () {
  return this._phone;
}

User.prototype.getEmail = function () {
  return this._email;
}


/////////////////////////////////////////////////////////
///                   Overriden

//changes value of property isDataVisible (from User)
User.prototype.changeDataVisibility = function (bVisible) {
  this._isDataVisible = bVisible;
}
