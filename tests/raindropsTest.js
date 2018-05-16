describe('Raindrops', function(){
  let raindrops

  beforeEach(function(){
    raindrops = new Raindrops()
  })

  it('takes argument 3 and returns Pling', function(){
    expect(raindrops.raindrops(3)).toEqual('Pling')
  })
})
