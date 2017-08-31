
function Thermostat () {
};

Thermostat.prototype.temp = 20
Thermostat.prototype.powerSaving = true

Thermostat.prototype.up = function() {
  var message = "Can not exceed 25 degrees in this mode."
  var message2 = "Can not exceed 32 degrees in this mode."
  if (this.temp >= 25 && this.powerSaving === true) throw new Error(message);
  else if (this.temp >= 32 && this.powerSaving === false) throw new Error(message2);
  this.temp += 1
}

Thermostat.prototype.down = function() {
  if (this.temp <= 10) {
    return 'Could not lower temperature';
  }
    this.temp --
}

Thermostat.prototype.powerSavingButton = function() {
  if (this.powerSaving === true) {
    this.powerSaving = false
  } else {
    this.powerSaving = true
  }
}
