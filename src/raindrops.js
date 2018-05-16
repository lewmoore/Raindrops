class Raindrops {
  raindrops(n){
    if (n % 5 == 0 && n % 7 == 0) return 'PlangPlong'
    if (this._plingPlong(n)) return 'PlingPlong'
    if (this._plingPlang(n)) return 'PlingPlang'
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

  _plingPlang(n){
    return n % 3 == 0 && n % 5 == 0
  }

  _plingPlong(n){
    return n % 3 == 0 && n % 7 == 0
  }
}
