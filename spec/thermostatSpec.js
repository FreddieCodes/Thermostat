describe("Thermostat", function() {
beforeEach(function(){
  thermostat = new Thermostat()
});
 
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


});
