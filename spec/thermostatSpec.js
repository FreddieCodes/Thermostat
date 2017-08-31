describe("Thermostat", function() {
beforeEach(function(){
  thermostat = new Thermostat()
});
  
  describe("temperature control", function() {
  it("should have a default temperature of 20 degrees", function(){
    expect(thermostat.temp).toEqual(20)
  })

  it("should raise the temperature with an up funciton", function(){
    thermostat.up()
    expect(thermostat.temp).toEqual(21)
  })

   it("should lower the temperature with an up funciton", function(){
    thermostat.down()
    expect(thermostat.temp).toEqual(19)
  })

  it("should have a minimum temperature of 10 degrees", function(){
    thermostat.temp = 10
    expect(thermostat.down()).toEqual('Could not lower temperature')
  });

  it("shoudl reset to default temperature", function() {
    thermostat.reset()
    expect(thermostat.temp).toEqual(DEFAULT_TEMP)
  });

});

  describe("Power mode saving", function() {
    it("ON - should have a maximum temperature of 25 degrees ", function (){
      var message = "Can not exceed 25 degrees in this mode."
      thermostat.temp = 25
      expect(function(){
        thermostat.up()
      }).toThrowError(message)
    });

    it("OFF - should have a maximum temperature of 32 degrees", function (){
      var message = "Can not exceed 32 degrees in this mode."
      thermostat.temp = 32
      thermostat.powerSavingButton()
      expect(function(){
        thermostat.up()
      }).toThrowError(message)
    });

    it("has power saving on as a default and change", function() {
      expect(thermostat.powerSaving).toEqual (true)
       thermostat.powerSavingButton()
      expect(thermostat.powerSaving).toEqual (false)
    });
  });

  describe("usage tests", function() {
    it("Tests for high usage", function() {
      thermostat.temp = 30
      expect(thermostat.usage()).toEqual ("high-usage")
    });

    it("Tests for medium usage", function() {
      thermostat.temp = 20
      expect(thermostat.usage()).toEqual ("medium-usage")
    });

    it("Tests for low usage", function() {
      thermostat.temp = 10
      expect(thermostat.usage()).toEqual ("low-usage")
    });

  });


});
