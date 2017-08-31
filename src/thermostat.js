
function Thermostat () {
};
var DEFAULT_TEMP = 20

Thermostat.prototype.temp = DEFAULT_TEMP
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

Thermostat.prototype.reset = function() {
  this.temp = DEFAULT_TEMP
}

Thermostat.prototype.usage = function() {
  if(this.temp < 18) {
    return "low-usage"
  }
  else if (this.temp > 18 && this.temp < 25) {
    return "medium-usage"
  }
  else {
    return "high-usage"
  }
};