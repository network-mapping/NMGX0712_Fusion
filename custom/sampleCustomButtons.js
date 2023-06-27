// This is a sample code to add on-app buttons and otherr HTML elements to replace the built-in toolbox 
//  and standard GUI. This script should be coupled with the sampleCustomButtons.css file
// To activate this script use the URL parameters: '&script=sampleCustomButtons.js&css=sampleCustomButtons'

var distanceAction = `analysis.openAnalysisToolURL('./Tools/DistanceMeasurement/distanceMeasurement.html','distance',false)`
var areaAction = `analysis.openAnalysisToolURL('./Tools/AreaMeasurement/areaMeasurement.html','area',false)`
$("#applicationDiv").append (`
<button id="myButton1" class="ButtonRound button1 link" onclick="${distanceAction}">Distance</button>    
<button id="myButton2" class="ButtonRound button2 link" onclick="${areaAction}">area</button>    
`);
$("#navigationButtons").hide()