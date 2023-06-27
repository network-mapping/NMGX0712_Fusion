this.JSON||(this.JSON={}),!function(){function f(n){return n<10?"0"+n:n}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){return escapable.lastIndex=0,escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return"string"==typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,partial,mind=gap,value=holder[key];switch(value&&"object"==typeof value&&"function"==typeof value.toJSON&&(value=value.toJSON(key)),typeof(value="function"==typeof rep?rep.call(holder,key,value):value)){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value)return"null";if(gap+=indent,partial=[],"[object Array]"===Object.prototype.toString.apply(value)){for(length=value.length,i=0;i<length;i+=1)partial[i]=str(i,value)||"null";v=0===partial.length?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]"}else{if(rep&&"object"==typeof rep)for(length=rep.length,i=0;i<length;i+=1)"string"==typeof(k=rep[i])&&(v=str(k,value))&&partial.push(quote(k)+(gap?": ":":")+v);else for(k in value)Object.hasOwnProperty.call(value,k)&&(v=str(k,value))&&partial.push(quote(k)+(gap?": ":":")+v);v=0===partial.length?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}"}return gap=mind,v}}"function"!=typeof JSON.stringify&&(JSON.stringify=function(value,replacer,space){var i;if(indent=gap="","number"==typeof space)for(i=0;i<space;i+=1)indent+=" ";else"string"==typeof space&&(indent=space);if(!(rep=replacer)||"function"==typeof replacer||"object"==typeof replacer&&"number"==typeof replacer.length)return str("",{"":value});throw new Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&"object"==typeof value)for(k in value)Object.hasOwnProperty.call(value,k)&&(void 0!==(v=walk(value,k))?value[k]=v:delete value[k]);return reviver.call(holder,key,value)}if(cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),jQuery.cookie=function(d,c,a){if(void 0===c){if(c=null,document.cookie&&""!=document.cookie)for(a=document.cookie.split(";"),b=0;b<a.length;b++)if((e=jQuery.trim(a[b])).substring(0,d.length+1)==d+"="){c=decodeURIComponent(e.substring(d.length+1));break}return c}a=a||{},null===c&&(c="",a.expires=-1);var b="",e=(a.expires&&("number"==typeof a.expires||a.expires.toUTCString)&&("number"==typeof a.expires?(b=new Date).setTime(b.getTime()+864e5*a.expires):b=a.expires,b="; expires="+b.toUTCString()),a.path?"; path="+a.path:""),f=a.domain?"; domain="+a.domain:"",a=a.secure?"; secure":"";document.cookie=[d,"=",encodeURIComponent(c),b,e,f,a].join("")};var ActionCode={AC_FLYTO:0,AC_CIRCLEPATTERN:1,AC_OVALPATTERN:2,AC_LINEPATTERN:3,AC_ARCPATTERN:4,AC_FOLLOWBEHIND:5,AC_FOLLOWABOVE:6,AC_FOLLOWBELOW:7,AC_FOLLOWRIGHT:8,AC_FOLLOWLEFT:9,AC_FOLLOWBEHINDANDABOVE:10,AC_FOLLOWCOCKPIT:11,AC_FOLLOWFROMGROUND:12,AC_STOP:13,AC_JUMP:14,AC_DELETE:15,AC_EDIT_FINISHED:16,AC_OBJECT_ADDED:17,AC_PLAY:18,AC_SHOW:19,AC_EDIT_STARTED:20,AC_SELCHANGED:21,AC_WAYPOINT_REACHED:22,AC_GROUP_ADDED:23,AC_LAYER_ADDED:24,AC_LAYER_REFRESHED:25,AC_ITEM_MOVED:26},AltitudeTypeCode={ATC_TERRAIN_RELATIVE:0,ATC_PIVOT_RELATIVE:1,ATC_ON_TERRAIN:2,ATC_TERRAIN_ABSOLUTE:3,ATC_DEFAULT:999},DynamicMotionStyle={MOTION_GROUND_VEHICLE:0,MOTION_AIRPLANE:1,MOTION_HELICOPTER:2,MOTION_HOVER:3},DynamicObjectType={DYNAMIC_3D_MODEL:0,DYNAMIC_TEXT_LABEL:1,DYNAMIC_IMAGE_LABEL:2,DYNAMIC_VIRTUAL:3},LabelStyle={LS_DEFAULT:0,LS_STREET:1,LS_STATE:2},MsgClient6={MC_LEFT:0,MC_MAIN:2,MC_MESSAGE_BAR:3,MC_FLOAT:4,MC_POPUP:5},MsgType={TYPE_TEXT:0,TYPE_URL:1,TYPE_SCRIPT:3},ModelTypeCode={MT_NORMAL:0,MT_ANIMATION:1,MT_PROGRESSIVE:2},LayerGeometryType={LGT_POINT:0,LGT_POLYLINE:1,LGT_POLYGON:2,LGT_COLLECTION:3,LGT_NONE:-1},SphereStyle={SPHERE_NORMAL:0,SPHERE_UPPER_HALF:1,SPHERE_LOWER_HALF:2,SPHERE_UPPER_HALF_BASE:3,SPHERE_LOWER_HALF_BASE:4},ElevationBehaviorMode={EB_REPLACE:0,EB_BELOW:1,EB_ABOVE:2},EditItemFlags={EDIT_ITEM_USE_PROPERTY:0,EDIT_ITEM:1,EDIT_ITEM_VERTICES:2,EDIT_ITEM_BUILDING_ROOF:3},ItemCode={SELECTED:10,CHILD:11,FIRSTVISIBLE:12,NEXT:13,NEXTVISIBLE:14,PARENT:15,PREVIOUS:16,PREVIOUSVISIBLE:17,ROOT:18},SortType={SORT_ALPHABETICALLY_AZ:0,SORT_ALPHABETICALLY_ZA:1,SORT_BY_TYPE:2,SORT_NO_SORT:3},WorldPointType={WPT_MODEL:1,WPT_LABEL:2,WPT_PRIMITIVE:4,WPT_ANIM:8,WPT_BUILDING:16,WPT_SKY:32,WPT_ACCURATE_CPT:64,WPT_BBOX_CPT:128,WPT_VIDEO:256,WPT_UNDERGROUND:512,WPT_SCREEN_OVERLAY:1024,WPT_SCREEN_CONTROL:2048,WPT_SCREEN_COVERED:4096,WPT_ALL:-1},MouseInputMode={MI_FREE_FLIGHT:0,MI_COM_CLIENT:1,MI_CONTROLLED_FLIGHT:2,MI_EDIT:3,MI_MEASURAMENT:4},MessageBarTextAlignment={MBT_LEFT:0,MBT_CENTER:1,MBT_RIGHT:2},AccuracyLevel={ACCURACY_NORMAL:0,ACCURACY_BEST_FROM_MEMORY:1,ACCURACY_BEST_FROM_MPT:2},PermissionType={LMP_ENABLE_ALL:0,LMP_DISABLE_API:1,LMP_DISABLE_UI:2,LMP_DISABLE_ALL:-1},SliderDisplayMode={MODE_TIME_NONE:0,MODE_FIXED_TIME:1,MODE_TIME:2,MODE_RANGE_PROJECT:4,MODE_RANGE_CUSTOM:8,MODE_ADJUST_FOR_GROUP:16},TimeZoneType={TIME_ZONE_TYPE_MY_COMPUTER:0,TIME_ZONE_TYPE_UTC:1,TIME_ZONE_TYPE_SPECIFIC:2},TEVesrionType={TEVT_PRO:0,TEVT_PLUS:1,TEVT_VIEWER:2,TEVT_UNKNOWN:-1},ObjectTypeCode={OT_UNDEFINED:0,OT_POLYLINE:1,OT_POLYGON:2,OT_RECTANGLE:3,OT_REGULAR_POLYGON:4,OT_CIRCLE:5,OT_3D_POLYGON:6,OT_BUILDING:7,OT_BOX:8,OT_PYRAMID:9,OT_CYLINDER:10,OT_CONE:11,OT_ELLIPSE:12,OT_ARC:13,OT_ARROW:14,OT_3D_ARROW:15,OT_SPHERE:16,OT_MODEL:17,OT_LABEL:18,OT_LOCATION:19,OT_TREE_HOTLINK:20,OT_ROUTE:21,OT_MESSAGE:22,OT_DYNAMIC:23,OT_IMAGE_LABEL:24,OT_THREAT_DOME:25,OT_IMAGERY_LAYER:26,OT_TERRAIN_VIDEO:27,OT_POINT_CLOUD:28,OT_ELEVATION_LAYER:29,OT_TERRAIN_MODIFIER:30,OT_TERRAIN_HOLE:31,OT_POPUP_MESSAGE:32,OT_FEATURE:33,OT_PRESENTATION:34,OT_ANALYSIS_LOS:35},SGGeometryTypeId={SG_POINT:0,SG_LINESTRING:1,SG_LINEARRING:2,SG_POLYGON:3,SG_MULTIPOINT:4,SG_MULTILINESTRING:5,SG_MULTIPOLYGON:6},BuildingStyleCode={BS_STRETCH_TERRAIN:0,BS_POLYGONS:1},IntersectionType={IT_NONE:0,IT_INTERSECT:1,IT_WITHIN:2},StreamLayerStatus={SLS_NOT_STREAMED_LAYER:0,SLS_STREAMING:1,SLS_STREAM_PAUSED:2},AltitudeUnitCode={AU_METER:0,AU_FEET:1,AU_CENTIMETER:2,AU_DECIMETER:3,AU_INCHE:4,AU_YARD:5,AU_UNDEFINED:-1},LabelLockMode={LM_DECAL:0,LM_AXIS:1,LM_AXIS_TEXTUP:2,LM_AXIS_AUTOPITCH:3,LM_AXIS_AUTOPITCH_TEXTUP:4},DistributionDir={DOWN_UP:0,UP_DOWN:1,RIGHT_LEFT:2,LEFT_RIGHT:3,FRONT_BACK:4,BACK_FRONT:5},CPTDataFormat={CPT_DF_INTENSITY:0,CPT_DF_RGB:1},_HTML_POPUP_FLAGS={HTML_POPUP_NONE:0,HTML_POPUP_ANCHOR_3D_WINDOW:1,HTML_POPUP_ALLOW_DRAG:2,HTML_POPUP_NO_CAPTION:4,HTML_POPUP_USE_DEFAULT_POS:8,HTML_POPUP_USE_LAST_SIZE:16,HTML_POPUP_ALLOW_RESIZE:32,HTML_POPUP_ADD_SHADOW:64,HTML_POPUP_NO_BORDER:128,HTML_POPUP_SET_FOCUS_TO_RENDER:256,HTML_POPUP_NOT_USE_POINTER:512,HTML_POPUP_ALWAYS_VISIBLE:1024,HTML_POPUP_USE_LAST_POS:2048,HTML_POPUP_USE_TEXT_AS_INNER_HTML:4096},PresentationStepContinue={PSC_MOUSECLICK:0,PSC_WAIT:1},PresentationStepFlightSpeed={PSFS_VERYSLOW:0,PSFS_SLOW:1,PSFS_NORMAL:2,PSFS_FAST:3,PSFS_VERYFAST:4},PresentationPlayAlgorithm={PPA_FLYTO:0,PPA_SPLINE:1},PresentationPlayMode={PPM_AUTOMATIC:0,PPM_MANUAL:1},PresentationCaptionSizeType={PCST_FIXED:0,PCST_AUTOMATICALLYADJUST:1},PresentationCaptionPosition={PCP_TOPLEFT:0,PCP_TOPCENTER:1,PCP_TOPRIGHT:2,PCP_BOTTOMLEFT:3,PCP_BOTTOMCENTER:4,PCP_BOTTOMRIGHT:5},PresentationStatus={PS_PLAYING:0,PS_NOTPLAYING:1,PS_PAUSED:2,PS_WAITINGTIME:3,PS_WAITINGCLICK:4},VideoPlayStatus={VPS_PAUSE:0,VPS_PLAY:1,VPS_STOP:2},ContainerSite={CS_DOCK_LEFT:0,CS_DOCK_RIGHT:1,CS_DOCK_TOP:2,CS_DOCK_BOTTOM:3,CS_DOCK_FLOAT:4,CS_MAIN:5,CS_NOT_VALID:-1},FaceFillTypeCode={FACE_COLOR:0,FACE_TEXTURE:1,FACE_TERRAIN_TEXTURE:2,FACE_UNDEFINED:-1},RoofStyleCode={ROOFTOP_FLAT:0,ROOFTOP_ANGULAR:1},PresentationStepType={ST_LOCATION:0,ST_DYNAMICOBJECT:1,ST_GROUPOROBJECT:2,ST_UNDERGROUNDMODE:3,ST_TIMESLIDER:4,ST_CURRENTTIME:5,ST_MESSAGE:6,ST_TOOL:7,ST_CAPTION:8,ST_RESTARTDYNAMICOBJECT:9,ST_FLIGHTSPEEDFACTOR:10,ST_CLEARCAPTION:-1},TilingMethodCode={TM_TILES_PER_SIDE:0,TM_TILES_PER_AXIS:0,TM_METERS_PER_TILE:1,TM_UNDEFINED:-1},AttributeTypeCode={AT_TEXT:0,AT_INTEGER:1,AT_DOUBLE:2,AT_UNKNOWN:-1},FeatureState={};function DisplayHelpPopup(HTMLSrc,title){null!=title&&""!=title||(title="?"),TE.interface("IContainer2").HTMLPopup(1,5,5,650,500,title,abspath()+"/"+HTMLSrc,10,-1)}function DisplayHelpPopup6(HTMLSrc,title){null!=title&&""!=title||(title="?");title=SGWorld.Creator.CreatePopupMessage(title,abspath()+"/"+HTMLSrc,5,5,650,500);title.AllowDrag=!0,title.AllowResize=!0,SGWorld.Window.ShowPopup(title)}function CloseTool(ToolName){TE.interface("IContainer2").RemoveURL(1,ToolName)}function SGAPIDisplayHelpPopup(HTMLSrc,title){null!=title&&""!=title||(title="?");title=new SGPopup(title,HTMLSrc,0,0,650,500);title.align="TopLeft",globe.showPopup(title)}function SGAPICloseTool(ToolName){globe.teCore.IContainer.RemoveURL(1,ToolName)}function abspath(){var abspath=unescape(window.location.href),index2=(index=(abspath=0<(index=abspath.indexOf("?"))?abspath.substr(0,index-1):abspath).lastIndexOf("/"),abspath.lastIndexOf("\\")),index=index2<index?index:index2;return index<=0||(index2=/file:\/\/\//gi,null!=(abspath="/"==(abspath=abspath.substring(0,index)).substring(0,1)?abspath.slice(1):abspath).match(index2)&&(abspath=abspath.replace(index2,""))),abspath}function GetParamValue(findParam,defaultValue){var arr=document.location.href.split("?");if(!(arr.length<=1))for(var arr=arr[1].split("&"),i=0;i<arr.length;i++)if(0==arr[i].indexOf(findParam)&&arr[i].indexOf("=")==findParam.length)return(arr=arr[i].split("="))[1];return defaultValue}function validateNumber(strNum){return strNum=strNum.replace(/,/,"."),parseFloat(strNum)}function DrawPolyLButtonDown(Flags,X,Y){var y,myGeometry,X=SGWorld.Window.PixelToWorld(X,Y);return null!=X&&(null==gPolyObj?(myGeometry=SGWorld.Creator.GeometryCreator.CreateLineStringGeometry([X.Position.x,X.Position.y,0,X.Position.x,X.Position.y,0]),(gPolyObj=SGWorld.Creator.CreatePolyline(myGeometry,SGWorld.Creator.CreateColor(0,255,0,1),2,-1,gPolylineText)).LineStyle.Width=-2,gPolyObj.Geometry.StartEdit()):2==gPolyMethod?1==gPolyObj.ObjectType?(Y=gPolyObj.Geometry.Points.Item(0).X,y=gPolyObj.Geometry.Points.Item(0).Y,SGWorld.Creator.DeleteObject(gPolyObj.ID),myGeometry=SGWorld.Creator.GeometryCreator.CreateLinearRingGeometry([Y,y,0,X.Position.x,X.Position.y,0,X.Position.x,X.Position.y,0]),(gPolyObj=SGWorld.Creator.CreatePolygon(myGeometry,SGWorld.Creator.CreateColor(0,255,0,1),SGWorld.Creator.CreateColor(0,255,0,.5),2,-1,gPolygonText)).LineStyle.Width=-2,gPolyObj.Terrain.GroundObject=!0,gPolyObj.Geometry.StartEdit()):(gPolyObj.Geometry.Rings(0).Points.Item(gPolyObj.Geometry.Rings(0).Points.count-1).X=X.Position.x,gPolyObj.Geometry.Rings(0).Points.Item(gPolyObj.Geometry.Rings(0).Points.count-1).Y=X.Position.y,gPolyObj.Geometry.Rings(0).Points.Item(gPolyObj.Geometry.Rings(0).Points.count-1).Z=0,gPolyObj.Geometry.Rings(0).Points.AddPoint(X.Position.x,X.Position.y,0)):(gPolyObj.Geometry.Points.Item(gPolyObj.Geometry.Points.count-1).X=X.Position.x,gPolyObj.Geometry.Points.Item(gPolyObj.Geometry.Points.count-1).Y=X.Position.y,gPolyObj.Geometry.Points.Item(gPolyObj.Geometry.Points.count-1).Z=0,gPolyObj.Geometry.Points.AddPoint(X.Position.x,X.Position.y,0)),null!=gDrawPolyClick&&gDrawPolyClick(gPolyObj.Geometry,gPolyObj.ObjectType),!0)}function DrawPolyOnFrame(){if(null!=gPolyObj)try{var mouseInfo=SGWorld.Window.GetMouseInfo(),CursorCoord=SGWorld.Window.PixelToWorld(mouseInfo.X,mouseInfo.Y);if(null==CursorCoord)return!1;2==gPolyObj.ObjectType?(gPolyObj.Geometry.Rings(0).Points.Item(gPolyObj.Geometry.Rings(0).Points.count-1).X=CursorCoord.Position.x,gPolyObj.Geometry.Rings(0).Points.Item(gPolyObj.Geometry.Rings(0).Points.count-1).Y=CursorCoord.Position.y,gPolyObj.Geometry.Rings(0).Points.Item(gPolyObj.Geometry.Rings(0).Points.count-1).Z=0):(gPolyObj.Geometry.Points.Item(gPolyObj.Geometry.Points.count-1).X=CursorCoord.Position.x,gPolyObj.Geometry.Points.Item(gPolyObj.Geometry.Points.count-1).Y=CursorCoord.Position.y,gPolyObj.Geometry.Points.Item(gPolyObj.Geometry.Points.count-1).Z=0)}catch(e){}}function DrawPolyInputModeChanged(NewMode){1!=NewMode&&null!=gPolyObj&&Reset(0,1)}function DrawPolyRButtonUp(Flags,X,Y){return null==gPolyObj||1==gPolyObj.ObjectType&&gPolyObj.Geometry.Points.count<=2||2==gPolyObj.ObjectType&&gPolyObj.Geometry.Rings(0).Points.count<=3?(Reset(0,0),!1):(1==gPolyObj.ObjectType?gPolyObj.Geometry.Points.DeletePoint(gPolyObj.Geometry.Points.count-1):gPolyObj.Geometry.Rings(0).Points.DeletePoint(gPolyObj.Geometry.Rings(0).Points.count-1),gPolyObj.Geometry.EndEdit(),gEndDrawPoly(gPolyObj.Geometry,gPolyObj.ObjectType,null),Reset(0,0),!0)}function searchGeometries2(parentNode,callbackFunc){SGWorld.ProjectTree.EnableRedraw(0),searchGeometriesLeaf2(parentNode,callbackFunc),SGWorld.ProjectTree.EnableRedraw(1)}function searchGeometriesLeaf2(parentNode,callbackFunc){if(SGWorld.ProjectTree.IsLayer(parentNode)){for(var featureGroups=SGWorld.ProjectTree.GetLayer(parentNode).FeatureGroups,i=0;i<featureGroups.Count;i++)for(var featureGroup=featureGroups.Item(i),altitudeType=featureGroup.GetProperty("Altitude Method"),j=0;j<featureGroup.Count;j++)if(!callbackFunc(featureGroup.Item(j).Geometry,featureGroup.GeometryType,altitudeType))return}else for(var node=SGWorld.ProjectTree.GetNextItem(parentNode,11);-1!=node&&0!=node;){if(SGWorld.ProjectTree.IsGroup(node)||SGWorld.ProjectTree.IsLayer(node))searchGeometriesLeaf2(node,callbackFunc);else{var Object=SGWorld.ProjectTree.GetObject(node);if(null!=Object){altitudeType=Object.Position.AltitudeType;if(!callbackFunc(Object.Geometry,Object.ObjectType,altitudeType))return}}node=SGWorld.ProjectTree.GetNextItem(node,13)}}FeatureState.FS_NONE=0,FeatureState.FS_NEW=1,FeatureState.FS_MODIFIED=2,FeatureState.FS_DELETED=3,SGLang={lang:{},defaultCode:"0",getCode:function(){return SGLang.getUrlParameters().lang||SGLang.defaultCode},getUrlParameters:function(){for(var keyValuePairs=window.location.href.split(/[&?]/g),params={},i=0,n=keyValuePairs.length;i<n;++i){var key,m=keyValuePairs[i].match(/^([^=]+)(?:=([\s\S]*))?/);m&&(params[key=decodeURIComponent(m[1])]||(params[key]=[])).push(decodeURIComponent(m[2]))}return params},i18n:function(key,context){var message=(message=SGLang.lang[key])||key;return message=context?SGLang.format(message,context):message},i18nFile:function(file){var code=this.getCode();return"0"==code||"1033"==code?file:code+"/"+file},format:function(template,context,args){context=context||window;return template.replace(SGLang.tokenRegEx,function(str,match){for(var replacement,subs=match.split(/\.+/),i=0;i<subs.length;i++)replacement=(replacement=0==i?context:replacement)[subs[i]];return void 0===(replacement="function"==typeof replacement?args?replacement.apply(null,args):replacement():replacement)?"undefined":replacement})},tokenRegEx:/\$\{([\w.]+?)\}/g},!function(){document.write("<script language='javascript' src='Lang.js'><\/script>");var code=SGLang.getCode();document.write("<script  language='javascript' src='"+code+"/Lang.js'><\/script>")}(),$(document.body).hide(),$(document).ready(function(){$(document.body).hide();setTimeout(function(){document.title=SGLang.i18n(document.title),$(".i18n").each(function(){"INPUT"==this.tagName?this.value=SGLang.i18n(this.value):"IMG"==this.tagName?($(this).attr("src",SGLang.i18n($(this).attr("src"))),$(this).attr("alt",SGLang.i18n($(this).attr("alt"))),$(this).attr("title",SGLang.i18n($(this).attr("title")))):($(this).attr("title",SGLang.i18n($(this).attr("title"))),$(this).attr("alt",SGLang.i18n($(this).attr("alt"))),0==$(this).children().length&&$(this).html(SGLang.i18n($.trim($(this).text()))))}),$(".i18nFile").each(function(){"IMG"==this.tagName&&$(this).attr("src",SGLang.i18nFile($(this).attr("src")))}),$(document.body).show()},1)});