class Raindrops {
  raindrops(n){
    if (this.pling(n)) return 'Pling'
    if (this.plang(n)) return 'Plang'
    if (this.plong(n)) return 'Plong'
    return n
  }

  pling(n){
    return n % 3 == 0
  }

  plang(n){
    return n % 5 == 0
  }

  plong(n){
    return n % 7 == 0
  }
}
