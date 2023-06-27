// This script file is automatically executed when a project is loaded. 
// To add a script that runs on selected cases, you should create another JavaScript file under this folder and use the  parameter '&script=[FILENAME]' in the URL address line

// Sample how to rotate the camera when the project is loaded
// SGWorld.Command.Execute (1057,0);

// Sample how to add custom tool to the analysis tool's tab - tool is opened in the Analysis panel
// analysis.addAnalysisTool ( {id:'myToolBtnID1',name:'My Tool',title:'My analysis tool',icon:'./custom/tools/MyAnalysisTool/myTool.png',action:`analysis.openAnalysisToolURL('./custom/tools/MyAnalysisTool/MyTool.html','My tool',true)`},);
// Sample how to add custom tool to the analysis tool's tab - tool is opened in a popup window
// analysis.addAnalysisTool ( {id:'myToolBtnID2',name:'popup tool',title:'My analysis tool',icon:'./custom/tools/MyAnalysisTool/myTool.png',action:`application.openPopupDialogURL ('./custom/tools/MyAnalysisTool/MyTool.html','my popup tool',500,500,-1);`},);
// Sample how to add custom tool to the navigate tool's tab - tool is opened in the Navigate panel
// navigate.addNavigateTool ( {id:'myToolBtnID3',name:'My Tool',title:'My navigate tool',icon:'./custom/tools/MyNavigateTool/myTool.png',action:`navigate.openNavigateToolURL('./custom/tools/MyNavigateTool/MyTool.html','My tool')`},);

console.log("QWE startupScript.js:{    " + '-'.repeat(80));

let xSGWorldId = document.getElementById('tef');
console.log('QWE startupScript.js: xSGWorldId ' + xSGWorldId);

let xSGWorld = document.getElementById('tef').contentWindow.SGWorld;
console.log('QWE startupScript.js: xSGWorld ' + xSGWorld);

if (xSGWorld) {
	console.log('QWE startupScript.js: Run xSGWorld.Command.Execute (1057,0)...');
	xSGWorld.Command.Execute (1057,0);
} else {
	console.log('QWE startupScript.js: xSGWorld is null. Command will not run');
}

if (SGWorld) {
	console.log('QWE startupScript.js: Run SGWorld.Command.Execute (1057,0)...');
	SGWorld.Command.Execute (1057,0);
	SGWorld.SGServer.GetVersion();
} else {
	console.log('QWE startupScript.js: SGWorld is null. Command will not run');
}

if (typeof TerraExplorer !== 'undefined') {
	console.log('QWE startupScript.js: TerraExplorer is defined, ' + typeof TerraExplorer);
} else {
	console.log('QWE startupScript.js: TerraExplorer is undefined');
}

if (typeof ICommand74 !== 'undefined') {
	console.log('QWE startupScript.js: ICommand74 is defined, ' + typeof ICommand74);
} else {
	console.log('QWE startupScript.js: ICommand74 is undefined');
}


ICommand74

console.log('QWE startupScript.js:}');

