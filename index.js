function produceDrivingRange(range){
  return function(start, end){
    let diff = Math.abs(parseInt(end)-parseInt(start)) 
    if( diff <= range ){
      return `within range by ${diff}`
    } else {
      return `${diff - range} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare * percentage;
  }
}

function createDriver(){
  let driverId = 0
  return class{
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}