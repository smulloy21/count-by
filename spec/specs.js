describe('countUpBy', function (){
  it("should count up to a number", function (){
    expect(countUpBy(6, 2)).to.eql([2, 4, 6]);
  });

  it("should count up to a number", function (){
    expect(countUpBy(25, 5)).to.eql([5, 10, 15, 20, 25]);
  });
});
