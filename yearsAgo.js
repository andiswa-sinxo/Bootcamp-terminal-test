module.exports = function yearsAgo(year){
var currentYear = new Date();
  var years = currentYear.getFullYear() - year;
  return years
}