function SuperUser(name) {
  this._name = name;
}

SuperUser.prototype.getName = function () {
  return this._name;
}


//changes user visibility in the table (should be inherited)
SuperUser.prototype.changeDataVisibility = function (bVisible) {
}
