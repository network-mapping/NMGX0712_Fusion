var settings={state:{quality:null,units:null,unitString:"",unitString2:"",altitudeType:null,altitudeTypeString:"",unitRatio:1,unitRatio2:1e3,showNavigationControls:!0,showCenterSign:!1,showStatusBar:!0,showMGRS:!1,globalShadowColor:null,isFrenchLanguage:!1,tabs:2,last:null},init:function(){try{settings.render(),this.showTab(0),this.getRecentProjects($("#recentProjectsDiv")),SGWorld.SetParam(8013,1),SGWorld.SetOptionParam("UseTerrainFadeIfAvailable",0),SGWorld.SetOptionParam("LatLongCoordinates",0),SGWorld.SetOptionParam("ZoomMode",1),settings.state.isFrenchLanguage="fr"===navigator.language.substring(0,2),$("#showNavigationControlsID").prop("checked",settings.state.showNavigationControls),$("#showCenterSignID").prop("checked",settings.state.showCenterSign),$("#showStatusBarID").prop("checked",settings.state.showStatusBar),settings.state.showNavigationControls?$("#navigationButtons").show():$("#navigationButtons").hide(),settings.state.showCenterSign?$("#centerSignID").show():$("#centerSignID").hide(),settings.state.showStatusBar?$("#statusBarID").show():$("#statusBarID").hide(),settings.state.quality=SGWorld.GetOptionParam("TerrainModelQuality"),$("#qualityID").val(settings.state.quality),settings.state.units=SGWorld.GetOptionParam("AltitudeAndDistance"),$("#unitsID").val(settings.state.units),settings.setUnits(),settings.state.altitudeType=SGWorld.GetOptionParam("AltitudeType"),$("#altitudeTypeID").val(settings.state.altitudeType),settings.state.altitudeTypeString=0==settings.state.altitudeType?Lang.settings.AGL:"",settings.state.showMGRS=SGWorld.GetOptionParam("ShowMGRS"),$("#showMGRSID").prop("checked",settings.state.showMGRS),this.showMGRS(),settings.initPostEffects();var version=SGWorld.Version.Major+"."+SGWorld.Version.Minor+"."+SGWorld.Version.Build+"."+SGWorld.Version.Freeze;$("#TerraExplorerVersion").text(version),settings.state.globalShadowColor=SGWorld.Creator.CreateColor(),settings.state.globalShadowColor.FromABGRColor(SGWorld.GetOptionParam("GlobalShadowColor")),$("#globalShadowColor").val(settings.state.globalShadowColor.ToHTMLColor())}catch(err){application.errorHandling(err.message,0)}},render:function(){try{$("#settingsPanelDiv").html(`
      <table  class="tabsTable panelHeader s9" > 
        <tr>
            <td >
                <button id="settingsTabButton0" class="tab tabSelected i18n" onclick="settings.showTab(0)">${Lang.settings.settings}</button>
                <button id="settingsTabButton1" class="tab  i18n" onclick="settings.showTab(1)">${Lang.settings.projects}</button>
            </td>
            <td class="link s18" colspan="2" align="right" onclick="toolbox.closeAllTools('settings',true)"><img src="images/icons/close.png"></td>
        </tr>
      </table>
      
  <div class='scrollY' id='settingsWrapperID'>
      <table id="settingsTbl0" class="panelTable propertiesTable  "> 
        <tr class="settingsGraphics"><td colspan="2" class="propertiesTitle ">
        ${Lang.settings.graphics} 
        </td></tr>
        <tr class="settingsGraphics">
            <td>  ${Lang.settings.quality}</td>
            <td >                    
                <select id="qualityID" onchange="settings.SetOptionParam ('TerrainModelQuality',this.value)">
                    <option value=0>${Lang.settings.normal}</option>
                    <option value=1>${Lang.settings.high}</option>
                    <option value=2>${Lang.settings.best}</option>
                </select>
            </td>
        </tr>   
        <tr class="settingsView"><td colspan="2" class="propertiesTitle">
        ${Lang.settings.view}
        </td></tr>
        <tr class="settingsView">
            <td> ${Lang.settings.units}</td>
            <td >                    
                <select id="unitsID" onchange="settings.setUnits()">
                    <option value=0>${Lang.settings.KmMeters}</option>
                    <option value=1>${Lang.settings.milesFeet}</option>
                </select>
            </td>
        </tr>
        <tr  class="settingsView">
            <td> ${Lang.settings.altitude}</td>
            <td >                    
                <select id="altitudeTypeID" onchange="settings.setAltitudeType()">
                    <option value=0>${Lang.settings.aboveGroundLevel}</option>
                    <option value=1>${Lang.settings.absoluteValues}</option>
                </select>
        </tr>
        <tr  class="settingsView">
            <td> ${Lang.settings.navigationControls}</td>
            <td >                    
                <label class="switch">
                    <input type="checkbox" id="showNavigationControlsID" checked onchange="settings.showNavigationControls()">
                    <span class="slider round"></span>
                </label>		
            </td>
        </tr>
        <tr  class="settingsView">
            <td> ${Lang.settings.centerSign}</td>
            <td >                    
                <label class="switch">
                    <input type="checkbox" id="showCenterSignID" checked onchange="settings.showCenterSign()">
                    <span class="slider round"></span>
                </label>		
            </td>
        </tr>
        <tr  class="settingsView">
            <td> ${Lang.settings.statusBar}</td>
            <td >                    
                <label class="switch">
                    <input type="checkbox" id="showStatusBarID" checked onchange="settings.showStatusBar()">
                    <span class="slider round"></span>
                </label>		
            </td>
        </tr>
        <tr  class="settingsView">
            <td> ${Lang.settings.MGRSCoordinates}</td>
            <td >                    
                <label class="switch">
                    <input type="checkbox" id="showMGRSID" checked onchange="settings.showMGRS()">
                    <span class="slider round"></span>
                </label>		
            </td>
        </tr>
        <tr class="settingsEffects"><td colspan="2" class="propertiesTitle">
        ${Lang.settings.postEffects} 
        </td></tr>
        <tr  class="settingsEffects">
        <td> ${Lang.settings.depthPerception}</td>
        <td>
            <label class="switch">
                <input type="checkbox" id="depthPerceptionID" checked onchange="settings.depthPerception()">
                <span class="slider round"></span>
            </label>		
        </td>
        </tr>                                 
        <tr class="settingsEffects">
            <td> ${Lang.settings.saturation}</td>
            <td>                    
                <input type="range" id="saturationSlider" oninput="settings.SetOptionParam ('Saturation',this.value)" min="-100" max="100" >
            </td>
        </tr>
        <tr class="settingsEffects">
            <td> ${Lang.settings.brightness}</td>
            <td >                    
                <input type="range" id="brightnessSlider" oninput="settings.SetOptionParam ('Brightness',this.value)" min="-100" max="100">
            </td>
        </tr>                        
        <tr class="settingsEffects">
            <td> ${Lang.settings.contrast}</td>
            <td>                    
                <input type="range" id="contrastSlider" oninput="settings.SetOptionParam ('Contrast',this.value)" min="-100" max="100">
            </td>
        </tr>                                                
        <tr class="settingsEffects">
            <td> ${Lang.settings.gamma}</td>
            <td>                    
                <input type="range" id="gammaSlider" oninput="settings.SetOptionParam ('Gamma',this.value/10)" min="0" max="100">
            </td>
        </tr>                          
        <tr class="settingsEffects">
            <td colspan="2" align="right">
                <button id="settingsDefault" class="ButtonRoundOutline i18n" onclick="settings.resetPostEffects()">${Lang.settings.resetDefault}</button>
            </td>
        </tr>
        <tr  class="settingsShadow"><td colspan="2" class="propertiesTitle">
        ${Lang.settings.shadow}
        </td></tr>
        <tr  class="settingsShadow">
            <td> ${Lang.settings.globalShadow}</td>
            <td >                    
                <input type="color" id="globalShadowColor" class="demo" value="#ffffff" onchange="settings.setShadowColor()">
            </td>
        </tr>       
        <tr  class="settingsAbout"><td colspan="2" class="propertiesTitle">
        ${Lang.settings.about} 
        </td></tr>          
        <tr  class="settingsAbout">
            <td> ${Lang.settings.TEW}</td>
            <td >                    
                <span  id="TerraExplorerVersion" class="s9"></span> 
            </td>
        </tr>
        <tr  class="settingsAbout">
            <td> ${Lang.settings.helpCenter}</td>
            <td >                    
                <button class="ButtonRoundOutline i18n" onclick="window.open('https://support.skylinesoft.com/hc/en-us/categories/360002859839-TerraExplorer-for-Web', '_blank');">${Lang.settings.open}</button>
            </td>
        </tr>
        <tr  class="settingsAbout">
            <td> ${Lang.settings.errorLogger} [ <span  id="errorLoggerCounterID"></span> ] </td>
            <td >                    
                <button class="ButtonRoundOutline i18n" onclick="application.showErrorLog()">${Lang.settings.show}</button>
            </td>
        </tr>
        <tr  class="settingsAbout">
            <td> ${Lang.settings.licenseNotices}</td>
            <td >                    
                <button class="ButtonRoundOutline i18n" onclick="window.open('./licenseAgreement.html', '_blank');">${Lang.settings.show}</button>
            </td>
        </tr>
        </table>
       


        <!-- Projects tab -->
        <table id="settingsTbl1" class="panelTable tdPadding5 s9 " > 
        <tr class="settingsOpenInTED"><td colspan="2" class="propertiesTitle">
        ${Lang.settings.TED}
        </td></tr>      
        <tr class="settingsOpenInTED">
            <td onclick="application.openInTED()" class="link2"> <span  class=" s9 spacedText">${Lang.settings.openInPlus}</span><img src='./images/icons/arrowRightSmall.png'> </td>
            <td align="right"></td>
        </tr>   
        <tr class="settingsOpenInTED"><td colspan="2">
            <span class="link2 s9 color1 roundBackground " onclick="window.open('https://www.skylinesoft.com/terraexplorer-for-desktop/', '_blank').focus() ;">${Lang.settings.learnMore}</span>
        </td></tr>                    
        <tr class="settingsLoadFromSGS"><td colspan="2" class="propertiesTitle">
            <div class="spacerVertical"></div>
            ${Lang.settings.openAnotherProject}
        </td></tr>      
        <tr class="settingsLoadFromSGS">
            <td> <span  class="s9">${Lang.settings.LoadAnotherProject}</span> </td>
            <td align="right"> <button id="loadProjectBtn" class="ButtonRoundOutline i18n" onclick="settings.loadProject()"> ${Lang.settings.load} </button></td>
        </tr>   
        <tr class="settingsRecentProjects"><td colspan="2" class="propertiesTitle ">           
            <div class="spacerVertical"></div>
            ${Lang.settings.recentProjects}
        </td></tr>   
        <tr class="settingsRecentProjects"><td colspan="2">
            <div id="recentProjectsDiv" class="s9 link recentProjects"></div>
        </td></tr>   
        </table>
        </div>`)}catch(err){application.errorHandling(err.message,0)}},show:function(){try{$("#errorLoggerCounterID").text(application.getErrorLogCount());var height=$("#settingsPanelDiv").height()-80;$("#settingsWrapperID").css("height",height)}catch(err){application.errorHandling(err.message,0)}},resize:function(height){try{height=height-80;$("#settingsWrapperID").css("height",height)}catch(err){application.errorHandling(err.message,0)}},setUnits:function(){try{settings.state.units=+$("#unitsID").val(),SGWorld.SetOptionParam("AltitudeAndDistance",settings.state.units),settings.state.unitString=0==settings.state.units?Lang.settings.Meter:Lang.settings.Feet,settings.state.unitString2=0==settings.state.units?Lang.settings.Km:Lang.settings.Mile,settings.state.unitRatio=0==settings.state.units?1:3.28084,settings.state.unitRatio2=0==settings.state.units?1e3:5280}catch(err){application.errorHandling(err.message,0)}},formatDistance(value,digits){try{return 1e4<value?(value*settings.state.unitRatio/settings.state.unitRatio2).toFixed(digits)+" "+settings.state.unitString2:(value*settings.state.unitRatio).toFixed(digits)+" "+settings.state.unitString}catch(err){application.errorHandling(err.message,0)}},setAltitudeType:function(){try{settings.state.altitudeType=$("#altitudeTypeID").val(),SGWorld.SetOptionParam("AltitudeType",settings.state.altitudeType),settings.state.altitudeTypeString=0==settings.state.altitudeType?Lang.settings.AGL:""}catch(err){application.errorHandling(err.message,0)}},showMGRS:function(){try{settings.state.showMGRS=$("#showMGRSID").is(":checked")?1:0,SGWorld.SetOptionParam("ShowMGRS",settings.state.showMGRS),settings.state.showMGRS?$("#MGRStD").show():$("#MGRStD").hide()}catch(err){application.errorHandling(err.message,0)}},SetOptionParam(property,val){try{SGWorld.SetOptionParam(property,val)}catch(err){application.errorHandling(err.message,0)}},initPostEffects(){try{$("#saturationSlider").val(SGWorld.GetOptionParam("Saturation")),$("#brightnessSlider").val(SGWorld.GetOptionParam("Brightness")),$("#contrastSlider").val(SGWorld.GetOptionParam("Contrast")),$("#gammaSlider").val(10*SGWorld.GetOptionParam("Gamma")),$("#depthPerceptionID").prop("checked",SGWorld.GetOptionParam("DepthPerception"))}catch(err){application.errorHandling(err.message,0)}},resetPostEffects:function(){try{SGWorld.SetOptionParam("ResetPostEffects",0),SGWorld.SetOptionParam("DepthPerception",0),settings.initPostEffects()}catch(err){application.errorHandling(err.message,0)}},depthPerception:function(){try{SGWorld.SetOptionParam("DepthPerception",$("#depthPerceptionID").is(":checked")?1:0)}catch(err){application.errorHandling(err.message,0)}},setShadowColor:function(){try{settings.state.globalShadowColor.FromHTMLColor($("#globalShadowColor").val()),settings.state.globalShadowColor.SetAlpha(.5),SGWorld.SetOptionParam("GlobalShadowColor",settings.state.globalShadowColor.ToABGRColor())}catch(err){application.errorHandling(err.message,0)}},showNavigationControls:function(){try{settings.state.showNavigationControls=$("#showNavigationControlsID").is(":checked"),$("#showNavigationControlsID").is(":checked")?$("#navigationButtons").show():$("#navigationButtons").hide(),localStorage.setItem("navigationControls",settings.state.showNavigationControls)}catch(err){application.errorHandling(err.message,0)}},showCenterSign:function(){try{$("#showCenterSignID").is(":checked")?$("#centerSignID").show():$("#centerSignID").hide()}catch(err){application.errorHandling(err.message,0)}},showStatusBar:function(){try{$("#showStatusBarID").is(":checked")?$("#statusBarID").show():$("#statusBarID").hide()}catch(err){application.errorHandling(err.message,0)}},showTab:function(tabIndex){try{for(var i=0;i<settings.state.tabs;i++)i==tabIndex?($("#settingsTbl"+i).show(),$("#settingsTbl"+i).css("opacity","1"),$("#settingsTabButton"+i).addClass("tabSelected")):($("#settingsTbl"+i).hide(),$("#settingsTbl"+i).css("opacity","0"),$("#settingsTabButton"+i).removeClass("tabSelected"))}catch(err){application.errorHandling(err.message,0)}},getRecentProjects:function(div){try{for(var projectName,projects=SGWorld.GetParam(8500).split("|"),recentText="<ul class='recentProjectsList'>",i=0;i<projects.length&&i<10;i++)null!=projects[i]&&""!=projects[i]&&void 0!==projects[i]&&(projectName=projects[i].split("/").pop(),recentText+=`<li><span class='link2 spacedText' onclick='application.reloadPageURL("${projects[i]}");'>${projectName} </span></li>`);recentText+="</ul>",div.html(recentText)}catch(err){application.errorHandling(err.message,0)}},loadProject:function(){try{null==application.state.connectedServer?(application.showLogin("openProjectsDialogFromServer"),$("#errorLogin").show(),$("#errorLogin").text(Lang.settings.errorMustLogin)):projectTree.openLayersDialog(application.state.connectedServer+"/admin/telayers.aspx?type=TerraExplorerProjectDesktop&tewebnew=true",0)}catch(err){application.errorHandling(err.message,0)}},dummy:null};