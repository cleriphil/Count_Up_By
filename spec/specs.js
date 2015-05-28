describe('countUpBy', function() {
  it("counts up by one to 20", function() {
    expect(countUpBy(1, 20, 1)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
  });

  it("counts up by three to 16", function() {
    expect(countUpBy(1, 16, 3)).to.eql([1,4,7,10,13,16]);
  });

  it("counts up by five to 100", function() {
    expect(countUpBy(0, 100, 5)).to.eql([0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]);
  });
});
