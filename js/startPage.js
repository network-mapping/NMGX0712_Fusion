var startPage={render:function(cb){try{fetch("custom/TEWConfig.json",{method:"GET",headers:{Accept:"application/json"}}).then(response=>response.json()).then(response=>{var demoPorjects="";void 0!==response.DemoProjects&&response.DemoProjects.forEach(element=>{demoPorjects=(demoPorjects+="<div style='background-image: url("+element.projectImageURL+")' class='startPageDemoProjectsBox' onclick='application.openDemoProjectURL(\""+element.projectUrl+"\")'>")+"<span>"+element.projectName+"</span></div>"}),setTimeout(function(){$("#LoginTitleDivID").show(),$("#startPageDiv").html(`<div class="startPageGridContainer">
                        <div class="startPageHeader">
                            <div class="startPageHeaderTEW_logo">
                                <img src="images/img/TEW_logo.png">
                            </div>
                        </div>
                        <div id="startPageMainDivId" class="startPageMainDiv">
                        <span class="s14error i18n" id="startPageError"></span>
                            <div id="startPageprojectURLMainDivId" class="startPageprojectURLDiv">
                                <span class="s18 i18n">${Lang.startPage.projectMissing}</span>
                                <div id="startPageURLFieldDivId" class="startPageURLFieldDiv">
                                    <input class="w70 startPageProjectURLInput" type="url" id="enterProjectURL" value="" onkeydown = 'if (event.keyCode === 13) {$("#EnterProjectURLBtn").click();}' placeholder="${Lang.application.enterProjectURL}" />      
                                    <button id="EnterProjectURLBtn" class="ButtonRound py6 px12 i18n" onclick="application.reloadPage();">${Lang.startPage.load}</button>
                                    <button id="EnterProjectURLBtn" class="ButtonRoundOutline py6 px12 i18n" onclick="settings.loadProject();">${Lang.startPage.SearchInServer}</button>
                                </div>
                            </div>
                            <div id="startPageRecentProjectsMainDivId" class="startPageRecentProjectsMainDiv">
                                <span class="s18 i18n">${Lang.startPage.recentProjects}</span>
                                <div id="startpageRecentProjectsDiv" class="s9 recentProjects"></div>
                            </div>
                        </div>
                        <div class="startPageDemoProjectsSection">
                            <span class="s18 i18n demoProjectsSpan">${Lang.startPage.demoProjects}</span>
                            <div class="startPageDemoProjectsImages">`+demoPorjects+`</div>
                            <div class="startPageDemoProjectsCurve"></div>
                        </div>
                        <div class="startPageFooter">
                            <div class='startPageFooterCopyright s9inv'>${Lang.startPage.copyright}</div>
                            <div class='startPageFooterSkylineLogo'></div>
                        </div>
                    </div>
        `),cb()},0)})}catch(err){application.errorHandling(err.message,0)}},dummy:null};