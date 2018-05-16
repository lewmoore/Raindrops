describe('Raindrops', function(){
  let raindrops

  beforeEach(function(){
    raindrops = new Raindrops()
  })

  it('takes argument 3 and returns Pling', function(){
    expect(raindrops.raindrops(3)).toEqual('Pling')
  })

  it('takes argument 6 and returns Pling', function(){
    expect(raindrops.raindrops(6)).toEqual('Pling')
  })

  it('takes argument 5 and returns Plang', function(){
    expect(raindrops.raindrops(5)).toEqual('Plang')
  })
})
