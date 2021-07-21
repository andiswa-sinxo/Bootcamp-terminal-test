module.exports = function countAllFromTown(regNo, loc){
        var reg = regNo.split(',');
      var registration = []
      for(var i= 0; i<reg.length;i++){
        if(reg[i].startsWith('CL')){
          var s = reg[i].trim()
            registration.push(reg[i]);
        }  
      }
      
        return registration.length;
    }
    
    