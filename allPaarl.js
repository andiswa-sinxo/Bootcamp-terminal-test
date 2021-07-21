module.exports = function allPaarl(regNo){
    var reg = regNo.split(', ');
    var registration =[]
    for(var i= 0; i<reg.length;i++){
      if(reg[i].startsWith("CJ")){
        registration.push(reg[i])
      
      }
  }
    return registration
  }