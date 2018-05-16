class Raindrops {
  raindrops(n){
    if (this._plangPlong(n)) return 'PlangPlong'
    if (this._plingPlong(n)) return 'PlingPlong'
    if (this._plingPlang(n)) return 'PlingPlang'
    if (this._pling(n)) return 'Pling'
    if (this._plang(n)) return 'Plang'
    if (this._plong(n)) return 'Plong'
    if (typeof n != "number") return 'Attempt Failed: Please insert a number'
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

  _plangPlong(n){
    return n % 5 == 0 && n % 7 == 0
  }
}
