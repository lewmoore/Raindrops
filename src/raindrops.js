class Raindrops {
  raindrops(n){
    if (this._pling(n)) return 'Pling'
    if (this._plang(n)) return 'Plang'
    if (this._plong(n)) return 'Plong'
    return n
  }

  _pling(n){
    return n % 3 == 0
  }

  _plang(n){
    return n % 5 == 0
  }

  _plong(n){
    return n % 7 == 0
  }
}