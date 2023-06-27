var analysis={state:{},initState:function(){try{analysis.state={queryOn:!1,sunOn:!1,shadowOn:!1,contourOn:!1,slopeOn:!1,toolLastDiv:null,toolURLOpened:!1,tools:[{id:"distanceBtn",name:""+Lang.analysis.distance,title:""+Lang.analysis.distanceMeasurement,icon:"./images/icons/distance.png",action:`analysis.openAnalysisToolURL('./Tools/DistanceMeasurement/distanceMeasurement.html','${Lang.analysis.distanceMeasurement}',true)`},{id:"areaBtn",name:""+Lang.analysis.area,title:""+Lang.analysis.areaMeasurement,icon:"./images/icons/area.png",action:`analysis.openAnalysisToolURL('./Tools/AreaMeasurement/AreaMeasurement.html','${Lang.analysis.areaMeasurement}',true)`},{id:"volumeBtn",name:""+Lang.analysis.volume,title:""+Lang.analysis.volumeMeasurement,icon:"./images/icons/volume.png",action:`analysis.openAnalysisToolURL('./Tools/Volume/Volume.html','${Lang.analysis.volumeMeasurement}',true)`},{id:"profileBtn",name:""+Lang.analysis.profile,title:""+Lang.analysis.terrainProfile,icon:"./images/icons/profile.png",action:`analysis.openAnalysisToolURL('./Tools/TerrainProfile/TerrainProfile.html','${Lang.analysis.terrainProfile}',true)`},{id:"viewshedBtn",name:""+Lang.analysis.viewshed,title:""+Lang.analysis.viewshed,icon:"./images/icons/viewshed.png",url:"",action:"analysis.startViewshed()"},{id:"swipeCompareBtn",name:""+Lang.analysis.compare,title:""+Lang.analysis.swipeComparison,icon:"./images/icons/swipeCompare.png",action:`analysis.openAnalysisToolURL('./Tools/ImageComparison/MeshComparisonPopup.html','${Lang.analysis.swipeComparison}',true)`}],toolsCount:0,tabs:3,inViewshedEditing:!1,last:null}}catch(err){application.errorHandling(err.message,0)}},init:function(){try{analysis.initState(),analysis.render(),analysis.state.tools.forEach(function(item){analysis.addAnalysisTool(item)}),analysis.showTab(0);var hour=new Date(SGWorld.DateTime.FixedLocalTime).getHours();$("#timeSlider").val(hour),analysis.setTime(hour),SGWorld.DateTime.DisplaySun&&this.setSun(),SGWorld.AttachEvent("OnObjectAction",analysis.OnObjectAction)}catch(err){application.errorHandling(err.message,0)}},render:function(){try{$("#queryPanelDiv").html(` <table  class="panelTable panelHeader s9 tdPadding5"> 
                <tr >
                    <td >
                        <span class="s12b i18n">${Lang.analysis.query}</span>
                    </td>
                    <td class="link " colspan="2" align="right" onclick="toolbox.closeAllTools('query',true)"><img src="images/icons/close.png"></td>
                </tr>
            </table>
            <table  class="w100 s9 tdPadding5">             
                <tr>
                    <td  valign="top">
                        <div id="queryClickResult" class="queryClickResult s9"></div>
                        <div id="queryHoverResult" class="queryHoverResult w100 s9"></div>
                    </td>
                </tr></table>`),$("#analysisPanelDiv").html(`
        <div id="analysisMain" class="analysisPanel">
            <table  class="tabsTable panelHeader s9" > 
                <tr>
                    <td >
                        <button id="analysisTabButton0" class="tab tabSelected i18n" onclick="analysis.showTab(0)">${Lang.analysis.tools}</button>
                        <button id="analysisTabButton1" class="tab  i18n" onclick="analysis.showTab(1)">${Lang.analysis.environment}</button>
                        <button id="analysisTabButton2" class="tab  i18n" onclick="analysis.showTab(2)">${Lang.analysis.maps}</button>
                    </td>
                    <td class="link " colspan="2" align="right" onclick="toolbox.closeAllTools('analysis',true)"><img src="images/icons/close.png"></td>
                </tr>
            </table>
            
            <table id="analysisTbl0" class="panelTable s9 spacerAbove"> 
                    <tr><td>
                    <div id="analysisToolsDiv">
                    </div>
                    </td></tr>
            </table>

            <table id="analysisTbl1" class="panelTable s9 spacerAbove" > 
                <tr ><td >
                            <button id="sunBtn" class="ButtonRoundOutline ButtonLarge  i18n" onclick="analysis.setSun()" title="${Lang.analysis.turnSunlight}"><img src="./images/icons/Sun.png"><br><span>${Lang.analysis.light}</span></button>
                            <button id="shadowBtn" class="ButtonRoundOutline ButtonLarge  i18n" onclick="analysis.setShadow()" title="${Lang.analysis.turnShadow}"><img src="./images/icons/Shadow.png"><br><span>${Lang.analysis.shadow}</span></button>
                </td></tr>
                <tr><td >
                    <table  class="w100 tdPadding5 " >
                        <tr>
                        <td class="timeSlider">
                            <input id="timeSlider"  oninput="analysis.setTime(this.value)" type="range" min="0" max="23">
                        </td>
                        <td> 
                            <span id="timeSliderText">0:00</span>h
                            </td>
                        </tr>
                    </table>
                </td></tr>
            </table>

            <table id="analysisTbl2" class="panelTable s9 spacerAbove" > 
            <tr ><td >
                    <button id="contourBtn" class="ButtonRoundOutline ButtonLarge i18n" onclick="analysis.setContour()" title="${Lang.analysis.showContour}"><img src="./images/icons/contour.png"><br><span>${Lang.analysis.contour}</span></button>
                    <button id="slopeBtn" class="ButtonRoundOutline ButtonLarge i18n" onclick="analysis.setSlope()" title="${Lang.analysis.showSlope}"><img src="./images/icons/slope.png"><br><span>${Lang.analysis.slope}</span></button>
                </td></tr>
            </table>
        </div>
         <!-- Analysis level 2 -->
         <div id="analysisTool" class="w100 " style="display:none">
            <table id="analysisTbl3" class="w100 " >
                <tr class='panelHeader'>
                    <td><img id="analysisBackButton" src="images/icons/backArrow.png" class="link" onclick="analysis.closeAnalysisTool()" /></td>
                    <td><span class="s12b" id="analysisToolCaption"></span></td>
                    <td class="link " colspan="2" align="right" onclick="toolbox.closeAllTools('analysis',true)"><img src="images/icons/close.png"></td>
                </tr>
                <tr><td colspan="3">
                         <div id="analysisToolWrapper"></div>  
                </td></tr>
            </table>            
        </div>
        <!-- Analysis external tool (URL) -->
        <div id="analysisToolURL" class="w100 " style="display:none">
            <iframe id="analysisToolIframe" class="analysisTooliframe" src=""></iframe>
        </div>`)}catch(err){application.errorHandling(err.message,0)}},showTab:function(tabIndex){try{for(var i=0;i<analysis.state.tabs;i++)i==tabIndex?($("#analysisTbl"+i).show(),$("#analysisTbl"+i).css("opacity","1"),$("#analysisTabButton"+i).addClass("tabSelected")):($("#analysisTbl"+i).hide(),$("#analysisTbl"+i).css("opacity","0"),$("#analysisTabButton"+i).removeClass("tabSelected"))}catch(err){application.errorHandling(err.message,0)}},addAnalysisTool:function(item){try{analysis.state.toolsCount++;var button=$(`<button id="${item.id}" class="ButtonRoundOutline inlineBlock ButtonLarge i18n" onclick="${item.action}" title="${item.title}"><img src="${item.icon}"><br><span>${item.name}</span></button>`);$("#analysisToolsDiv").append(button),toolbox.state.panels.analysis.maxHeight=Math.max(toolbox.state.panels.analysis.maxHeight,75+Math.ceil(analysis.state.toolsCount/3)*$(".ButtonLarge").outerHeight(!0)),toolbox.resizePanel()}catch(err){application.errorHandling(err.message,0)}},openAnalysisTool:function(divName,title,backButton){try{toolbox.selectTool(2,!1),analysis.closeViewshed(),!1===backButton?$("#analysisBackButton").hide():$("#analysisBackButton").show(),$("#analysisMain").hide(),$("#analysisTool").show(),null!=this.state.toolLastDiv&&this.detachLastTool();var divElement=$("#"+divName);$("#analysisToolWrapper").append(divElement),divElement.show(),$("#analysisToolCaption").text(title),this.state.toolLastDiv=divName}catch(err){application.errorHandling(err.message,0)}},closeAnalysisTool:function(){try{$("#analysisMain").show(),$("#analysisTool").hide(),analysis.closeViewshed(),this.state.toolURLOpened&&($("#analysisToolIframe")[0].contentWindow.dispatchEvent(new Event("unload")),$("#analysisToolIframe").attr("src",""),this.state.toolURLOpened=!1),this.detachLastTool(),projectTree.refreshMyData()}catch(err){application.errorHandling(err.message,0)}},detachLastTool:function(){try{var dettachedChild=$("#analysisToolWrapper").children(":first-child").detach();dettachedChild.hide(),$(document.body).append(dettachedChild),this.state.toolLastDiv=null}catch(err){application.errorHandling(err.message,0)}},openAnalysisToolURL:function(url,toolName,backButton){try{this.openAnalysisTool("analysisToolURL",toolName,backButton);url=url+"?lang="+Lang.code+"&root="+projectTree.getMyDataGroup();this.state.toolURLOpened&&$("#analysisToolIframe")[0].contentWindow.dispatchEvent(new Event("unload")),$("#analysisToolIframe").attr("src",url),this.state.toolURLOpened=!0}catch(err){application.errorHandling(err.message,0)}},setSun:function(){try{this.state.sunOn=!this.state.sunOn,services.highlightButton("sunBtn",this.state.sunOn),this.state.sunOn||this.state.shadowOn&&this.setShadow(),SGWorld.DateTime.DisplaySun=this.state.sunOn}catch(err){application.errorHandling(err.message,0)}},setShadow:function(){try{this.state.shadowOn=!this.state.shadowOn,application.execute(2118,0),services.highlightButton("shadowBtn",this.state.shadowOn),!this.state.shadowOn||this.state.sunOn||this.setSun()}catch(err){application.errorHandling(err.message,0)}},startQuery:function(){try{this.state.queryOn=!0,$("#queryClickResult").html(""),$("#queryHoverResult").html(""),application.execute(1023,0)}catch(err){application.errorHandling(err.message,0)}},stopQuery:function(){try{this.state.queryOn=!1,application.isCommandChecked(1023,0)&&application.execute(1023,0)}catch(err){application.errorHandling(err.message,0)}},showQueryMessage:function(message){try{var xmlString=(xmlString=message.substring(message.indexOf("<"))).substring(0,xmlString.lastIndexOf(">")+1),xml=(new DOMParser).parseFromString(xmlString,"text/xml"),xslFile=services.abspath()+"/TerraExplorerApp.Emscripten.Resources/ObjectQueryInfo.xsl",xsl=services.loadXMLDoc(xslFile),html=services.convertXmlToHtml(xml,xsl);$("#queryClickResult").html(html),$("#queryClickResult").html(analysis.translateString($("#queryClickResult").html()))}catch(err){application.errorHandling(err.message,0)}},showQueryHover:function(message){try{0<=message.indexOf("N/A")&&(message=""),message=services.clearHTMLString(message),message=analysis.translateString(message),$("#queryHoverResult").html(message)}catch(err){application.errorHandling(err.message,0)}},translateString:function(str){try{return Object.keys(Lang.analysisReplace).forEach(element=>{str=str.replace(new RegExp(element,"g"),Lang.analysisReplace[element])}),str}catch(err){application.errorHandling(err.message,0)}},setContour:function(){try{this.state.contourOn=!this.state.contourOn,services.highlightButton("contourBtn",this.state.contourOn),this.state.contourOn&&this.state.slopeOn&&this.setSlope(),application.execute(2216,0)}catch(err){application.errorHandling(err.message,0)}},setSlope:function(){try{this.state.slopeOn=!this.state.slopeOn,services.highlightButton("slopeBtn",this.state.slopeOn),this.state.slopeOn&&this.state.contourOn&&this.setContour(),application.execute(2217,0)}catch(err){application.errorHandling(err.message,0)}},setTime:function(sliderVal){try{var dateTime=new Date;dateTime.setHours(sliderVal,0,0),SGWorld.DateTime.FixedLocalTime=dateTime,$("#timeSliderText").text(Math.floor(sliderVal).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})+":00")}catch(err){application.errorHandling(err.message,0)}},startViewshed:function(){try{analysis.state.inViewshedEditing?analysis.closeViewshed():(this.state.inViewshedEditing=!0,application.errorHandling(Lang.analysis.viewshedAdd,2),application.execute(2117,0),services.highlightButton("viewshedBtn",!0))}catch(err){application.errorHandling(err.message,0)}},closeViewshed:function(){try{analysis.state.inViewshedEditing&&(SGWorld.Window.SetInputMode(0),analysis.state.inViewshedEditing=!1,services.highlightButton("viewshedBtn",!1))}catch(err){application.errorHandling(err.message,0)}},OnObjectAction:function(ObjectID,Action){try{analysis.state.inViewshedEditing&&(31==Action.Code&&(SGWorld.ProjectTree.SetParent(ObjectID,projectTree.getMyDataGroup()),projectTree.openTool(ObjectID,Lang.projectTree.edit,0,"projectTree.state.style"),projectTree.setTreeState(2)),15!=Action.Code&&31!=Action.Code||analysis.closeViewshed())}catch(err){application.errorHandling(err.message,0)}},dummy:null};