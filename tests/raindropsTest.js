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

  it('takes argument 10 and returns Plang', function(){
    expect(raindrops.raindrops(10)).toEqual('Plang')
  })

  it('takes argument 7 and returns Plong', function(){
    expect(raindrops.raindrops(7)).toEqual('Plong')
  })
})
