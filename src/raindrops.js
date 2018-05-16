class Raindrops {
  raindrops(n){
    if (this._hasFactorOfFiveAndSeven(n)) return 'PlangPlong'
    if (this._hasFactorOfThreeAndSeven(n)) return 'PlingPlong'
    if (this._hasFactorOfThreeAndFive(n)) return 'PlingPlang'
    if (this._hasFactorOfThree(n)) return 'Pling'
    if (this._hasFactorOfFive(n)) return 'Plang'
    if (this._hasFactorOfSeven(n)) return 'Plong'
    if (typeof n != "number") return 'Attempt Failed: Please insert a number'
    return n
  }

  _hasFactorOfThree(n){
    return n % 3 == 0
  }

  _hasFactorOfFive(n){
    return n % 5 == 0
  }

  _hasFactorOfSeven(n){
    return n % 7 == 0
  }

  _hasFactorOfThreeAndFive(n){
    return n % 3 == 0 && n % 5 == 0
  }

  _hasFactorOfThreeAndSeven(n){
    return n % 3 == 0 && n % 7 == 0
  }

  _hasFactorOfFiveAndSeven(n){
    return n % 5 == 0 && n % 7 == 0
  }
}
