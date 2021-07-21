module.exports = function findItemsOver20(items){
var list=[]
for(var i=0;i<items.length;i++){
if(items[i].qty >20){
  list.push(items[i])
}
}
return list
}

