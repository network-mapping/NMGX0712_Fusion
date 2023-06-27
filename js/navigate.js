var navigate={state:{},initState:function(){try{navigate.state={navigationModeExecute:[1052,1053,1054],isUndergroun:!1,isCollistionDetection:!1,isSlideMode:!1,isPresentationLoaded:!1,presentationID:null,homePosition:null,toolLastDiv:null,tabs:2,toolURLOpened:!1,toolsCount:0,tools:[{id:"homeBtn",name:""+Lang.navigate.home,title:""+Lang.navigate.flyHome,icon:"./images/icons/home.png",action:"navigate.home()"},{id:"rotateBtn",name:""+Lang.navigate.rotate,title:""+Lang.navigate.flyAround,icon:"./images/icons/flyAround.png",action:"navigate.flyAround()"},{id:"addLocationBtn",name:""+Lang.navigate.addLocation,title:""+Lang.navigate.addNewLocation,icon:"./images/icons/addLocation.png",action:"navigate.createAndEditLocation()"},{id:"stopBtn",name:""+Lang.navigate.stop,title:""+Lang.navigate.stopFlight,icon:"./images/icons/stopFlight.png",action:"navigate.stop()"}],last:null}}catch(err){application.errorHandling(err.message,0)}},init:function(){try{navigate.initState(),navigate.render(),navigate.state.tools.forEach(function(item){navigate.addNavigateTool(item)}),navigate.showTab(0),$("#presentationPopup").dialog({autoOpen:!1,width:400,height:154,resizable:!1,position:{my:"center",at:"top"},padding:"-10px",close:function(){navigate.showHidePresentation(!1)},dialogClass:"presentationPopup dialog"}),this.state.homePosition=SGWorld.Navigate.GetPosition(3);var locationArray,presentationID,autoPlay,startPositionStr=services.GetParamValue("position",""),startPresentationStr=(""!=startPositionStr&&((locationArray=startPositionStr.split(","))[2]||(locationArray[2]=500),locationArray[3]||(locationArray[3]=0),locationArray[4]||(locationArray[4]=-60),locationArray[5]||(locationArray[5]="Start Position"),locationArray[6]||(locationArray[6]=0),locationArray[5]=decodeURIComponent(locationArray[5]),this.state.homePosition=this.createLocation(locationArray,!0).Position,SGWorld.Navigate.FlyTo(this.state.homePosition,14)),decodeURI(services.GetParamValue("presentation","")));""!=startPresentationStr&&""!=(presentationID=SGWorld.ProjectTree.FindItem(startPresentationStr))&&(autoPlay=services.GetParamValue("presentationPlay",""),navigate.PlayObject(presentationID,"1"==autoPlay)),$("#fiedOfViewSlider").val(53)}catch(err){application.errorHandling(err.message,0)}},render:function(tabIndex){try{$("#navigatePanelDiv").html(` 
            <div id="navigateMain" class="navigatePanel">
            <table  class="tabsTable s9" > 
                <tr><td >
                    <button id="navigateTabButton0" class="tab tabSelected i18n" onclick="navigate.showTab(0)">${Lang.navigate.tools}</button>
                    <button id="navigateTabButton1" class="tab  i18n" onclick="navigate.showTab(1)">${Lang.navigate.modes}</button>
                </td>
                <td class="link s18" colspan="2" align="right" onclick="toolbox.closeAllTools('navigate',true)"><img src="images/icons/close.png"></td>
                </tr>
            </table>
            <table  class="panelTable s9 spacerAbove" id="navigateTbl0" > 
                <tr> <td >
                    <div id="navigateToolsDiv">
                </td></tr>
                <tr><td  >
                    <div class="spacerVertical"></div>
                    <span class="s9 i18n">${Lang.navigate.fieldOfView}</span>
                </td> </tr>                    
                <tr> <td >
                        <table class="w100 vAlignMiddel" >
                            <td style="width:70%" align="right">       
                            <input type="range" id="fiedOfViewSlider" oninput="navigate.setFieldOfView (this.value)" min="30" max="120" >
                            </td>
                            <td>
                                <span id="fiedOfViewText">53</span>
                                <span>°</span> 
                            </td>
                            <td>
                                <button id="resetFOV" class="ButtonRoundOutline i18n" onclick="navigate.resetFOV()">${Lang.navigate.reset} </button>
                            </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <table  class="panelTable s9 rowSpacer" id="navigateTbl1" > 
                <tr> <td >
                    <span class="s9 i18n">${Lang.navigate.renderModes}</span>
                </td> </tr>                    
                <tr> <td >
                        <button id="navigateMode0" class="ButtonRoundOutline ButtonRoundLeft ButtonRoundOutlineChecked i18n" onclick="navigate.navigateMode(0)" title="${Lang.navigate.threeDModel}">${Lang.navigate.threeD}</button>
                        <button id="navigateMode1" class="ButtonRoundOutline ButtonRoundMiddle i18n" onclick="navigate.navigateMode(1)" title="${Lang.navigate.twoDMode}">${Lang.navigate.towD}</button>
                        <button id="navigateMode2" class="ButtonRoundOutline ButtonRoundRight i18n" onclick="navigate.navigateMode(2)" title="${Lang.navigate.twoDNorthMode}">${Lang.navigate.twoDNorth}</button>
                </td></tr>
                <tr ><td >
                    <div class="spacerAbove"></div>
                    <span class="s9 i18n ">${Lang.navigate.navigationModes}</span>
                </td> </tr>                    
                <tr> <td >
                    <button id="undergroundBtn" class="ButtonRoundOutline ButtonLarge i18n" onclick="navigate.undergroudMode()" title="${Lang.navigate.undergroundMode}"><img src="images/icons/underground.png"> <br><span>${Lang.navigate.undergroundModeBtn}</span></button>
                    <button id="collisionBtn" class="ButtonRoundOutline ButtonLarge i18n" onclick="navigate.collisionDetection()" title="${Lang.navigate.collisionDetection}"><img src="images/icons/collisionDetection.png"><br><span>${Lang.navigate.cllisionDetectionBtn}</span></button>
                    <button id="slideModeBtn" class="ButtonRoundOutline ButtonLarge i18n" onclick="navigate.slideMode()" title="${Lang.navigate.slideMode}"><img src="images/icons/slideMode.png"><br><span>${Lang.navigate.slideModeBtn}</span></button>
                </td></tr>
            </table>

            <div class="bottomBlueBar link2" onclick="toolbox.selectTool(1,true);projectTree.setTreeState(0);">
                <span class="s9inv i18n link">${Lang.navigate.showLocations}</span>
                <img src="images/icons/arrowRightSmall.png">
            </div>
            </div>
            <!-- Navigate level 2 -->
            <div id="navigateTool" class="w100 h100" style="display:none">
            <table id="navigateTbl3" class="w100 " >
                <tr>
                    <td>                
                        <img src="images/icons/backArrow.png" class="link" onclick="navigate.closeNavigateTool()" />
                    </td>
                    <td> 
                        <span class="s12b" id="navigateToolCaption"></span>
                    </td>
                    <td class="link s18" colspan="2" align="right" onclick="toolbox.closeAllTools('navigate',true)"><img src="images/icons/close.png"></td>
                </tr>
                <tr><td colspan="3">
                        <div id="navigationToolWrapper"></div>  <!--navigation tools will be attached to this wrapper -->
                </td></tr>
            </table>            
            </div>   
            <!-- Navigate external tool (URL) -->
        <div id="navigateToolURL" class="w100 " style="display:none">
            <iframe id="navigateToolIframe" class="navigateTooliframe" src=""></iframe>
        </div>`),$("body").append(`
        <div id="presentationPopup"  title="" style="display:none; padding:0px">
            <iframe type="text/html" id="presentationIframe" class="presentationContent" src=""></iframe>
        </div>  `)}catch(err){application.errorHandling(err.message,0)}},show:function(){},showTab:function(tabIndex){try{for(var i=0;i<navigate.state.tabs;i++)i==tabIndex?($("#navigateTbl"+i).show(),$("#navigateTbl"+i).css("opacity","1"),$("#navigateTabButton"+i).addClass("tabSelected")):($("#navigateTbl"+i).hide(),$("#navigateTbl"+i).css("opacity","0"),$("#navigateTabButton"+i).removeClass("tabSelected"))}catch(err){application.errorHandling(err.message,0)}},addNavigateTool:function(item){try{navigate.state.toolsCount++;var button=$(`<button id="${item.id}" class="ButtonRoundOutline inlineBlock ButtonLarge i18n" onclick="${item.action}" title="${item.title}"><img src="${item.icon}"><br><span>${item.name}</span></button>`);$("#navigateToolsDiv").append(button),toolbox.state.panels.navigate.maxHeight=Math.max(toolbox.state.panels.navigate.maxHeight,200+Math.ceil(navigate.state.toolsCount/3)*$(".ButtonLarge").outerHeight(!0)),toolbox.resizePanel()}catch(err){application.errorHandling(err.message,0)}},openNavigateTool:function(divName,title){try{$("#navigateMain").hide(),$("#navigateTool").show(),null!=this.state.toolLastDiv&&this.detachLastTool();var divElement=$("#"+divName);$("#navigationToolWrapper").append(divElement),divElement.show(),$("#navigateToolCaption").text(title),this.state.toolLastDiv=divName}catch(err){application.errorHandling(err.message,0)}},closeNavigateTool:function(){try{$("#navigateMain").show(),$("#navigateTool").hide(),this.state.toolURLOpened&&($("#navigateToolIframe")[0].contentWindow.dispatchEvent(new Event("unload")),$("#navigateToolIframe").attr("src",""),this.state.toolURLOpened=!1),this.detachLastTool()}catch(err){application.errorHandling(err.message,0)}},detachLastTool:function(){try{var dettachedChild=$("#navigationToolWrapper").children(":first-child").detach();dettachedChild.hide(),$(document.body).append(dettachedChild),this.state.toolLastDiv=null}catch(err){application.errorHandling(err.message,0)}},openNavigateToolURL:function(url,toolName){try{this.openNavigateTool("navigateToolURL",toolName);url=url+"?lang="+Lang.code+"&root="+projectTree.getMyDataGroup();this.state.toolURLOpened&&$("#navigateToolIframe")[0].contentWindow.dispatchEvent(new Event("unload")),$("#navigateToolIframe").attr("src",url),this.state.toolURLOpened=!0}catch(err){application.errorHandling(err.message,0)}},home:function(){try{SGWorld.Navigate.FlyTo(this.state.homePosition,0)}catch(err){application.errorHandling(err.message,0)}},zoom:function(direction){try{1==direction?SGWorld.Navigate.ZoomIn():SGWorld.Navigate.ZoomOut()}catch(err){application.errorHandling(err.message,0)}},north:function(){try{application.execute(1056,0)}catch(err){application.errorHandling(err.message,0)}},navigateMode:function(mode){try{for(i=0;i<3;i++)services.highlightButton("navigateMode"+i,!1);services.highlightButton("navigateMode"+mode,!0),application.execute(this.state.navigationModeExecute[mode],0)}catch(err){application.errorHandling(err.message,0)}},undergroudMode:function(){try{this.isUndergroun=!this.isUndergroun,services.highlightButton("undergroundBtn",this.isUndergroun),application.execute(1027,0)}catch(err){application.errorHandling(err.message,0)}},collisionDetection:function(){try{this.isCollistionDetection=!this.isCollistionDetection,services.highlightButton("collisionBtn",this.isCollistionDetection),application.execute(1140,0)}catch(err){application.errorHandling(err.message,0)}},slideMode:function(){try{this.isSlideMode=!this.isSlideMode,services.highlightButton("slideModeBtn",this.isSlideMode),application.execute(1050,0)}catch(err){application.errorHandling(err.message,0)}},flyAround:function(){try{application.execute(1057,0)}catch(err){application.errorHandling(err.message,0)}},flyToCoord:function(x,y){try{var camera=SGWorld.Navigate.GetPosition(0),pos=SGWorld.Creator.CreatePosition(x,y,0,0,camera.Yaw,-75,0,1e3);SGWorld.Navigate.FlyTo(pos,0)}catch(err){application.errorHandling(err.message,0)}},FlyToFeatureDataSourceFeatureID:function(layerID,dataSourceID){try{var featureID=SGWorld.Creator.GetObject(layerID).FeatureGroups.Item(0).ExecuteGetDataSourceFeatureIdQuery(dataSourceID).ID;SGWorld.Navigate.FlyTo(featureID,0)}catch(err){application.errorHandling(err.message,0)}},createAndEditLocation:function(){try{var location=navigate.createLocation(null,!1);projectTree.openTool(location.ID,""+Lang.navigate.addNewLocation,0,"projectTree.state.style"),1==projectTree.state.treeState&&projectTree.setTreeState(0)}catch(err){application.errorHandling(err.message,0)}},createLocation:function(locationArray,fromURL){try{var group=fromURL?SGWorld.ProjectTree.RootID:projectTree.getMyDataGroup(),actionCode=0;if(null!=locationArray)centerScreen=SGWorld.Creator.CreatePosition(locationArray[0],locationArray[1],0,4,locationArray[3],locationArray[4],0,locationArray[2]),name=locationArray[5],actionCode=locationArray[6];else{var name=""+Lang.navigate.myLocation,centerScreen=SGWorld.Window.PixelToWorld(SGWorld.Window.Rect.Width/2,SGWorld.Window.Rect.Height/2,-1153).Position,camera=SGWorld.Navigate.GetPosition(3);if(0==centerScreen.X&&0==centerScreen.Y)return null;camera=camera.AimTo(centerScreen),centerScreen.Distance=centerScreen.DistanceTo(camera),centerScreen.Pitch=camera.Pitch,centerScreen.Yaw=camera.Yaw}var location=SGWorld.Creator.CreateLocation(centerScreen,group,name);return location.Action.Code=actionCode,location}catch(err){application.errorHandling(err.message,0)}},shareLocation(itemID){try{var object=SGWorld.Creator.GetObject(itemID),URL=document.location.href,message=(-1!=URL.indexOf("&")&&(URL=URL.substring(0,URL.indexOf("&"))),`<table class='w100 h100 s9 vAlignMiddel'>                        <tr> <td class='w100'>                                <input type='text' class='w100' id='sharedLocationText' value='${URL+=`&position=${object.Position.X},${object.Position.Y},${object.Position.Distance},${object.Position.Yaw},${object.Position.Pitch},${object.TreeItem.Name},`+object.Action.Code}'/></td>                            <td>                                <button id='sharedLocationBtn' class='ButtonRoundOutline ButtonLarge i18n' onclick='services.copyToClipboard($("#sharedLocationText").val());application.closePopupDialog();'><img src='images/icons/link.png'><br><span>${Lang.navigate.copyLink}</span></button></td>                        </tr></table>`);application.openPopupDialog(message,""+Lang.navigate.shareLocation,550,140,-1)}catch(err){application.errorHandling(err.message,0)}},copyShareLink:function(){try{$("body").append($temp),$("#sharedLocationText").select(),document.execCommand("copy"),$("#shareLocation").dialog("close")}catch(err){application.errorHandling(err.message,0)}},stop:function(){try{SGWorld.Navigate.Stop(),navigate.showHidePresentation(!1)}catch(err){application.errorHandling(err.message,0)}},setFieldOfView:function(sliderVal){try{var fov=sliderVal;SGWorld.Navigate.FieldOfView=fov,$("#fiedOfViewText").text(fov)}catch(err){application.errorHandling(err.message,0)}},resetFOV:function(){try{$("#fiedOfViewSlider").val(53),this.setFieldOfView(53)}catch(err){application.errorHandling(err.message,0)}},showHidePresentation:function(show){try{show?(navigate.state.isPresentationLoaded||(navigate.state.isPresentationLoaded=!0,$("#presentationIframe").attr("src","./tools/presentation/PresentationControlPanel.html?lang="+Lang.code)),$("#presentationPopup").dialog("open")):null!=navigate.state.presentationID&&(SGWorld.Creator.GetObject(navigate.state.presentationID).Stop(),$("#presentationPopup").dialog("close"),navigate.state.presentationID=null)}catch(err){application.errorHandling(err.message,0)}},setPresentationTitle:function(title){try{$("#presentationPopup").dialog("option","title",title)}catch(err){application.errorHandling(err.message,0)}},PlayObject:function(itemID,autoplay){var presentationObj,object=null,objectType=-1,action=-1;try{objectType=(object=SGWorld.Creator.GetObject(itemID)).ObjectType,action=object.Action.Code}catch{}try{SGWorld.ProjectTree.SelectItem(itemID,0,0),34==objectType?(navigate.state.presentationID=itemID,autoplay&&(presentationObj=SGWorld.Creator.GetObject(navigate.state.presentationID),setTimeout(()=>{presentationObj.Play()},3e3)),navigate.showHidePresentation(!0)):-1!=action?SGWorld.Navigate.FlyTo(itemID,object.Action.Code):SGWorld.Navigate.FlyTo(itemID)}catch(err){application.errorHandling(err.message,0)}},dummy:null};