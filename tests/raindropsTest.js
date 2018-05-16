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

  it('takes argument 14 and returns Plong', function(){
    expect(raindrops.raindrops(14)).toEqual('Plong')
  })

  it('returns itself if not modulo of 3, 5 or 7', function(){
    expect(raindrops.raindrops(1)).toEqual(1)
  })

  it('takes argument 15 and returns PlingPlang', function(){
    expect(raindrops.raindrops(15)).toEqual('PlingPlang')
  })

  it('takes argument 30 and returns PlingPlang', function(){
    expect(raindrops.raindrops(30)).toEqual('PlingPlang')
  })

  it('takes argument 21 and returns PlingPlong', function(){
    expect(raindrops.raindrops(21)).toEqual('PlingPlong')
  })

  it('takes argument 42 and returns PlingPlong', function(){
    expect(raindrops.raindrops(42)).toEqual('PlingPlong')
  })

  it('takes argument 70 and returns PlangPlong', function(){
    expect(raindrops.raindrops(70)).toEqual('PlangPlong')
  })
})
