module.exports = function mostProfitableDepartment(salesData){
      var mapObject = {};
      var name = 0
      for (var i=0; i<salesData.length;i++){
        var dep = salesData[i].department
        if(mapObject[dep] === undefined){
          mapObject[dep] = 0
           }
        else {
        mapObject[dep] += salesData[i].sales
        }
    }
      var mostProfDep = ""
      var mostProfSale = 0;
      for( var dep in mapObject){
        if(mapObject[dep] > mostProfSale){
          mostProfDep = dep
          mostProfSale = mapObject[dep]
           }
      }
      return mostProfDep
    }