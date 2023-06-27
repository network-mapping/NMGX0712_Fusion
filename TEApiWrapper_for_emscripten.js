
function CreateSGWorld(){
    return new ISGWorld80();
}

class TEIUnknownHandle80{
    constructor(nativeInstanceHandle){
        this._NativeInstanceHandle = nativeInstanceHandle;
        if (TEIUnknownHandle80.finalizationRegistry === undefined) {
            TEIUnknownHandle80.finalizationRegistry = new FinalizationRegistry((nativeInstanceHandle) => {
                _NativeRelease80(nativeInstanceHandle);
            });
        }
        TEIUnknownHandle80.finalizationRegistry.register(this, nativeInstanceHandle);
    }
    get getInstanceHandle(){
        return this._NativeInstanceHandle;
    }
    ApiError(err) {        
        throw err;
    }
};

function EmvalToJS(em_val){
	if(em_val instanceof Array){
		var array = new Array;
		for(let i=0;i<em_val.length;i++){
			array.push(EmvalToJS(em_val[i]));
		}
		return array;
	}
	else
	if(typeof  em_val=="object"){        
        if ("getInstanceHandle" in em_val) {
            switch (UTF8ToString(_NativeInstanceToStringIID80(em_val.getInstanceHandle))){
                case "IID_IDateTime80":
                    return new IDateTime80(em_val.getInstanceHandle);
                case "IID_IPosition80":
                    return new IPosition80(em_val.getInstanceHandle);

                console.log("EmvalToJS failed.");
                return 0;
            }                    
        }
    };
    return em_val;
}

class ISGWorld80 extends TEIUnknownHandle80 {
                constructor() {
                    super(_CreateISGWorld());
                }
    AttachEvent(eventName,eventFunc){                                
        try{
        switch(eventName){
            case  "OnLoadFinished":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLoadFinished"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(Boolean(V0));
                                                }, 'vii'));
                break;
            case  "OnFileClosing":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFileClosing"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnFrame":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFrame"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnSGWorldMessage":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnSGWorldMessage"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0),UTF8ToString(V1));
                                                }, 'iiii'));
                break;
            case  "OnObjectAction":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnObjectAction"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),GetJSObjectFromHandle(V1));
                                                }, 'viii'));
                break;
            case  "OnFileSave":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFileSave"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnRenderQualityChanged":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnRenderQualityChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(V0);
                                                }, 'vii'));
                break;
            case  "OnInputModeChanged":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnInputModeChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(V0);
                                                }, 'vii'));
                break;
            case  "OnLButtonDown":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLButtonDown"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnLButtonUp":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLButtonUp"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnMButtonDown":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMButtonDown"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnMButtonUp":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMButtonUp"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnRButtonDown":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnRButtonDown"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnRButtonUp":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnRButtonUp"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnMouseWheel":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMouseWheel"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2,V3) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2,V3);
                                                }, 'iiiiii'));
                break;
            case  "OnProjectTreeAction":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnProjectTreeAction"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),GetJSObjectFromHandle(V1));
                                                }, 'viii'));
                break;
            case  "OnSGWorld":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnSGWorld"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(V0,Emval.toValue(V1));
                                                }, 'viii'));
                break;
            case  "OnDrawHUD":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDrawHUD"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnLButtonDblClk":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLButtonDblClk"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnRButtonDblClk":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnRButtonDblClk"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnMButtonDblClk":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMButtonDblClk"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnCreateBasicKit":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnCreateBasicKit"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),UTF8ToString(V1));
                                                }, 'viii'));
                break;
            case  "OnLayerStreaming":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLayerStreaming"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),Boolean(V1));
                                                }, 'viii'));
                break;
            case  "OnDateTimeChanged":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDateTimeChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(Emval.toValue(V0));
                                                }, 'vii'));
                break;
            case  "OnContainerChanged":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnContainerChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(V0,GetJSObjectFromHandle(V1));
                                                }, 'viii'));
                break;
            case  "OnCommandValueChanged":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnCommandValueChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(V0,Emval.toValue(V1));
                                                }, 'viii'));
                break;
            case  "OnFileClosed":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFileClosed"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnPresentationStatusChanged":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnPresentationStatusChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),V1);
                                                }, 'viii'));
                break;
            case  "OnAnalysisProgress":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnAnalysisProgress"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1);
                                                }, 'iiii'));
                break;
            case  "OnAnalysisDistancePointAdded":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnAnalysisDistancePointAdded"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2,V3,V4) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(GetJSObjectFromHandle(V0),V1,V2,V3,V4);
                                                }, 'viidddd'));
                break;
            case  "OnLButtonClicked":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnLButtonClicked"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnDataSourceFeatureIdChanged":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDataSourceFeatureIdChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),UTF8ToString(V1),UTF8ToString(V2));
                                                }, 'viiii'));
                break;
            case  "OnKeyboard":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnKeyboard"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1,V2) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1,V2);
                                                }, 'iiiii'));
                break;
            case  "OnImportFeatureLayerProgress":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnImportFeatureLayerProgress"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,V1);
                                                }, 'iiii'));
                break;
            case  "OnNetworkLinkLoadFailed":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnNetworkLinkLoadFailed"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0),UTF8ToString(V1));
                                                }, 'viii'));
                break;
            case  "OnMeasurementDistanceResult":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMeasurementDistanceResult"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0));
                                                }, 'iii'));
                break;
            case  "OnMeasurementAreaResult":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMeasurementAreaResult"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0));
                                                }, 'iii'));
                break;
            case  "OnEndDrawMeasurement":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnEndDrawMeasurement"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(GetJSObjectFromHandle(V0));
                                                }, 'vii'));
                break;
            case  "OnDrawingGeometryChanged":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDrawingGeometryChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(GetJSObjectFromHandle(V0),Boolean(V1));
                                                }, 'viii'));
                break;
            case  "OnDrawingFinished":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDrawingFinished"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(GetJSObjectFromHandle(V0));
                                                }, 'vii'));
                break;
            case  "OnDrawingAbort":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnDrawingAbort"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnObjectSelected":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnObjectSelected"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0));
                                                }, 'vii'));
                break;
            case  "OnObjectUnselected":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnObjectUnselected"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0));
                                                }, 'vii'));
                break;
            case  "OnFeatureLayerSaved":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFeatureLayerSaved"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0));
                                                }, 'vii'));
                break;
            case  "OnFeatureLayerChanged":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnFeatureLayerChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(UTF8ToString(V0));
                                                }, 'vii'));
                break;
            case  "OnObjectUnderCursorChanged":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnObjectUnderCursorChanged"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc(Boolean(V0),UTF8ToString(V1));
                                                }, 'viii'));
                break;
            case  "OnCommandExecuted":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnCommandExecuted"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0,Emval.toValue(V1));
                                                }, 'iiii'));
                break;
            case  "OnPublishProgress":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnPublishProgress"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(V0);
                                                }, 'iid'));
                break;
            case  "OnPublishFinished":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnPublishFinished"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0));
                                                }, 'iii'));
                break;
            case  "OnPublishAborted":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnPublishAborted"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    jseventFunc();
                                                }, 'vi'));
                break;
            case  "OnMeasurementQueryResult":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnMeasurementQueryResult"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0,V1) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0),UTF8ToString(V1));
                                                }, 'iiii'));
                break;
            case  "OnPresentationEvent":
                    _NativeISGWorld80_AttachEvent(this.getInstanceHandle,
                                                allocateUTF8("OnPresentationEvent"),
                                                Emval.toHandle(eventFunc),
                                                addFunction((eventFunc_ ,V0) => {
                                                    var jseventFunc = Emval.toValue(eventFunc_);                                                
                                                    return jseventFunc(UTF8ToString(V0));
                                                }, 'iii'));
                break;
            default:
                throw "Event name: '" + eventName + "' doesn't exist.";
        }

        }
        catch(err){
            this.ApiError(err);
        }
     }
    get Project(){
        try{
            return new IProject80(_NativeISGWorld80_get_Project(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Navigate(){
        try{
            return new INavigate80(_NativeISGWorld80_get_Navigate(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Creator(){
        try{
            return new ICreator80(_NativeISGWorld80_get_Creator(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Drawing(){
        try{
            return new IDrawing80(_NativeISGWorld80_get_Drawing(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ProjectTree(){
        try{
            return new IProjectTree80(_NativeISGWorld80_get_ProjectTree(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Window(){
        try{
            return new IWindow80(_NativeISGWorld80_get_Window(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Terrain(){
        try{
            return new ITerrain80(_NativeISGWorld80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LicenseManager(){
        try{
            return new ILicenseManager80(_NativeISGWorld80_get_LicenseManager(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get CoordServices(){
        try{
            return new ICoordServices80(_NativeISGWorld80_get_CoordServices(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DateTime(){
        try{
            return new IDateTime80(_NativeISGWorld80_get_DateTime(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Version(){
        try{
            return new ITEVersionInfo80(_NativeISGWorld80_get_Version(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Application(){
        try{
            return new IApplication80(_NativeISGWorld80_get_Application(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Command(){
        try{
            return new ICommand80(_NativeISGWorld80_get_Command(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Analysis(){
        try{
            return new IAnalysis80(_NativeISGWorld80_get_Analysis(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SGServer(){
        try{
            return new ISGServer80(_NativeISGWorld80_get_SGServer(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get IgnoreAccelerators(){
        try{
            return _NativeISGWorld80_get_IgnoreAccelerators(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set IgnoreAccelerators(/*Boolean*/pVal){
            try{
                _NativeISGWorld80_put_IgnoreAccelerators(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    DetachEvent(/*String*/bstrEventName, /*Object*/dispFunc) {
        try{
            _NativeISGWorld80_DetachEvent(this.getInstanceHandle,/*String*/allocateUTF8(String(bstrEventName)),/*Object*/Emval.toHandle(dispFunc));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetOptionParam(/*String*/paramName) {
        try{
            return EmvalToJS(Emval.toValue(_NativeISGWorld80_GetOptionParam(this.getInstanceHandle,/*String*/allocateUTF8(String(paramName)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetParam(/*Int32*/Code) {
        try{
            return EmvalToJS(Emval.toValue(_NativeISGWorld80_GetParam(this.getInstanceHandle,/*Int32*/Code)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Open(/*String*/ProjectURL) {
        try{
            _NativeISGWorld80_Open(this.getInstanceHandle,/*String*/allocateUTF8(String(ProjectURL)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetOptionParam(/*String*/paramName, /*Object*/paramVal, /*Boolean*/bSave=false) {
        try{
            _NativeISGWorld80_SetOptionParam(this.getInstanceHandle,/*String*/allocateUTF8(String(paramName)),/*Object*/Emval.toHandle(paramVal),/*Boolean*/bSave);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParam(/*Int32*/Code, /*Object*/Param) {
        try{
            _NativeISGWorld80_SetParam(this.getInstanceHandle,/*Int32*/Code,/*Object*/Emval.toHandle(Param));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParamEx(/*Int32*/Code, /*Object*/Param1=0, /*Object*/Param2=0) {
        try{
            return EmvalToJS(Emval.toValue(_NativeISGWorld80_SetParamEx(this.getInstanceHandle,/*Int32*/Code,/*Object*/Emval.toHandle(Param1),/*Object*/Emval.toHandle(Param2))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerraExplorerObject80 extends TEIUnknownHandle80 {
    get ID(){
        try{
            return UTF8ToString(_NativeITerraExplorerObject80_get_ID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ObjectType(){
        try{
            return _NativeITerraExplorerObject80_get_ObjectType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SaveInFlyFile(){
        try{
            return _NativeITerraExplorerObject80_get_SaveInFlyFile(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SaveInFlyFile(/*Boolean*/pVal){
            try{
                _NativeITerraExplorerObject80_put_SaveInFlyFile(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    GetClientData(/*String*/Namespace) {
        try{
            return UTF8ToString(_NativeITerraExplorerObject80_GetClientData(this.getInstanceHandle,/*String*/allocateUTF8(String(Namespace))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetParam(/*Int32*/Code) {
        try{
            return EmvalToJS(Emval.toValue(_NativeITerraExplorerObject80_GetParam(this.getInstanceHandle,/*Int32*/Code)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClientData(/*String*/Namespace, /*String*/ClientData) {
        try{
            _NativeITerraExplorerObject80_SetClientData(this.getInstanceHandle,/*String*/allocateUTF8(String(Namespace)),/*String*/allocateUTF8(String(ClientData)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParam(/*Int32*/Code, /*Object*/Param) {
        try{
            _NativeITerraExplorerObject80_SetParam(this.getInstanceHandle,/*Int32*/Code,/*Object*/Emval.toHandle(Param));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class I3DMLFeatureLayer80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeI3DMLFeatureLayer80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FeatureProperties(){
        try{
            return new I3DMLFeatureProperties80(_NativeI3DMLFeatureLayer80_get_FeatureProperties(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeI3DMLFeatureLayer80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeI3DMLFeatureLayer80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DataSourceInfo(){
        try{
            return new IDataSourceInfo80(_NativeI3DMLFeatureLayer80_get_DataSourceInfo(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SelectedFeatures(){
        try{
            return new IFeatures80(_NativeI3DMLFeatureLayer80_get_SelectedFeatures(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    ExecuteGetDataSourceFeatureIdQuery(/*String*/FeatureID) {
        try{
            return new IFeature80(_NativeI3DMLFeatureLayer80_ExecuteGetDataSourceFeatureIdQuery(this.getInstanceHandle,/*String*/allocateUTF8(String(FeatureID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteQuery(/*String*/AttributeFilter, /*Int32*/NumOfFeatures=-1, /*String*/FromDataSourceFeatureId="", /*IGeometry*/AreaFilter=null) {
        try{
            return new IFeatures80(_NativeI3DMLFeatureLayer80_ExecuteQuery(this.getInstanceHandle,/*String*/allocateUTF8(String(AttributeFilter)),/*Int32*/NumOfFeatures,/*String*/allocateUTF8(String(FromDataSourceFeatureId)),/*IGeometry*/AreaFilter.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteSpatialQuery(/*IGeometry*/pIGeometry, /*IntersectionType*/IntersectionType=IntersectionType80.IT_INTERSECT) {
        try{
            return new IFeatures80(_NativeI3DMLFeatureLayer80_ExecuteSpatialQuery(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*IntersectionType*/IntersectionType));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAs(/*String*/ConnectionString, /*String*/AttributeFilter, /*IGeometry*/AreaFilter) {
        try{
            return UTF8ToString(_NativeI3DMLFeatureLayer80_SaveAs(this.getInstanceHandle,/*String*/allocateUTF8(String(ConnectionString)),/*String*/allocateUTF8(String(AttributeFilter)),/*IGeometry*/AreaFilter.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IProject80 extends TEIUnknownHandle80 {
    get Name(){
        try{
            return UTF8ToString(_NativeIProject80_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FileVersion(){
        try{
            return new ITEVersionInfo80(_NativeIProject80_get_FileVersion(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Settings(/*String*/paramName){                                    
        try{
            return EmvalToJS(Emval.toValue(_NativeIProject80_get_Settings(this.getInstanceHandle,/*String*/allocateUTF8(String(paramName)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Close(/*Boolean*/bSuppressConfirmation=false) {
        try{
            return _NativeIProject80_Close(this.getInstanceHandle,/*Boolean*/bSuppressConfirmation)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LoadFiles(/*Object*/FileNamesArray, /*String*/GroupID="") {
        try{
            _NativeIProject80_LoadFiles(this.getInstanceHandle,/*Object*/Emval.toHandle(FileNamesArray),/*String*/allocateUTF8(String(GroupID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Open(/*String*/ProjectURL, /*Boolean*/Asynchronous=false, /*String*/User="", /*String*/Password="") {
        try{
            _NativeIProject80_Open(this.getInstanceHandle,/*String*/allocateUTF8(String(ProjectURL)),/*Boolean*/Asynchronous,/*String*/allocateUTF8(String(User)),/*String*/allocateUTF8(String(Password)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PublishToSGS(/*Boolean*/HideProgressDialog=false, /*Boolean*/UseExistingLayers=true, /*Boolean*/ConvertModelLayersTo3DML=true, /*SGPublishPermission*/viewAccess=SGPublishPermission80.SG_PERMISSION_EVERYONE, /*SGPublishPermission*/editAccess=SGPublishPermission80.SG_PERMISSION_EVERYONE, /*String*/Tag="", /*String*/viewerToken="") {
        try{
            _NativeIProject80_PublishToSGS(this.getInstanceHandle,/*Boolean*/HideProgressDialog,/*Boolean*/UseExistingLayers,/*Boolean*/ConvertModelLayersTo3DML,/*SGPublishPermission*/viewAccess,/*SGPublishPermission*/editAccess,/*String*/allocateUTF8(String(Tag)),/*String*/allocateUTF8(String(viewerToken)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Save() {
        try{
            _NativeIProject80_Save(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAs(/*String*/ProjectFileName) {
        try{
            return UTF8ToString(_NativeIProject80_SaveAs(this.getInstanceHandle,/*String*/allocateUTF8(String(ProjectFileName))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class INavigate80 extends TEIUnknownHandle80 {
    get UndergroundMode(){
        try{
            return _NativeINavigate80_get_UndergroundMode(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UndergroundMode(/*Boolean*/pVal){
            try{
                _NativeINavigate80_put_UndergroundMode(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FieldOfView(){
        try{
            return _NativeINavigate80_get_FieldOfView(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FieldOfView(/*Double*/pVal){
            try{
                _NativeINavigate80_put_FieldOfView(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Speed(){
        try{
            return _NativeINavigate80_get_Speed(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Speed(/*Double*/pVal){
            try{
                _NativeINavigate80_put_Speed(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    DetectCollisionToTarget(/*IPosition80*/target) {
        try{
            return _NativeINavigate80_DetectCollisionToTarget(this.getInstanceHandle,/*IPosition80*/target.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FlyThrough(/*Object*/arrTargets) {
        try{
            _NativeINavigate80_FlyThrough(this.getInstanceHandle,/*Object*/Emval.toHandle(arrTargets));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FlyTo(/*Object*/target, /*ActionCode*/Pattern=ActionCode80.AC_FLYTO) {
        try{
            _NativeINavigate80_FlyTo(this.getInstanceHandle,/*Object*/Emval.toHandle(target),/*ActionCode*/Pattern);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetPosition(/*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode80.ATC_TERRAIN_RELATIVE) {
        try{
            return new IPosition80(_NativeINavigate80_GetPosition(this.getInstanceHandle,/*AltitudeTypeCode*/AltitudeType));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    JumpTo(/*Object*/target) {
        try{
            _NativeINavigate80_JumpTo(this.getInstanceHandle,/*Object*/Emval.toHandle(target));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGPSMode(/*GPSOperationMode*/GPSMode) {
        try{
            _NativeINavigate80_SetGPSMode(this.getInstanceHandle,/*GPSOperationMode*/GPSMode);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGPSPosition(/*IPosition80*/Position) {
        try{
            _NativeINavigate80_SetGPSPosition(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetPosition(/*IPosition80*/Position) {
        try{
            _NativeINavigate80_SetPosition(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Stop() {
        try{
            _NativeINavigate80_Stop(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ZoomIn(/*Double*/delta=0) {
        try{
            _NativeINavigate80_ZoomIn(this.getInstanceHandle,/*Double*/delta);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ZoomOut(/*Double*/delta=0) {
        try{
            _NativeINavigate80_ZoomOut(this.getInstanceHandle,/*Double*/delta);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ZoomTo(/*Double*/distanceFromPOI, /*Int32*/Flags=0) {
        try{
            _NativeINavigate80_ZoomTo(this.getInstanceHandle,/*Double*/distanceFromPOI,/*Int32*/Flags);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ICreator80 extends TEIUnknownHandle80 {
    get GeometryCreator(){
        try{
            return new IGeometryCreator80(_NativeICreator80_get_GeometryCreator(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Create3DArrow(/*IPosition80*/Position, /*Double*/Length, /*Int32*/Style=4, /*Double*/ObjectHeight=10, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrain3DArrow80(_NativeICreator80_Create3DArrow(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/Length,/*Int32*/Style,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Create3DPolygon(/*IGeometry*/pIGeometry, /*Double*/ObjectHeight=20, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode80.ATC_TERRAIN_RELATIVE, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrain3DPolygon80(_NativeICreator80_Create3DPolygon(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateArc(/*IPosition80*/Position, /*Double*/RadiusX, /*Double*/RadiusY, /*Double*/StartAngle=-90, /*Double*/EndAngle=90, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*Int32*/NumOfSegments=-1, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainArc80(_NativeICreator80_CreateArc(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/RadiusX,/*Double*/RadiusY,/*Double*/StartAngle,/*Double*/EndAngle,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*Int32*/NumOfSegments,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateArrow(/*IPosition80*/Position, /*Double*/Length, /*Int32*/Style=4, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainArrow80(_NativeICreator80_CreateArrow(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/Length,/*Int32*/Style,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateBox(/*IPosition80*/Position, /*Double*/ObjectWidth, /*Double*/ObjectDepth, /*Double*/ObjectHeight, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrain3DRectBase80(_NativeICreator80_CreateBox(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/ObjectWidth,/*Double*/ObjectDepth,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateBuilding(/*IGeometry*/pIGeometry, /*Double*/RoofHeight=20, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode80.ATC_TERRAIN_RELATIVE, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainBuilding80(_NativeICreator80_CreateBuilding(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Double*/RoofHeight,/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateCircle(/*IPosition80*/Position, /*Double*/Radius, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainRegularPolygon80(_NativeICreator80_CreateCircle(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/Radius,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateColor(/*Int32*/Red=255, /*Int32*/Green=255, /*Int32*/Blue=255, /*Int32*/Alpha=255) {
        try{
            return new IColor80(_NativeICreator80_CreateColor(this.getInstanceHandle,/*Int32*/Red,/*Int32*/Green,/*Int32*/Blue,/*Int32*/Alpha));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateCone(/*IPosition80*/Position, /*Double*/Radius, /*Double*/ObjectHeight=20, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*Int32*/NumOfSegments=-1, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrain3DRegBase80(_NativeICreator80_CreateCone(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/Radius,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*Int32*/NumOfSegments,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateCylinder(/*IPosition80*/Position, /*Double*/Radius, /*Double*/ObjectHeight=20, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*Int32*/NumOfSegments=-1, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrain3DRegBase80(_NativeICreator80_CreateCylinder(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/Radius,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*Int32*/NumOfSegments,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateDynamicObject(/*Object*/Waypoints=0, /*DynamicMotionStyle*/MotionStyle=DynamicMotionStyle80.MOTION_AIRPLANE, /*DynamicObjectType*/ObjectType=DynamicObjectType80.DYNAMIC_VIRTUAL, /*String*/FileNameOrText="", /*Double*/ScaleFactor=1, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode80.ATC_TERRAIN_RELATIVE, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainDynamicObject80(_NativeICreator80_CreateDynamicObject(this.getInstanceHandle,/*Object*/Emval.toHandle(Waypoints),/*DynamicMotionStyle*/MotionStyle,/*DynamicObjectType*/ObjectType,/*String*/allocateUTF8(String(FileNameOrText)),/*Double*/ScaleFactor,/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateEffect(/*IPosition80*/Position, /*String*/EffectsXML="", /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainEffect80(_NativeICreator80_CreateEffect(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*String*/allocateUTF8(String(EffectsXML)),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateElevationLayer(/*String*/ElevationFileName, /*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/LowerRightX, /*Double*/LowerRightY, /*Object*/InitParam="", /*Object*/PlugName="", /*String*/GroupID="", /*String*/Description="", /*Double*/HScale=1, /*Double*/HOffset=0) {
        try{
            return new ITerrainRasterLayer80(_NativeICreator80_CreateElevationLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(ElevationFileName)),/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/LowerRightX,/*Double*/LowerRightY,/*Object*/Emval.toHandle(InitParam),/*Object*/Emval.toHandle(PlugName),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description)),/*Double*/HScale,/*Double*/HOffset));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateEllipse(/*IPosition80*/Position, /*Double*/RadiusX, /*Double*/RadiusY, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*Int32*/NumOfSegments=-1, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainEllipse80(_NativeICreator80_CreateEllipse(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/RadiusX,/*Double*/RadiusY,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*Int32*/NumOfSegments,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateFeatureLayer(/*String*/layerName, /*String*/sConnectionString, /*String*/GroupID="") {
        try{
            return new IFeatureLayer80(_NativeICreator80_CreateFeatureLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(layerName)),/*String*/allocateUTF8(String(sConnectionString)),/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateFromStream(/*Object*/Stream, /*String*/GroupID="") {
        try{
            return GetITerraExplorerObject80Derived(_NativeICreator80_CreateFromStream(this.getInstanceHandle,/*Object*/Emval.toHandle(Stream),/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateHoleOnTerrain(/*IGeometry*/pIGeometry, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainHole80(_NativeICreator80_CreateHoleOnTerrain(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateImageLabel(/*IPosition80*/Position, /*String*/ImageFileName, /*ILabelStyle80*/LabelStyle=null, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainImageLabel80(_NativeICreator80_CreateImageLabel(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*String*/allocateUTF8(String(ImageFileName)),/*ILabelStyle80*/LabelStyle.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateImageLabelFromBuffer(/*IPosition80*/Position, /*Object*/buffer, /*Int32*/Width, /*Int32*/Height, /*ILabelStyle80*/LabelStyle=null, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainImageLabel80(_NativeICreator80_CreateImageLabelFromBuffer(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Object*/Emval.toHandle(buffer),/*Int32*/Width,/*Int32*/Height,/*ILabelStyle80*/LabelStyle.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateImageryLayer(/*String*/ImageryFileName, /*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/LowerRightX, /*Double*/LowerRightY, /*Object*/InitParam="", /*Object*/PlugName="", /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainRasterLayer80(_NativeICreator80_CreateImageryLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(ImageryFileName)),/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/LowerRightX,/*Double*/LowerRightY,/*Object*/Emval.toHandle(InitParam),/*Object*/Emval.toHandle(PlugName),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateKMLLayer(/*String*/Path, /*String*/GroupID="") {
        try{
            return new IKMLLayer80(_NativeICreator80_CreateKMLLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(Path)),/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLabel(/*IPosition80*/Position, /*String*/Text, /*String*/ImageFileName, /*ILabelStyle80*/LabelStyle=null, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainLabel80(_NativeICreator80_CreateLabel(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*String*/allocateUTF8(String(Text)),/*String*/allocateUTF8(String(ImageFileName)),/*ILabelStyle80*/LabelStyle.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLabelStyle(/*SGLabelStyle*/ls=SGLabelStyle80.LS_DEFAULT) {
        try{
            return new ILabelStyle80(_NativeICreator80_CreateLabelStyle(this.getInstanceHandle,/*SGLabelStyle*/ls));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLocation(/*IPosition80*/Position=null, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainLocation80(_NativeICreator80_CreateLocation(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLocationHere(/*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainLocation80(_NativeICreator80_CreateLocationHere(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMeshLayerFromFile(/*String*/FilePath, /*String*/ParentGroupID="") {
        try{
            return new IMeshLayer80(_NativeICreator80_CreateMeshLayerFromFile(this.getInstanceHandle,/*String*/allocateUTF8(String(FilePath)),/*String*/allocateUTF8(String(ParentGroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMeshLayerFromSGS(/*String*/ServerPath, /*String*/layerName, /*String*/ParentGroupID="") {
        try{
            return new IMeshLayer80(_NativeICreator80_CreateMeshLayerFromSGS(this.getInstanceHandle,/*String*/allocateUTF8(String(ServerPath)),/*String*/allocateUTF8(String(layerName)),/*String*/allocateUTF8(String(ParentGroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMessage(/*MsgTargetPosition*/TargetPosition, /*String*/msgData, /*MsgType*/Type, /*Boolean*/BringToFront=false) {
        try{
            return new ITerraExplorerMessage80(_NativeICreator80_CreateMessage(this.getInstanceHandle,/*MsgTargetPosition*/TargetPosition,/*String*/allocateUTF8(String(msgData)),/*MsgType*/Type,/*Boolean*/BringToFront));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateModel(/*IPosition80*/Position, /*String*/FileName, /*Double*/Scale=1, /*ModelTypeCode*/ModelType=ModelTypeCode80.MT_NORMAL, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainModel80(_NativeICreator80_CreateModel(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*String*/allocateUTF8(String(FileName)),/*Double*/Scale,/*ModelTypeCode*/ModelType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateNewFeatureLayer(/*String*/layerName, /*LayerGeometryType*/LayerGeomType, /*String*/sConnectionString, /*String*/GroupID="") {
        try{
            return new IFeatureLayer80(_NativeICreator80_CreateNewFeatureLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(layerName)),/*LayerGeometryType*/LayerGeomType,/*String*/allocateUTF8(String(sConnectionString)),/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePointCloudModel(/*String*/ModelFileName, /*IPosition80*/Position, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainPointCloudModel80(_NativeICreator80_CreatePointCloudModel(this.getInstanceHandle,/*String*/allocateUTF8(String(ModelFileName)),/*IPosition80*/Position.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePolygon(/*IGeometry*/pIGeometry, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode80.ATC_ON_TERRAIN, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainPolygon80(_NativeICreator80_CreatePolygon(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePolygonFromArray(/*Object*/verticesArray, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode80.ATC_ON_TERRAIN, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainPolygon80(_NativeICreator80_CreatePolygonFromArray(this.getInstanceHandle,/*Object*/Emval.toHandle(verticesArray),/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePolyline(/*IGeometry*/pIGeometry, /*Object*/LineColor=-16711936, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode80.ATC_ON_TERRAIN, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainPolyline80(_NativeICreator80_CreatePolyline(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Object*/Emval.toHandle(LineColor),/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePolylineFromArray(/*Object*/verticesArray, /*Object*/LineColor=-16711936, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode80.ATC_ON_TERRAIN, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainPolyline80(_NativeICreator80_CreatePolylineFromArray(this.getInstanceHandle,/*Object*/Emval.toHandle(verticesArray),/*Object*/Emval.toHandle(LineColor),/*AltitudeTypeCode*/AltitudeType,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePopupMessage(/*String*/Caption="", /*String*/Src="", /*Int32*/Left=0, /*Int32*/Top=0, /*Int32*/Width=0, /*Int32*/Height=0, /*Int32*/Timeout=-1) {
        try{
            return new IPopupMessage80(_NativeICreator80_CreatePopupMessage(this.getInstanceHandle,/*String*/allocateUTF8(String(Caption)),/*String*/allocateUTF8(String(Src)),/*Int32*/Left,/*Int32*/Top,/*Int32*/Width,/*Int32*/Height,/*Int32*/Timeout));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePosition(/*Double*/X=0, /*Double*/Y=0, /*Double*/Altitude=0, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode80.ATC_TERRAIN_RELATIVE, /*Double*/Yaw=0, /*Double*/Pitch=0, /*Double*/Roll=0, /*Double*/Distance=0) {
        try{
            return new IPosition80(_NativeICreator80_CreatePosition(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/Altitude,/*AltitudeTypeCode*/AltitudeType,/*Double*/Yaw,/*Double*/Pitch,/*Double*/Roll,/*Double*/Distance));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePresentation(/*String*/GroupID="", /*String*/Description="") {
        try{
            return new IPresentation80(_NativeICreator80_CreatePresentation(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePyramid(/*IPosition80*/Position, /*Double*/ObjectWidth, /*Double*/ObjectDepth, /*Double*/ObjectHeight, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrain3DRectBase80(_NativeICreator80_CreatePyramid(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/ObjectWidth,/*Double*/ObjectDepth,/*Double*/ObjectHeight,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateRectangle(/*IPosition80*/Position, /*Double*/ObjectWidth, /*Double*/ObjectDepth, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainRectangle80(_NativeICreator80_CreateRectangle(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/ObjectWidth,/*Double*/ObjectDepth,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateRegularPolygon(/*IPosition80*/Position, /*Double*/Radius, /*Int32*/NumOfSegments, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainRegularPolygon80(_NativeICreator80_CreateRegularPolygon(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/Radius,/*Int32*/NumOfSegments,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateRouteWaypoint(/*Double*/X=0, /*Double*/Y=0, /*Double*/Altitude=0, /*Double*/Speed=300, /*Double*/Yaw=0, /*Double*/Pitch=0, /*Double*/Roll=0, /*String*/MessageID="") {
        try{
            return new IRouteWaypoint80(_NativeICreator80_CreateRouteWaypoint(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/Altitude,/*Double*/Speed,/*Double*/Yaw,/*Double*/Pitch,/*Double*/Roll,/*String*/allocateUTF8(String(MessageID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateScreenOverlay(/*String*/ImageFileName, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new IScreenOverlay80(_NativeICreator80_CreateScreenOverlay(this.getInstanceHandle,/*String*/allocateUTF8(String(ImageFileName)),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateSphere(/*IPosition80*/Position, /*Double*/Radius, /*SphereStyle*/Style=SphereStyle80.SPHERE_NORMAL, /*Object*/LineColor=-16711936, /*Object*/FillColor=-10197916, /*Int32*/SegmentDensity=-1, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainSphere80(_NativeICreator80_CreateSphere(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/Radius,/*SphereStyle*/Style,/*Object*/Emval.toHandle(LineColor),/*Object*/Emval.toHandle(FillColor),/*Int32*/SegmentDensity,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateTerrainModifier(/*IGeometry*/pIGeometry, /*ElevationBehaviorMode*/Mode=ElevationBehaviorMode80.EB_REPLACE, /*Boolean*/Flat=true, /*Double*/Feather=0, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainModifier80(_NativeICreator80_CreateTerrainModifier(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*ElevationBehaviorMode*/Mode,/*Boolean*/Flat,/*Double*/Feather,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateTextLabel(/*IPosition80*/Position, /*String*/Text, /*ILabelStyle80*/LabelStyle=null, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainLabel80(_NativeICreator80_CreateTextLabel(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*String*/allocateUTF8(String(Text)),/*ILabelStyle80*/LabelStyle.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateTreeHotlink(/*String*/MessageID, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITreeHotlink80(_NativeICreator80_CreateTreeHotlink(this.getInstanceHandle,/*String*/allocateUTF8(String(MessageID)),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateVideoOnTerrain(/*String*/VideoFileName, /*IPosition80*/Position, /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ITerrainVideo80(_NativeICreator80_CreateVideoOnTerrain(this.getInstanceHandle,/*String*/allocateUTF8(String(VideoFileName)),/*IPosition80*/Position.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteObject(/*String*/ObjectID) {
        try{
            _NativeICreator80_DeleteObject(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetObject(/*String*/ObjectID) {
        try{
            return GetITerraExplorerObject80Derived(_NativeICreator80_GetObject(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IDrawing80 extends TEIUnknownHandle80 {
    DrawCircle(/*DrawingMode*/DrawingMode=DrawingMode80.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return new ITerrainRegularPolygon80(_NativeIDrawing80_DrawCircle(this.getInstanceHandle,/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawDynamicObject(/*String*/Path, /*DrawingMode*/DrawingMode=DrawingMode80.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return new ITerrainDynamicObject80(_NativeIDrawing80_DrawDynamicObject(this.getInstanceHandle,/*String*/allocateUTF8(String(Path)),/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawImageLabel(/*String*/ImagePath, /*DrawingMode*/DrawingMode=DrawingMode80.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return new ITerrainLabel80(_NativeIDrawing80_DrawImageLabel(this.getInstanceHandle,/*String*/allocateUTF8(String(ImagePath)),/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawModel(/*String*/Path, /*DrawingMode*/DrawingMode=DrawingMode80.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return new ITerrainModel80(_NativeIDrawing80_DrawModel(this.getInstanceHandle,/*String*/allocateUTF8(String(Path)),/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawPolygon(/*DrawingMode*/DrawingMode=DrawingMode80.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return new ITerrainPolygon80(_NativeIDrawing80_DrawPolygon(this.getInstanceHandle,/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawPolyline(/*DrawingMode*/DrawingMode=DrawingMode80.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return new ITerrainPolyline80(_NativeIDrawing80_DrawPolyline(this.getInstanceHandle,/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawRectangle(/*DrawingMode*/DrawingMode=DrawingMode80.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return new ITerrainRectangle80(_NativeIDrawing80_DrawRectangle(this.getInstanceHandle,/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawTextLabel(/*String*/Text, /*DrawingMode*/DrawingMode=DrawingMode80.DRAW_MODE_MAGNET, /*String*/GroupID="", /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return new ITerrainLabel80(_NativeIDrawing80_DrawTextLabel(this.getInstanceHandle,/*String*/allocateUTF8(String(Text)),/*DrawingMode*/DrawingMode,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Left,/*Int32*/Top));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IProjectTree80 extends TEIUnknownHandle80 {
    get HiddenGroupName(){
        try{
            return UTF8ToString(_NativeIProjectTree80_get_HiddenGroupName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HiddenGroupID(){
        try{
            return UTF8ToString(_NativeIProjectTree80_get_HiddenGroupID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get RootID(){
        try{
            return UTF8ToString(_NativeIProjectTree80_get_RootID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get NotInTreeID(){
        try{
            return UTF8ToString(_NativeIProjectTree80_get_NotInTreeID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ShowSearchTool(){
        try{
            return _NativeIProjectTree80_get_ShowSearchTool(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowSearchTool(/*Boolean*/pVal){
            try{
                _NativeIProjectTree80_put_ShowSearchTool(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    _EditItemEmbedded(/*String*/ID, /*Object*/ParentWindow) {
        try{
            _NativeIProjectTree80__EditItemEmbedded(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*Object*/Emval.toHandle(ParentWindow));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateGroup(/*String*/GroupName, /*String*/ParentGroupID="") {
        try{
            return UTF8ToString(_NativeIProjectTree80_CreateGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupName)),/*String*/allocateUTF8(String(ParentGroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLockedGroup(/*String*/GroupName, /*String*/ParentGroupID="") {
        try{
            return UTF8ToString(_NativeIProjectTree80_CreateLockedGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupName)),/*String*/allocateUTF8(String(ParentGroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteItem(/*String*/ID) {
        try{
            _NativeIProjectTree80_DeleteItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EditItem(/*String*/ID, /*EditItemFlags*/Flags=EditItemFlags80.EDIT_ITEM_USE_PROPERTY) {
        try{
            _NativeIProjectTree80_EditItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*EditItemFlags*/Flags);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EditItemEx(/*String*/ID, /*EditItemFlags*/Flags=EditItemFlags80.EDIT_ITEM_SHOW_PROPERTY, /*Object*/propertySheetVisibleGroups=0, /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            _NativeIProjectTree80_EditItemEx(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*EditItemFlags*/Flags,/*Object*/Emval.toHandle(propertySheetVisibleGroups),/*Int32*/Left,/*Int32*/Top);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EditItems(/*Object*/Items) {
        try{
            _NativeIProjectTree80_EditItems(this.getInstanceHandle,/*Object*/Emval.toHandle(Items));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EnableRedraw(/*Boolean*/bEnable) {
        try{
            _NativeIProjectTree80_EnableRedraw(this.getInstanceHandle,/*Boolean*/bEnable);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EndEdit() {
        try{
            _NativeIProjectTree80_EndEdit(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExpandGroup(/*String*/GroupID, /*Boolean*/bExpand) {
        try{
            _NativeIProjectTree80_ExpandGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Boolean*/bExpand);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FindItem(/*String*/PathName) {
        try{
            return UTF8ToString(_NativeIProjectTree80_FindItem(this.getInstanceHandle,/*String*/allocateUTF8(String(PathName))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetActivationCode(/*String*/GroupID) {
        try{
            return new IAction80(_NativeIProjectTree80_GetActivationCode(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetClientData(/*String*/ID, /*String*/Namespace) {
        try{
            return UTF8ToString(_NativeIProjectTree80_GetClientData(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*String*/allocateUTF8(String(Namespace))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetGroupEndTime(/*String*/GroupID) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIProjectTree80_GetGroupEndTime(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetGroupLocation(/*String*/GroupID) {
        try{
            return new IPosition80(_NativeIProjectTree80_GetGroupLocation(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetGroupMessageID(/*String*/GroupID) {
        try{
            return UTF8ToString(_NativeIProjectTree80_GetGroupMessageID(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetGroupStartTime(/*String*/GroupID) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIProjectTree80_GetGroupStartTime(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetItemName(/*String*/ID) {
        try{
            return UTF8ToString(_NativeIProjectTree80_GetItemName(this.getInstanceHandle,/*String*/allocateUTF8(String(ID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetLayer(/*String*/GroupID) {
        try{
            return new IFeatureLayer80(_NativeIProjectTree80_GetLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetNextItem(/*String*/ID, /*ItemCode*/Code) {
        try{
            return UTF8ToString(_NativeIProjectTree80_GetNextItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*ItemCode*/Code));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetObject(/*String*/ID) {
        try{
            return GetITerraExplorerObject80Derived(_NativeIProjectTree80_GetObject(this.getInstanceHandle,/*String*/allocateUTF8(String(ID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetVisibility(/*String*/ID) {
        try{
            return _NativeIProjectTree80_GetVisibility(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsExpanded(/*String*/GroupID) {
        try{
            return _NativeIProjectTree80_IsExpanded(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsGroup(/*String*/ID) {
        try{
            return _NativeIProjectTree80_IsGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsLayer(/*String*/GroupID) {
        try{
            return _NativeIProjectTree80_IsLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsLocked(/*String*/GroupID) {
        try{
            return _NativeIProjectTree80_IsLocked(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsRadioGroup(/*String*/GroupID) {
        try{
            return _NativeIProjectTree80_IsRadioGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LoadFlyLayer(/*String*/FlyURL, /*String*/ParentGroupID="") {
        try{
            return UTF8ToString(_NativeIProjectTree80_LoadFlyLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(FlyURL)),/*String*/allocateUTF8(String(ParentGroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LoadKmlLayer(/*String*/KmlURL, /*String*/ParentGroupID="") {
        try{
            return UTF8ToString(_NativeIProjectTree80_LoadKmlLayer(this.getInstanceHandle,/*String*/allocateUTF8(String(KmlURL)),/*String*/allocateUTF8(String(ParentGroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LockGroup(/*String*/GroupID, /*Boolean*/bLock) {
        try{
            _NativeIProjectTree80_LockGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Boolean*/bLock);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RenameGroup(/*String*/GroupID, /*String*/GroupName) {
        try{
            _NativeIProjectTree80_RenameGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(GroupName)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAsFly(/*String*/FlyName, /*String*/GroupID) {
        try{
            return UTF8ToString(_NativeIProjectTree80_SaveAsFly(this.getInstanceHandle,/*String*/allocateUTF8(String(FlyName)),/*String*/allocateUTF8(String(GroupID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAsKml(/*String*/KmlName, /*String*/ObjectID) {
        try{
            return UTF8ToString(_NativeIProjectTree80_SaveAsKml(this.getInstanceHandle,/*String*/allocateUTF8(String(KmlName)),/*String*/allocateUTF8(String(ObjectID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SelectItem(/*String*/ID, /*Int32*/Flags=0, /*Int32*/Reserved=0) {
        try{
            _NativeIProjectTree80_SelectItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*Int32*/Flags,/*Int32*/Reserved);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetActivationCode(/*String*/GroupID, /*ActionCode*/ACode, /*Int32*/ActivationParam=-1) {
        try{
            _NativeIProjectTree80_SetActivationCode(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*ActionCode*/ACode,/*Int32*/ActivationParam);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClientData(/*String*/ID, /*String*/Namespace, /*String*/ClientData) {
        try{
            _NativeIProjectTree80_SetClientData(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*String*/allocateUTF8(String(Namespace)),/*String*/allocateUTF8(String(ClientData)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGroupEndTime(/*String*/GroupID, /*Object*/newVal) {
        try{
            _NativeIProjectTree80_SetGroupEndTime(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Object*/Emval.toHandle(newVal));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGroupLocation(/*String*/GroupID, /*Object*/newVal) {
        try{
            _NativeIProjectTree80_SetGroupLocation(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Object*/Emval.toHandle(newVal));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGroupMessageID(/*String*/GroupID, /*String*/MessageID) {
        try{
            _NativeIProjectTree80_SetGroupMessageID(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(MessageID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetGroupStartTime(/*String*/GroupID, /*Object*/newVal) {
        try{
            _NativeIProjectTree80_SetGroupStartTime(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Object*/Emval.toHandle(newVal));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParent(/*String*/ID, /*String*/ParentGroupID) {
        try{
            _NativeIProjectTree80_SetParent(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*String*/allocateUTF8(String(ParentGroupID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetRadioGroup(/*String*/GroupID, /*Boolean*/bRadio) {
        try{
            _NativeIProjectTree80_SetRadioGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Boolean*/bRadio);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetVisibility(/*String*/ID, /*Boolean*/bShow) {
        try{
            _NativeIProjectTree80_SetVisibility(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*Boolean*/bShow);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowSubTree(/*String*/GroupID, /*Int32*/Flags) {
        try{
            _NativeIProjectTree80_ShowSubTree(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*Int32*/Flags);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SortGroup(/*String*/GroupID, /*SortType*/SType=SortType80.SORT_ALPHABETICALLY_AZ) {
        try{
            _NativeIProjectTree80_SortGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(GroupID)),/*SortType*/SType);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IWindow80 extends TEIUnknownHandle80 {
    get Cursor(){
        try{
            return UTF8ToString(_NativeIWindow80_get_Cursor(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Cursor(/*String*/cursorURL){
            try{
                _NativeIWindow80_put_Cursor(this.getInstanceHandle,/*String*/allocateUTF8(String(cursorURL))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DisablePresentationControl(){
        try{
            return _NativeIWindow80_get_DisablePresentationControl(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisablePresentationControl(/*Boolean*/pVal){
            try{
                _NativeIWindow80_put_DisablePresentationControl(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Rect(){
        try{
            return new IScreenRect80(_NativeIWindow80_get_Rect(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    CenterPixelToWorld(/*WorldPointType*/TypeFilterFlags=WorldPointType80.WPT_DEFAULT) {
        try{
            return new IWorldPointInfo80(_NativeIWindow80_CenterPixelToWorld(this.getInstanceHandle,/*WorldPointType*/TypeFilterFlags));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetControls() {
        try{
            return _NativeIWindow80_GetControls(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetInputMode() {
        try{
            return _NativeIWindow80_GetInputMode(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetMouseInfo() {
        try{
            return new IMouseInfo80(_NativeIWindow80_GetMouseInfo(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetPopupByCaption(/*String*/PopupCaption) {
        try{
            return new IPopupMessage80(_NativeIWindow80_GetPopupByCaption(this.getInstanceHandle,/*String*/allocateUTF8(String(PopupCaption))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetPopups() {
        try{
            return EmvalToJS(Emval.toValue(_NativeIWindow80_GetPopups(this.getInstanceHandle)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetSnapShot(/*Boolean*/toFile=false, /*Int32*/Width=0, /*Int32*/Height=0, /*String*/Format="", /*Int32*/TerrainQuality=0) {
        try{
            return UTF8ToString(_NativeIWindow80_GetSnapShot(this.getInstanceHandle,/*Boolean*/toFile,/*Int32*/Width,/*Int32*/Height,/*String*/allocateUTF8(String(Format)),/*Int32*/TerrainQuality));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    HideMessageBarText() {
        try{
            _NativeIWindow80_HideMessageBarText(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PixelFromWorld(/*IPosition80*/Position, /*PixelFromWorldMode*/Mode=PixelFromWorldMode80.PFW_IGNORE_Z_BUFFER) {
        try{
            return new IScreenPointInfo80(_NativeIWindow80_PixelFromWorld(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*PixelFromWorldMode*/Mode));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PixelToObjects(/*Int32*/PixelX, /*Int32*/PixelY, /*WorldPointType*/TypeFilterFlags=WorldPointType80.WPT_DEFAULT) {
        try{
            return new ITerraExplorerObjects80(_NativeIWindow80_PixelToObjects(this.getInstanceHandle,/*Int32*/PixelX,/*Int32*/PixelY,/*WorldPointType*/TypeFilterFlags));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PixelToWorld(/*Int32*/PixelX, /*Int32*/PixelY, /*WorldPointType*/TypeFilterFlags=WorldPointType80.WPT_DEFAULT) {
        try{
            return new IWorldPointInfo80(_NativeIWindow80_PixelToWorld(this.getInstanceHandle,/*Int32*/PixelX,/*Int32*/PixelY,/*WorldPointType*/TypeFilterFlags));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemovePopup(/*IPopupMessage80*/popup) {
        try{
            _NativeIWindow80_RemovePopup(this.getInstanceHandle,/*IPopupMessage80*/popup.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemovePopupByCaption(/*String*/PopupCaption) {
        try{
            _NativeIWindow80_RemovePopupByCaption(this.getInstanceHandle,/*String*/allocateUTF8(String(PopupCaption)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetInputMode(/*MouseInputMode*/InputMode, /*String*/cursorURL="", /*Boolean*/AllowDrag=false) {
        try{
            _NativeIWindow80_SetInputMode(this.getInstanceHandle,/*MouseInputMode*/InputMode,/*String*/allocateUTF8(String(cursorURL)),/*Boolean*/AllowDrag);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowControls(/*Int32*/controlFlags) {
        try{
            _NativeIWindow80_ShowControls(this.getInstanceHandle,/*Int32*/controlFlags);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowMessageBarText(/*String*/Text, /*MessageBarTextAlignment*/Alignment=MessageBarTextAlignment80.MBT_CENTER, /*Int32*/Timeout=5000) {
        try{
            _NativeIWindow80_ShowMessageBarText(this.getInstanceHandle,/*String*/allocateUTF8(String(Text)),/*MessageBarTextAlignment*/Alignment,/*Int32*/Timeout);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowPopup(/*IPopupMessage80*/popup) {
        try{
            _NativeIWindow80_ShowPopup(this.getInstanceHandle,/*IPopupMessage80*/popup.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrain80 extends TEIUnknownHandle80 {
    get CoordinateSystem(){
        try{
            return new ICoordinateSystem80(_NativeITerrain80_get_CoordinateSystem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CoordinateSystem(/*ICoordinateSystem80*/pVal){
            try{
                _NativeITerrain80_put_CoordinateSystem(this.getInstanceHandle,/*ICoordinateSystem80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Name(){
        try{
            return UTF8ToString(_NativeITerrain80_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Levels(){
        try{
            return _NativeITerrain80_get_Levels(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get BestLevelWidth(){
        try{
            return _NativeITerrain80_get_BestLevelWidth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get BestMPP(){
        try{
            return _NativeITerrain80_get_BestMPP(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Description(){
        try{
            return UTF8ToString(_NativeITerrain80_get_Description(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Left(){
        try{
            return _NativeITerrain80_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeITerrain80_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Right(){
        try{
            return _NativeITerrain80_get_Right(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Bottom(){
        try{
            return _NativeITerrain80_get_Bottom(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Opacity(){
        try{
            return _NativeITerrain80_get_Opacity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Opacity(/*Double*/Opacity){
            try{
                _NativeITerrain80_put_Opacity(this.getInstanceHandle,/*Double*/Opacity); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get StreamQuality(){
        try{
            return _NativeITerrain80_get_StreamQuality(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetGroundHeightInfo(/*Double*/X, /*Double*/Y, /*AccuracyLevel*/Level, /*Boolean*/IncludeGroundObject=true) {
        try{
            return new IWorldPointInfo80(_NativeITerrain80_GetGroundHeightInfo(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*AccuracyLevel*/Level,/*Boolean*/IncludeGroundObject));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ILicenseManager80 extends TEIUnknownHandle80 {
    GetAttribute(/*String*/Module, /*String*/AttributeName) {
        try{
            return UTF8ToString(_NativeILicenseManager80_GetAttribute(this.getInstanceHandle,/*String*/allocateUTF8(String(Module)),/*String*/allocateUTF8(String(AttributeName))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetModuleInfo(/*String*/Module) {
        try{
            return new IModuleLicenseInfo80(_NativeILicenseManager80_GetModuleInfo(this.getInstanceHandle,/*String*/allocateUTF8(String(Module))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetPermission(/*Int32*/PermissionCode, /*Object*/parameters) {
        try{
            return _NativeILicenseManager80_GetPermission(this.getInstanceHandle,/*Int32*/PermissionCode,/*Object*/Emval.toHandle(parameters));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClientID(/*String*/Module, /*String*/ClientID) {
        try{
            _NativeILicenseManager80_SetClientID(this.getInstanceHandle,/*String*/allocateUTF8(String(Module)),/*String*/allocateUTF8(String(ClientID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ICoordServices80 extends TEIUnknownHandle80 {
    get SourceCoordinateSystem(){
        try{
            return new ICoordinateSystem80(_NativeICoordServices80_get_SourceCoordinateSystem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SourceCoordinateSystem(/*ICoordinateSystem80*/pVal){
            try{
                _NativeICoordServices80_put_SourceCoordinateSystem(this.getInstanceHandle,/*ICoordinateSystem80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShiftGridURL(){
        try{
            return UTF8ToString(_NativeICoordServices80_get_ShiftGridURL(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShiftGridURL(/*String*/pVal){
            try{
                _NativeICoordServices80_put_ShiftGridURL(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    ChooseCSDialog(/*String*/Title, /*String*/WellKnownText) {
        try{
            return UTF8ToString(_NativeICoordServices80_ChooseCSDialog(this.getInstanceHandle,/*String*/allocateUTF8(String(Title)),/*String*/allocateUTF8(String(WellKnownText))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ConvertCoordinateToMGRS(/*Double*/X, /*Double*/Y) {
        try{
            return UTF8ToString(_NativeICoordServices80_ConvertCoordinateToMGRS(this.getInstanceHandle,/*Double*/X,/*Double*/Y));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ConvertMGRSToCoordinate(/*String*/bstrMGRS) {
        try{
            return new ICoord2D80(_NativeICoordServices80_ConvertMGRSToCoordinate(this.getInstanceHandle,/*String*/allocateUTF8(String(bstrMGRS))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateCoordinateSystem(/*String*/WellKnownText) {
        try{
            return new ICoordinateSystem80(_NativeICoordServices80_CreateCoordinateSystem(this.getInstanceHandle,/*String*/allocateUTF8(String(WellKnownText))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetAimingAngles(/*IPosition80*/From, /*IPosition80*/To) {
        try{
            return new IPosition80(_NativeICoordServices80_GetAimingAngles(this.getInstanceHandle,/*IPosition80*/From.getInstanceHandle,/*IPosition80*/To.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetDistance(/*Double*/X1, /*Double*/Y1, /*Double*/X2, /*Double*/Y2) {
        try{
            return _NativeICoordServices80_GetDistance(this.getInstanceHandle,/*Double*/X1,/*Double*/Y1,/*Double*/X2,/*Double*/Y2);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetDistance3D(/*IPosition80*/From, /*IPosition80*/To) {
        try{
            return _NativeICoordServices80_GetDistance3D(this.getInstanceHandle,/*IPosition80*/From.getInstanceHandle,/*IPosition80*/To.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetParam(/*Int32*/Code) {
        try{
            return EmvalToJS(Emval.toValue(_NativeICoordServices80_GetParam(this.getInstanceHandle,/*Int32*/Code)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MoveCoord(/*Double*/X, /*Double*/Y, /*Double*/moveWestEast, /*Double*/moveSouthNorth) {
        try{
            return new ICoord2D80(_NativeICoordServices80_MoveCoord(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/moveWestEast,/*Double*/moveSouthNorth));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Reproject(/*ICoordinateSystem80*/From, /*ICoordinateSystem80*/To, /*Double*/X, /*Double*/Y) {
        try{
            return new ICoord2D80(_NativeICoordServices80_Reproject(this.getInstanceHandle,/*ICoordinateSystem80*/From.getInstanceHandle,/*ICoordinateSystem80*/To.getInstanceHandle,/*Double*/X,/*Double*/Y));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ReprojectEx(/*ICoordinateSystem80*/From, /*ICoordinateSystem80*/To, /*Double*/X, /*Double*/Y, /*Double*/Z) {
        try{
            return new ICoord3D80(_NativeICoordServices80_ReprojectEx(this.getInstanceHandle,/*ICoordinateSystem80*/From.getInstanceHandle,/*ICoordinateSystem80*/To.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/Z));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParam(/*Int32*/Code, /*Object*/Param) {
        try{
            _NativeICoordServices80_SetParam(this.getInstanceHandle,/*Int32*/Code,/*Object*/Emval.toHandle(Param));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IDateTime80 extends TEIUnknownHandle80 {
    get TimeZoneMode(){
        try{
            return _NativeIDateTime80_get_TimeZoneMode(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TimeZoneMode(/*TimeZoneType*/pVal){
            try{
                _NativeIDateTime80_put_TimeZoneMode(this.getInstanceHandle,/*TimeZoneType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DisplaySun(){
        try{
            return _NativeIDateTime80_get_DisplaySun(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisplaySun(/*Boolean*/pVal){
            try{
                _NativeIDateTime80_put_DisplaySun(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Current(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIDateTime80_get_Current(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Current(/*Object*/pVal){
            try{
                _NativeIDateTime80_put_Current(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CurrentTimeBuffer(){
        try{
            return _NativeIDateTime80_get_CurrentTimeBuffer(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CurrentTimeBuffer(/*Int32*/pSeconds){
            try{
                _NativeIDateTime80_put_CurrentTimeBuffer(this.getInstanceHandle,/*Int32*/pSeconds); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FixedLocalTime(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIDateTime80_get_FixedLocalTime(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FixedLocalTime(/*Object*/pVal){
            try{
                _NativeIDateTime80_put_FixedLocalTime(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TimeRangeStart(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIDateTime80_get_TimeRangeStart(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TimeRangeStart(/*Object*/pVal){
            try{
                _NativeIDateTime80_put_TimeRangeStart(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TimeRangeEnd(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIDateTime80_get_TimeRangeEnd(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TimeRangeEnd(/*Object*/pVal){
            try{
                _NativeIDateTime80_put_TimeRangeEnd(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TimeZoneKey(){
        try{
            return UTF8ToString(_NativeIDateTime80_get_TimeZoneKey(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TimeZoneKey(/*String*/pVal){
            try{
                _NativeIDateTime80_put_TimeZoneKey(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TimeZoneDisplayName(){
        try{
            return UTF8ToString(_NativeIDateTime80_get_TimeZoneDisplayName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeZonesXML(){
        try{
            return UTF8ToString(_NativeIDateTime80_get_TimeZonesXML(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    SetMode(/*SliderDisplayMode*/Mode) {
        try{
            _NativeIDateTime80_SetMode(this.getInstanceHandle,/*SliderDisplayMode*/Mode);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITEVersionInfo80 extends TEIUnknownHandle80 {
    get Major(){
        try{
            return _NativeITEVersionInfo80_get_Major(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Minor(){
        try{
            return _NativeITEVersionInfo80_get_Minor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Build(){
        try{
            return _NativeITEVersionInfo80_get_Build(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Freeze(){
        try{
            return _NativeITEVersionInfo80_get_Freeze(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Type(){
        try{
            return _NativeITEVersionInfo80_get_Type(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IApplication80 extends TEIUnknownHandle80 {
    get Containers(){
        try{
            return new IContainers80(_NativeIApplication80_get_Containers(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get CPUSaveMode(){
        try{
            return _NativeIApplication80_get_CPUSaveMode(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CPUSaveMode(/*Boolean*/pVal){
            try{
                _NativeIApplication80_put_CPUSaveMode(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SuppressUIErrors(){
        try{
            return _NativeIApplication80_get_SuppressUIErrors(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SuppressUIErrors(/*Boolean*/pVal){
            try{
                _NativeIApplication80_put_SuppressUIErrors(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DataPath(){
        try{
            return UTF8ToString(_NativeIApplication80_get_DataPath(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ExecutablePath(){
        try{
            return UTF8ToString(_NativeIApplication80_get_ExecutablePath(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get EnableJoystick(){
        try{
            return _NativeIApplication80_get_EnableJoystick(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set EnableJoystick(/*Boolean*/pVal){
            try{
                _NativeIApplication80_put_EnableJoystick(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Multiple3DWindows(){
        try{
            return new IMultiple3DWindows80(_NativeIApplication80_get_Multiple3DWindows(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Clipboard(){
        try{
            return new IClipboard80(_NativeIApplication80_get_Clipboard(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Selection(){
        try{
            return new ISelection80(_NativeIApplication80_get_Selection(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TargetFrameRate(){
        try{
            return _NativeIApplication80_get_TargetFrameRate(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TargetFrameRate(/*Int32*/pVal){
            try{
                _NativeIApplication80_put_TargetFrameRate(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Caption(){
        try{
            return UTF8ToString(_NativeIApplication80_get_Caption(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Caption(/*String*/pVal){
            try{
                _NativeIApplication80_put_Caption(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FullScreen(){
        try{
            return _NativeIApplication80_get_FullScreen(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FullScreen(/*FullScreenMode*/pVal){
            try{
                _NativeIApplication80_put_FullScreen(this.getInstanceHandle,/*FullScreenMode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    Search(/*String*/stringToSearch) {
        try{
            _NativeIApplication80_Search(this.getInstanceHandle,/*String*/allocateUTF8(String(stringToSearch)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ICommand80 extends TEIUnknownHandle80 {
    CanExecute(/*Int32*/CommandID, /*Object*/parameter) {
        try{
            return _NativeICommand80_CanExecute(this.getInstanceHandle,/*Int32*/CommandID,/*Object*/Emval.toHandle(parameter))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Execute(/*Int32*/CommandID, /*Object*/parameters) {
        try{
            _NativeICommand80_Execute(this.getInstanceHandle,/*Int32*/CommandID,/*Object*/Emval.toHandle(parameters));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetValue(/*Int32*/CommandID) {
        try{
            return EmvalToJS(Emval.toValue(_NativeICommand80_GetValue(this.getInstanceHandle,/*Int32*/CommandID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsChecked(/*Int32*/CommandID, /*Object*/parameters) {
        try{
            return _NativeICommand80_IsChecked(this.getInstanceHandle,/*Int32*/CommandID,/*Object*/Emval.toHandle(parameters))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IAnalysis80 extends TEIUnknownHandle80 {
    Create3DViewshed(/*IPosition80*/ViewerPosition, /*Double*/FieldOfViewX, /*Double*/FieldOfViewY, /*Double*/Distance, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return new I3DViewshed80(_NativeIAnalysis80_Create3DViewshed(this.getInstanceHandle,/*IPosition80*/ViewerPosition.getInstanceHandle,/*Double*/FieldOfViewX,/*Double*/FieldOfViewY,/*Double*/Distance,/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateContourMap(/*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/LowerRightX, /*Double*/LowerRightY, /*ContourDisplayStyle*/DisplayStyle=ContourDisplayStyle80.CDS_CONTOUR_STYLE_COLORS, /*String*/PaletteID="", /*String*/GroupID="", /*String*/Description="") {
        try{
            return new IContourMap80(_NativeIAnalysis80_CreateContourMap(this.getInstanceHandle,/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/LowerRightX,/*Double*/LowerRightY,/*ContourDisplayStyle*/DisplayStyle,/*String*/allocateUTF8(String(PaletteID)),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateFloodContinuousWaterRise(/*Double*/OriginX, /*Double*/OriginY, /*Double*/Radius, /*Double*/WaterRiseRate, /*Double*/SampleInterval, /*Double*/TimeSampleIntervalHours, /*Object*/StartTime, /*Object*/EndTime, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return UTF8ToString(_NativeIAnalysis80_CreateFloodContinuousWaterRise(this.getInstanceHandle,/*Double*/OriginX,/*Double*/OriginY,/*Double*/Radius,/*Double*/WaterRiseRate,/*Double*/SampleInterval,/*Double*/TimeSampleIntervalHours,/*Object*/Emval.toHandle(StartTime),/*Object*/Emval.toHandle(EndTime),/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateFloodSingleWaterRise(/*Double*/OriginX, /*Double*/OriginY, /*Double*/Radius, /*Double*/TotalWaterLevelRaise, /*Double*/SampleInterval, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return UTF8ToString(_NativeIAnalysis80_CreateFloodSingleWaterRise(this.getInstanceHandle,/*Double*/OriginX,/*Double*/OriginY,/*Double*/Radius,/*Double*/TotalWaterLevelRaise,/*Double*/SampleInterval,/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLineOfSight(/*IPosition80*/ViewerPosition, /*Double*/SampleInterval, /*Object*/arrTargetPosition, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return new ILineOfSight80(_NativeIAnalysis80_CreateLineOfSight(this.getInstanceHandle,/*IPosition80*/ViewerPosition.getInstanceHandle,/*Double*/SampleInterval,/*Object*/Emval.toHandle(arrTargetPosition),/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateSlopeMap(/*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/LowerRightX, /*Double*/LowerRightY, /*SlopeDisplayStyle*/DisplayStyle=SlopeDisplayStyle80.SDS_SLOPE_STYLE_COLORS, /*String*/PaletteID="", /*String*/GroupID="", /*String*/Description="") {
        try{
            return new ISlopeMap80(_NativeIAnalysis80_CreateSlopeMap(this.getInstanceHandle,/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/LowerRightX,/*Double*/LowerRightY,/*SlopeDisplayStyle*/DisplayStyle,/*String*/allocateUTF8(String(PaletteID)),/*String*/allocateUTF8(String(GroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateThreatDome(/*IPosition80*/Position, /*Double*/Range, /*Double*/AngularStep, /*Double*/RadialStep, /*Double*/Direction, /*Double*/HorizontalFOV, /*Double*/ElevationAngle, /*Object*/Color=-16711936, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return new ITerrainThreatDome80(_NativeIAnalysis80_CreateThreatDome(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/Range,/*Double*/AngularStep,/*Double*/RadialStep,/*Double*/Direction,/*Double*/HorizontalFOV,/*Double*/ElevationAngle,/*Object*/Emval.toHandle(Color),/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateViewshed(/*IPosition80*/ViewerPosition, /*Double*/FieldOfView, /*Double*/SampleInterval, /*Double*/RaySpacing, /*Double*/TargetHeightAboveGround, /*Object*/TimeStart, /*Object*/TimeEnd, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return UTF8ToString(_NativeIAnalysis80_CreateViewshed(this.getInstanceHandle,/*IPosition80*/ViewerPosition.getInstanceHandle,/*Double*/FieldOfView,/*Double*/SampleInterval,/*Double*/RaySpacing,/*Double*/TargetHeightAboveGround,/*Object*/Emval.toHandle(TimeStart),/*Object*/Emval.toHandle(TimeEnd),/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateViewshedOnRoute(/*ILineString*/Route, /*MultipleViewshedAnalysisType*/AnalysisType, /*Double*/ViewerHeight, /*Double*/Distance, /*Double*/SampleInterval, /*Double*/RaySpacing, /*Double*/DistanceBetweenWaypoints, /*Object*/TimeStart, /*Object*/TimeEnd, /*String*/ParentGroupID="", /*String*/Description="") {
        try{
            return UTF8ToString(_NativeIAnalysis80_CreateViewshedOnRoute(this.getInstanceHandle,/*ILineString*/Route.getInstanceHandle,/*MultipleViewshedAnalysisType*/AnalysisType,/*Double*/ViewerHeight,/*Double*/Distance,/*Double*/SampleInterval,/*Double*/RaySpacing,/*Double*/DistanceBetweenWaypoints,/*Object*/Emval.toHandle(TimeStart),/*Object*/Emval.toHandle(TimeEnd),/*String*/allocateUTF8(String(ParentGroupID)),/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EndVisibilityQuery() {
        try{
            _NativeIAnalysis80_EndVisibilityQuery(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    HideCompareBox() {
        try{
            _NativeIAnalysis80_HideCompareBox(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    HideCrossSectionBox() {
        try{
            _NativeIAnalysis80_HideCrossSectionBox(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainArea(/*IGeometry*/pIGeometry) {
        try{
            return _NativeIAnalysis80_MeasureTerrainArea(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainGroundDistance(/*IGeometry*/pIGeometry, /*Double*/SampleInterval, /*Boolean*/IncludeGroundObjects=false) {
        try{
            return _NativeIAnalysis80_MeasureTerrainGroundDistance(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Double*/SampleInterval,/*Boolean*/IncludeGroundObjects);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainPerimeter(/*IGeometry*/pIGeometry) {
        try{
            return _NativeIAnalysis80_MeasureTerrainPerimeter(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainProfile(/*IGeometry*/KeyPoints, /*Double*/SampleInterval, /*Boolean*/IncludeGroundObjects=false) {
        try{
            return GetIGeometry80Derived(_NativeIAnalysis80_MeasureTerrainProfile(this.getInstanceHandle,/*IGeometry*/KeyPoints.getInstanceHandle,/*Double*/SampleInterval,/*Boolean*/IncludeGroundObjects));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainSurface(/*IGeometry*/pIGeometry, /*Double*/SampleInterval) {
        try{
            return _NativeIAnalysis80_MeasureTerrainSurface(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Double*/SampleInterval);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MeasureTerrainSurfacePerimeter(/*IGeometry*/pIGeometry, /*Double*/SampleInterval) {
        try{
            return _NativeIAnalysis80_MeasureTerrainSurfacePerimeter(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*Double*/SampleInterval);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    QueryElevationBuffer(/*Double*/UpperLeftX, /*Double*/UpperLeftY, /*Double*/ResX, /*Double*/ResY, /*Int32*/DimensionX, /*Int32*/DimensionY) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIAnalysis80_QueryElevationBuffer(this.getInstanceHandle,/*Double*/UpperLeftX,/*Double*/UpperLeftY,/*Double*/ResX,/*Double*/ResY,/*Int32*/DimensionX,/*Int32*/DimensionY)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    QueryPointVisibility(/*IPosition80*/QueryPosition) {
        try{
            return _NativeIAnalysis80_QueryPointVisibility(this.getInstanceHandle,/*IPosition80*/QueryPosition.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    QueryVisibilityDistance(/*IPosition80*/QueryPosition) {
        try{
            return _NativeIAnalysis80_QueryVisibilityDistance(this.getInstanceHandle,/*IPosition80*/QueryPosition.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetCompareGroup(/*String*/ID, /*CompareGroup*/Group) {
        try{
            _NativeIAnalysis80_SetCompareGroup(this.getInstanceHandle,/*String*/allocateUTF8(String(ID)),/*CompareGroup*/Group);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowCompareBox(/*ILineString*/Box, /*Boolean*/ShowIn, /*Object*/Color) {
        try{
            _NativeIAnalysis80_ShowCompareBox(this.getInstanceHandle,/*ILineString*/Box.getInstanceHandle,/*Boolean*/ShowIn,/*Object*/Emval.toHandle(Color));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowCrossSectionBox(/*ILineString*/Box, /*Boolean*/ShowIn, /*Object*/Color) {
        try{
            _NativeIAnalysis80_ShowCrossSectionBox(this.getInstanceHandle,/*ILineString*/Box.getInstanceHandle,/*Boolean*/ShowIn,/*Object*/Emval.toHandle(Color));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    StartShadowVisibilityQuery(/*IPosition80*/QuerySpherePosition, /*Double*/QuerySphereRadius, /*ShadowType*/Type) {
        try{
            _NativeIAnalysis80_StartShadowVisibilityQuery(this.getInstanceHandle,/*IPosition80*/QuerySpherePosition.getInstanceHandle,/*Double*/QuerySphereRadius,/*ShadowType*/Type);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    StartViewshedVisibilityQuery(/*String*/ViewshedID, /*ViewshedQuality*/Quality=ViewshedQuality80.VSQ_QUALITY_HIGH) {
        try{
            _NativeIAnalysis80_StartViewshedVisibilityQuery(this.getInstanceHandle,/*String*/allocateUTF8(String(ViewshedID)),/*ViewshedQuality*/Quality);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ISGServer80 extends TEIUnknownHandle80 {
    Connect(/*String*/URL, /*String*/UserName, /*String*/Password, /*String*/sCookie="") {
        try{
            _NativeISGServer80_Connect(this.getInstanceHandle,/*String*/allocateUTF8(String(URL)),/*String*/allocateUTF8(String(UserName)),/*String*/allocateUTF8(String(Password)),/*String*/allocateUTF8(String(sCookie)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Disconnect() {
        try{
            _NativeISGServer80_Disconnect(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetConnectedServer() {
        try{
            return UTF8ToString(_NativeISGServer80_GetConnectedServer(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetConnectedUser() {
        try{
            return UTF8ToString(_NativeISGServer80_GetConnectedUser(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetParam(/*Int32*/Code) {
        try{
            return EmvalToJS(Emval.toValue(_NativeISGServer80_GetParam(this.getInstanceHandle,/*Int32*/Code)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetUserDisplayName() {
        try{
            return UTF8ToString(_NativeISGServer80_GetUserDisplayName(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetVersion() {
        try{
            return UTF8ToString(_NativeISGServer80_GetVersion(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsTokenLoggedIn(/*String*/Token) {
        try{
            return _NativeISGServer80_IsTokenLoggedIn(this.getInstanceHandle,/*String*/allocateUTF8(String(Token)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Reconnect() {
        try{
            _NativeISGServer80_Reconnect(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetParam(/*Int32*/Code, /*Object*/Param) {
        try{
            _NativeISGServer80_SetParam(this.getInstanceHandle,/*Int32*/Code,/*Object*/Emval.toHandle(Param));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IAction80 extends TEIUnknownHandle80 {
    get Code(){
        try{
            return _NativeIAction80_get_Code(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Code(/*ActionCode*/pVal){
            try{
                _NativeIAction80_put_Code(this.getInstanceHandle,/*ActionCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Param(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIAction80_get_Param(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Param(/*Object*/pVal){
            try{
                _NativeIAction80_put_Param(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IContainerItem80 extends TEIUnknownHandle80 {
    get ItemID(){
        try{
            return _NativeIContainerItem80_get_ItemID(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Name(){
        try{
            return UTF8ToString(_NativeIContainerItem80_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Name(/*String*/pVal){
            try{
                _NativeIContainerItem80_put_Name(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get URL(){
        try{
            return UTF8ToString(_NativeIContainerItem80_get_URL(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set URL(/*String*/pVal){
            try{
                _NativeIContainerItem80_put_URL(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Text(){
        try{
            return UTF8ToString(_NativeIContainerItem80_get_Text(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Text(/*String*/pVal){
            try{
                _NativeIContainerItem80_put_Text(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get UseURL(){
        try{
            return _NativeIContainerItem80_get_UseURL(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UseURL(/*Boolean*/pVal){
            try{
                _NativeIContainerItem80_put_UseURL(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get StartupSite(){
        try{
            return _NativeIContainerItem80_get_StartupSite(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set StartupSite(/*ContainerSite*/pVal){
            try{
                _NativeIContainerItem80_put_StartupSite(this.getInstanceHandle,/*ContainerSite*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get _reserved(){
        try{
            return _NativeIContainerItem80_get__reserved(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class ITreeItem80 extends TEIUnknownHandle80 {
    get Name(){
        try{
            return UTF8ToString(_NativeITreeItem80_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Name(/*String*/pVal){
            try{
                _NativeITreeItem80_put_Name(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowInViewerTree(){
        try{
            return _NativeITreeItem80_get_ShowInViewerTree(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowInViewerTree(/*Boolean*/pVal){
            try{
                _NativeITreeItem80_put_ShowInViewerTree(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ParentGroupName(){
        try{
            return UTF8ToString(_NativeITreeItem80_get_ParentGroupName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class I3DMLFeatureProperties80 extends TEIUnknownHandle80 {
    get Tint(){
        try{
            return new IColor80(_NativeI3DMLFeatureProperties80_get_Tint(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Tint(/*IColor80*/pVal){
            try{
                _NativeI3DMLFeatureProperties80_put_Tint(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MessageID(){
        try{
            return UTF8ToString(_NativeI3DMLFeatureProperties80_get_MessageID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MessageID(/*String*/pVal){
            try{
                _NativeI3DMLFeatureProperties80_put_MessageID(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeI3DMLFeatureProperties80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetClassification(/*String*/Name) {
        try{
            return UTF8ToString(_NativeI3DMLFeatureProperties80_GetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsClassified(/*String*/Name) {
        try{
            return _NativeI3DMLFeatureProperties80_IsClassified(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClassification(/*String*/Name, /*String*/Value) {
        try{
            _NativeI3DMLFeatureProperties80_SetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*String*/allocateUTF8(String(Value)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IPosition80 extends TEIUnknownHandle80 {
    get X(){
        try{
            return _NativeIPosition80_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/pVal){
            try{
                _NativeIPosition80_put_X(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeIPosition80_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/pVal){
            try{
                _NativeIPosition80_put_Y(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Altitude(){
        try{
            return _NativeIPosition80_get_Altitude(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Altitude(/*Double*/pVal){
            try{
                _NativeIPosition80_put_Altitude(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Yaw(){
        try{
            return _NativeIPosition80_get_Yaw(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Yaw(/*Double*/pVal){
            try{
                _NativeIPosition80_put_Yaw(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Pitch(){
        try{
            return _NativeIPosition80_get_Pitch(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Pitch(/*Double*/pVal){
            try{
                _NativeIPosition80_put_Pitch(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Roll(){
        try{
            return _NativeIPosition80_get_Roll(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Roll(/*Double*/pVal){
            try{
                _NativeIPosition80_put_Roll(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AltitudeType(){
        try{
            return _NativeIPosition80_get_AltitudeType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AltitudeType(/*AltitudeTypeCode*/pVal){
            try{
                _NativeIPosition80_put_AltitudeType(this.getInstanceHandle,/*AltitudeTypeCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Distance(){
        try{
            return _NativeIPosition80_get_Distance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Distance(/*Double*/pVal){
            try{
                _NativeIPosition80_put_Distance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Cartesian(){
        try{
            return _NativeIPosition80_get_Cartesian(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Cartesian(/*Boolean*/pVal){
            try{
                _NativeIPosition80_put_Cartesian(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    AimTo(/*IPosition80*/Position) {
        try{
            return new IPosition80(_NativeIPosition80_AimTo(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ChangeAltitudeType(/*AltitudeTypeCode*/AltitudeType) {
        try{
            _NativeIPosition80_ChangeAltitudeType(this.getInstanceHandle,/*AltitudeTypeCode*/AltitudeType);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Copy() {
        try{
            return new IPosition80(_NativeIPosition80_Copy(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DistanceTo(/*IPosition80*/Position) {
        try{
            return _NativeIPosition80_DistanceTo(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Init(/*Double*/X=0, /*Double*/Y=0, /*Double*/Altitude=0, /*Double*/Yaw=0, /*Double*/Pitch=0, /*Double*/Roll=0, /*AltitudeTypeCode*/AltitudeType=AltitudeTypeCode80.ATC_TERRAIN_RELATIVE, /*Double*/Distance=0) {
        try{
            _NativeIPosition80_Init(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/Altitude,/*Double*/Yaw,/*Double*/Pitch,/*Double*/Roll,/*AltitudeTypeCode*/AltitudeType,/*Double*/Distance);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InitFrom(/*Object*/val) {
        try{
            _NativeIPosition80_InitFrom(this.getInstanceHandle,/*Object*/Emval.toHandle(val));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsEqual(/*IPosition80*/Position) {
        try{
            return _NativeIPosition80_IsEqual(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Lerp(/*IPosition80*/Position, /*Double*/Percentage) {
        try{
            return new IPosition80(_NativeIPosition80_Lerp(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/Percentage));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Move(/*Double*/Distance, /*Double*/Yaw, /*Double*/Pitch) {
        try{
            return new IPosition80(_NativeIPosition80_Move(this.getInstanceHandle,/*Double*/Distance,/*Double*/Yaw,/*Double*/Pitch));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MoveByOrientation(/*Double*/moveForward, /*Double*/moveRight, /*Double*/moveUp) {
        try{
            return new IPosition80(_NativeIPosition80_MoveByOrientation(this.getInstanceHandle,/*Double*/moveForward,/*Double*/moveRight,/*Double*/moveUp));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MoveToward(/*IPosition80*/Position, /*Double*/Distance) {
        try{
            return new IPosition80(_NativeIPosition80_MoveToward(this.getInstanceHandle,/*IPosition80*/Position.getInstanceHandle,/*Double*/Distance));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToAbsolute(/*AccuracyLevel*/Accuracy=AccuracyLevel80.ACCURACY_NORMAL) {
        try{
            return new IPosition80(_NativeIPosition80_ToAbsolute(this.getInstanceHandle,/*AccuracyLevel*/Accuracy));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToRelative(/*AccuracyLevel*/Accuracy=AccuracyLevel80.ACCURACY_NORMAL) {
        try{
            return new IPosition80(_NativeIPosition80_ToRelative(this.getInstanceHandle,/*AccuracyLevel*/Accuracy));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IDataSourceInfo80 extends TEIUnknownHandle80 {
    get ConnectionString(){
        try{
            return UTF8ToString(_NativeIDataSourceInfo80_get_ConnectionString(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ConnectionString(/*String*/pVal){
            try{
                _NativeIDataSourceInfo80_put_ConnectionString(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Attributes(){
        try{
            return new IAttributes80(_NativeIDataSourceInfo80_get_Attributes(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HasZ(){
        try{
            return _NativeIDataSourceInfo80_get_HasZ(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get BBox(){
        try{
            return new IBBox2D80(_NativeIDataSourceInfo80_get_BBox(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get RecordsCount(){
        try{
            return _NativeIDataSourceInfo80_get_RecordsCount(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IFeatures80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return new IFeature80(_NativeIFeatures80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIFeatures80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetFeatureByDataSourceFeatureID(/*String*/DataSourceFeatureID) {
        try{
            return new IFeature80(_NativeIFeatures80_GetFeatureByDataSourceFeatureID(this.getInstanceHandle,/*String*/allocateUTF8(String(DataSourceFeatureID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetFeatureByObjectID(/*String*/ObjectID) {
        try{
            return new IFeature80(_NativeIFeatures80_GetFeatureByObjectID(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IFeature80 extends ITerraExplorerObject80 {
    get Geometry(){
        try{
            return GetIGeometry80Derived(_NativeIFeature80_get_Geometry(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeIFeature80_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get GeometryZ(){
        try{
            return GetIGeometry80Derived(_NativeIFeature80_get_GeometryZ(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FeatureAttributes(){
        try{
            return new IFeatureAttributes80(_NativeIFeature80_get_FeatureAttributes(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get State(){
        try{
            return _NativeIFeature80_get_State(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DataSourceFeatureID(){
        try{
            return UTF8ToString(_NativeIFeature80_get_DataSourceFeatureID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ParentGroupID(){
        try{
            return UTF8ToString(_NativeIFeature80_get_ParentGroupID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LayerID(){
        try{
            return UTF8ToString(_NativeIFeature80_get_LayerID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tint(){
        try{
            return new IColor80(_NativeIFeature80_get_Tint(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Tint(/*IColor80*/pVal){
            try{
                _NativeIFeature80_put_Tint(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Show(){
        try{
            return _NativeIFeature80_get_Show(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Show(/*Boolean*/pVal){
            try{
                _NativeIFeature80_put_Show(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Highlight(){
        try{
            return _NativeIFeature80_get_Highlight(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Highlight(/*Boolean*/pVal){
            try{
                _NativeIFeature80_put_Highlight(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    GetProperty(/*String*/Name) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIFeature80_GetProperty(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IMeshLayer80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeIMeshLayer80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get GroundObject(){
        try{
            return _NativeIMeshLayer80_get_GroundObject(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set GroundObject(/*Boolean*/pVal){
            try{
                _NativeIMeshLayer80_put_GroundObject(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Visibility(){
        try{
            return new IVisibility80(_NativeIMeshLayer80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ScaleFactor(){
        try{
            return _NativeIMeshLayer80_get_ScaleFactor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleFactor(/*Double*/pVal){
            try{
                _NativeIMeshLayer80_put_ScaleFactor(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleX(){
        try{
            return _NativeIMeshLayer80_get_ScaleX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleX(/*Double*/pVal){
            try{
                _NativeIMeshLayer80_put_ScaleX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleY(){
        try{
            return _NativeIMeshLayer80_get_ScaleY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleY(/*Double*/pVal){
            try{
                _NativeIMeshLayer80_put_ScaleY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleZ(){
        try{
            return _NativeIMeshLayer80_get_ScaleZ(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleZ(/*Double*/pVal){
            try{
                _NativeIMeshLayer80_put_ScaleZ(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Position(){
        try{
            return new IPosition80(_NativeIMeshLayer80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeIMeshLayer80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BBox(){
        try{
            return new IBBox3D80(_NativeIMeshLayer80_get_BBox(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Path(){
        try{
            return UTF8ToString(_NativeIMeshLayer80_get_Path(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Path(/*String*/pVal){
            try{
                _NativeIMeshLayer80_put_Path(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FeatureLayers(){
        try{
            return new I3DMLFeatureLayers80(_NativeIMeshLayer80_get_FeatureLayers(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ReplaceTerrainWithMesh(){
        try{
            return _NativeIMeshLayer80_get_ReplaceTerrainWithMesh(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ReplaceTerrainWithMesh(/*ReplaceTerrainMeshType*/pVal){
            try{
                _NativeIMeshLayer80_put_ReplaceTerrainWithMesh(this.getInstanceHandle,/*ReplaceTerrainMeshType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MeshGroundOffset(){
        try{
            return _NativeIMeshLayer80_get_MeshGroundOffset(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MeshGroundOffset(/*Double*/pVal){
            try{
                _NativeIMeshLayer80_put_MeshGroundOffset(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Oversampling(){
        try{
            return _NativeIMeshLayer80_get_Oversampling(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Oversampling(/*Oversampling*/pVal){
            try{
                _NativeIMeshLayer80_put_Oversampling(this.getInstanceHandle,/*Oversampling*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DisplayStyle(){
        try{
            return _NativeIMeshLayer80_get_DisplayStyle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisplayStyle(/*MeshLayerDisplayStyle*/pVal){
            try{
                _NativeIMeshLayer80_put_DisplayStyle(this.getInstanceHandle,/*MeshLayerDisplayStyle*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ReprojectElevation(){
        try{
            return _NativeIMeshLayer80_get_ReprojectElevation(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ReprojectElevation(/*Boolean*/pVal){
            try{
                _NativeIMeshLayer80_put_ReprojectElevation(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    Refresh() {
        try{
            _NativeIMeshLayer80_Refresh(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IFeatureLayer80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeIFeatureLayer80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FeatureGroups(){
        try{
            return new IFeatureGroups80(_NativeIFeatureLayer80_get_FeatureGroups(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeIFeatureLayer80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeIFeatureLayer80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Visibility(){
        try{
            return new IVisibility80(_NativeIFeatureLayer80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DataSourceInfo(){
        try{
            return new IDataSourceInfo80(_NativeIFeatureLayer80_get_DataSourceInfo(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get GeometryType(){
        try{
            return _NativeIFeatureLayer80_get_GeometryType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get StreamStatus(){
        try{
            return _NativeIFeatureLayer80_get_StreamStatus(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set StreamStatus(/*StreamLayerStatus*/pStreamStatus){
            try{
                _NativeIFeatureLayer80_put_StreamStatus(this.getInstanceHandle,/*StreamLayerStatus*/pStreamStatus); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BBox(){
        try{
            return new IBBox2D80(_NativeIFeatureLayer80_get_BBox(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BBox(/*IBBox2D80*/pVal){
            try{
                _NativeIFeatureLayer80_put_BBox(this.getInstanceHandle,/*IBBox2D80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Filter(){
        try{
            return UTF8ToString(_NativeIFeatureLayer80_get_Filter(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Filter(/*String*/pVal){
            try{
                _NativeIFeatureLayer80_put_Filter(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get IgnoreZ(){
        try{
            return _NativeIFeatureLayer80_get_IgnoreZ(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set IgnoreZ(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer80_put_IgnoreZ(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AltitudeUnit(){
        try{
            return _NativeIFeatureLayer80_get_AltitudeUnit(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AltitudeUnit(/*AltitudeUnitCode*/pVal){
            try{
                _NativeIFeatureLayer80_put_AltitudeUnit(this.getInstanceHandle,/*AltitudeUnitCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BlockWidth(){
        try{
            return _NativeIFeatureLayer80_get_BlockWidth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BlockWidth(/*Double*/pVal){
            try{
                _NativeIFeatureLayer80_put_BlockWidth(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Reproject(){
        try{
            return _NativeIFeatureLayer80_get_Reproject(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Reproject(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer80_put_Reproject(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ReprojectElevation(){
        try{
            return _NativeIFeatureLayer80_get_ReprojectElevation(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ReprojectElevation(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer80_put_ReprojectElevation(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Streaming(){
        try{
            return _NativeIFeatureLayer80_get_Streaming(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Streaming(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer80_put_Streaming(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Annotation(){
        try{
            return _NativeIFeatureLayer80_get_Annotation(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Annotation(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer80_put_Annotation(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Editable(){
        try{
            return _NativeIFeatureLayer80_get_Editable(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DynamicAnnotationPlacement(){
        try{
            return _NativeIFeatureLayer80_get_DynamicAnnotationPlacement(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DynamicAnnotationPlacement(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer80_put_DynamicAnnotationPlacement(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinimizeLabelDuplications(){
        try{
            return _NativeIFeatureLayer80_get_MinimizeLabelDuplications(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinimizeLabelDuplications(/*Boolean*/pVal){
            try{
                _NativeIFeatureLayer80_put_MinimizeLabelDuplications(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CoordinateSystem(){
        try{
            return new ICoordinateSystem80(_NativeIFeatureLayer80_get_CoordinateSystem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CoordinateSystem(/*ICoordinateSystem80*/pVal){
            try{
                _NativeIFeatureLayer80_put_CoordinateSystem(this.getInstanceHandle,/*ICoordinateSystem80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SelectedFeatures(){
        try{
            return new IFeatures80(_NativeIFeatureLayer80_get_SelectedFeatures(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    CopyStyleFrom(/*String*/LayerID) {
        try{
            _NativeIFeatureLayer80_CopyStyleFrom(this.getInstanceHandle,/*String*/allocateUTF8(String(LayerID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CopyStyleTo(/*String*/LayerID) {
        try{
            _NativeIFeatureLayer80_CopyStyleTo(this.getInstanceHandle,/*String*/allocateUTF8(String(LayerID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteQuery(/*String*/AttributeFilter, /*Int32*/NumOfFeatures=-1, /*String*/FromDataSourceFeatureId="", /*IGeometry*/AreaFilter=null) {
        try{
            return new IFeatures80(_NativeIFeatureLayer80_ExecuteQuery(this.getInstanceHandle,/*String*/allocateUTF8(String(AttributeFilter)),/*Int32*/NumOfFeatures,/*String*/allocateUTF8(String(FromDataSourceFeatureId)),/*IGeometry*/AreaFilter.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteSpatialQuery(/*IGeometry*/pIGeometry, /*IntersectionType*/IntersectionType=IntersectionType80.IT_INTERSECT) {
        try{
            return new IFeatures80(_NativeIFeatureLayer80_ExecuteSpatialQuery(this.getInstanceHandle,/*IGeometry*/pIGeometry.getInstanceHandle,/*IntersectionType*/IntersectionType));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Load() {
        try{
            _NativeIFeatureLayer80_Load(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Refresh() {
        try{
            _NativeIFeatureLayer80_Refresh(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RefreshFeatures(/*Object*/featureIDs, /*Boolean*/bAsync=false) {
        try{
            _NativeIFeatureLayer80_RefreshFeatures(this.getInstanceHandle,/*Object*/Emval.toHandle(featureIDs),/*Boolean*/bAsync);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Save() {
        try{
            _NativeIFeatureLayer80_Save(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAs(/*String*/FileName, /*String*/AttributeFilter, /*IGeometry*/AreaFilter) {
        try{
            return UTF8ToString(_NativeIFeatureLayer80_SaveAs(this.getInstanceHandle,/*String*/allocateUTF8(String(FileName)),/*String*/allocateUTF8(String(AttributeFilter)),/*IGeometry*/AreaFilter.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IKMLLayer80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeIKMLLayer80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Editable(){
        try{
            return _NativeIKMLLayer80_get_Editable(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Path(){
        try{
            return UTF8ToString(_NativeIKMLLayer80_get_Path(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetNetworkLink(/*String*/ObjectID) {
        try{
            return new INetworkLink80(_NativeIKMLLayer80_GetNetworkLink(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Refresh() {
        try{
            _NativeIKMLLayer80_Refresh(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Save() {
        try{
            _NativeIKMLLayer80_Save(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SaveAs(/*String*/KmlName) {
        try{
            return UTF8ToString(_NativeIKMLLayer80_SaveAs(this.getInstanceHandle,/*String*/allocateUTF8(String(KmlName))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ILabelStyle80 extends TEIUnknownHandle80 {
    get TextColor(){
        try{
            return new IColor80(_NativeILabelStyle80_get_TextColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TextColor(/*IColor80*/pVal){
            try{
                _NativeILabelStyle80_put_TextColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BackgroundColor(){
        try{
            return new IColor80(_NativeILabelStyle80_get_BackgroundColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BackgroundColor(/*IColor80*/pVal){
            try{
                _NativeILabelStyle80_put_BackgroundColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FontName(){
        try{
            return UTF8ToString(_NativeILabelStyle80_get_FontName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FontName(/*String*/pVal){
            try{
                _NativeILabelStyle80_put_FontName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FontSize(){
        try{
            return _NativeILabelStyle80_get_FontSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FontSize(/*Int32*/pVal){
            try{
                _NativeILabelStyle80_put_FontSize(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Bold(){
        try{
            return _NativeILabelStyle80_get_Bold(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Bold(/*Boolean*/pVal){
            try{
                _NativeILabelStyle80_put_Bold(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Italic(){
        try{
            return _NativeILabelStyle80_get_Italic(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Italic(/*Boolean*/pVal){
            try{
                _NativeILabelStyle80_put_Italic(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Underline(){
        try{
            return _NativeILabelStyle80_get_Underline(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Underline(/*Boolean*/pVal){
            try{
                _NativeILabelStyle80_put_Underline(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxViewingHeight(){
        try{
            return _NativeILabelStyle80_get_MaxViewingHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxViewingHeight(/*Double*/pVal){
            try{
                _NativeILabelStyle80_put_MaxViewingHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinViewingHeight(){
        try{
            return _NativeILabelStyle80_get_MinViewingHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinViewingHeight(/*Double*/pVal){
            try{
                _NativeILabelStyle80_put_MinViewingHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TextOnImage(){
        try{
            return _NativeILabelStyle80_get_TextOnImage(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TextOnImage(/*Boolean*/pVal){
            try{
                _NativeILabelStyle80_put_TextOnImage(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MultilineJustification(){
        try{
            return UTF8ToString(_NativeILabelStyle80_get_MultilineJustification(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MultilineJustification(/*String*/pVal){
            try{
                _NativeILabelStyle80_put_MultilineJustification(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TextAlignment(){
        try{
            return UTF8ToString(_NativeILabelStyle80_get_TextAlignment(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TextAlignment(/*String*/pVal){
            try{
                _NativeILabelStyle80_put_TextAlignment(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PivotAlignment(){
        try{
            return UTF8ToString(_NativeILabelStyle80_get_PivotAlignment(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PivotAlignment(/*String*/pVal){
            try{
                _NativeILabelStyle80_put_PivotAlignment(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LockMode(){
        try{
            return _NativeILabelStyle80_get_LockMode(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LockMode(/*LabelLockMode*/pVal){
            try{
                _NativeILabelStyle80_put_LockMode(this.getInstanceHandle,/*LabelLockMode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineToGroundType(){
        try{
            return _NativeILabelStyle80_get_LineToGroundType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineToGroundType(/*LineType*/pVal){
            try{
                _NativeILabelStyle80_put_LineToGroundType(this.getInstanceHandle,/*LineType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineToGroundLength(){
        try{
            return _NativeILabelStyle80_get_LineToGroundLength(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineToGroundLength(/*Double*/pVal){
            try{
                _NativeILabelStyle80_put_LineToGroundLength(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineColor(){
        try{
            return new IColor80(_NativeILabelStyle80_get_LineColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineColor(/*IColor80*/pVal){
            try{
                _NativeILabelStyle80_put_LineColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FrameFileName(){
        try{
            return UTF8ToString(_NativeILabelStyle80_get_FrameFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FrameFileName(/*String*/pVal){
            try{
                _NativeILabelStyle80_put_FrameFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LimitScreenSize(){
        try{
            return _NativeILabelStyle80_get_LimitScreenSize(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LimitScreenSize(/*Boolean*/pVal){
            try{
                _NativeILabelStyle80_put_LimitScreenSize(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Scale(){
        try{
            return _NativeILabelStyle80_get_Scale(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Scale(/*Double*/pVal){
            try{
                _NativeILabelStyle80_put_Scale(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxImageSize(){
        try{
            return _NativeILabelStyle80_get_MaxImageSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxImageSize(/*Int32*/pVal){
            try{
                _NativeILabelStyle80_put_MaxImageSize(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get IconColor(){
        try{
            return new IColor80(_NativeILabelStyle80_get_IconColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set IconColor(/*IColor80*/pVal){
            try{
                _NativeILabelStyle80_put_IconColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowTextBehavior(){
        try{
            return _NativeILabelStyle80_get_ShowTextBehavior(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowTextBehavior(/*ShowTextOptions*/pVal){
            try{
                _NativeILabelStyle80_put_ShowTextBehavior(this.getInstanceHandle,/*ShowTextOptions*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SmallestVisibleSize(){
        try{
            return _NativeILabelStyle80_get_SmallestVisibleSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SmallestVisibleSize(/*Int32*/pVal){
            try{
                _NativeILabelStyle80_put_SmallestVisibleSize(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IColor80 extends TEIUnknownHandle80 {
    get abgrColor(){
        try{
            return _NativeIColor80_get_abgrColor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set abgrColor(/*UInt32*/pVal){
            try{
                _NativeIColor80_put_abgrColor(this.getInstanceHandle,/*UInt32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    FromABGRColor(/*UInt32*/abgrColor) {
        try{
            _NativeIColor80_FromABGRColor(this.getInstanceHandle,/*UInt32*/abgrColor);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FromARGBColor(/*UInt32*/ARGBColor) {
        try{
            _NativeIColor80_FromARGBColor(this.getInstanceHandle,/*UInt32*/ARGBColor);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FromBGRColor(/*UInt32*/BGRColor) {
        try{
            _NativeIColor80_FromBGRColor(this.getInstanceHandle,/*UInt32*/BGRColor);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FromHTMLColor(/*String*/htmlColor) {
        try{
            _NativeIColor80_FromHTMLColor(this.getInstanceHandle,/*String*/allocateUTF8(String(htmlColor)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FromRGBColor(/*UInt32*/RGBColor) {
        try{
            _NativeIColor80_FromRGBColor(this.getInstanceHandle,/*UInt32*/RGBColor);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetAlpha() {
        try{
            return _NativeIColor80_GetAlpha(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetAlpha(/*Double*/Alpha) {
        try{
            _NativeIColor80_SetAlpha(this.getInstanceHandle,/*Double*/Alpha);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToABGRColor() {
        try{
            return _NativeIColor80_ToABGRColor(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToARGBColor() {
        try{
            return _NativeIColor80_ToARGBColor(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToBGRColor() {
        try{
            return _NativeIColor80_ToBGRColor(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToHTMLColor() {
        try{
            return UTF8ToString(_NativeIColor80_ToHTMLColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToRGBColor() {
        try{
            return _NativeIColor80_ToRGBColor(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IRouteWaypoint80 extends TEIUnknownHandle80 {
    get X(){
        try{
            return _NativeIRouteWaypoint80_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint80_put_X(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeIRouteWaypoint80_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint80_put_Y(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Altitude(){
        try{
            return _NativeIRouteWaypoint80_get_Altitude(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Altitude(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint80_put_Altitude(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Yaw(){
        try{
            return _NativeIRouteWaypoint80_get_Yaw(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Yaw(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint80_put_Yaw(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Pitch(){
        try{
            return _NativeIRouteWaypoint80_get_Pitch(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Pitch(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint80_put_Pitch(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Roll(){
        try{
            return _NativeIRouteWaypoint80_get_Roll(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Roll(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint80_put_Roll(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Speed(){
        try{
            return _NativeIRouteWaypoint80_get_Speed(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Speed(/*Double*/pVal){
            try{
                _NativeIRouteWaypoint80_put_Speed(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Time(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIRouteWaypoint80_get_Time(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Time(/*Object*/pVal){
            try{
                _NativeIRouteWaypoint80_put_Time(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MessageID(){
        try{
            return UTF8ToString(_NativeIRouteWaypoint80_get_MessageID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MessageID(/*String*/pVal){
            try{
                _NativeIRouteWaypoint80_put_MessageID(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainPolyline80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainPolyline80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainPolyline80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainPolyline80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainPolyline80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainPolyline80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainPolyline80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainPolyline80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainPolyline80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainPolyline80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainPolyline80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrainPolyline80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrainPolyline80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return GetIGeometry80Derived(_NativeITerrainPolyline80_get_Geometry(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrainPolyline80_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Spline(){
        try{
            return _NativeITerrainPolyline80_get_Spline(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Spline(/*Boolean*/pVal){
            try{
                _NativeITerrainPolyline80_put_Spline(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ExtendToGround(){
        try{
            return _NativeITerrainPolyline80_get_ExtendToGround(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ExtendToGround(/*Boolean*/pVal){
            try{
                _NativeITerrainPolyline80_put_ExtendToGround(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainPolygon80 extends ITerrainPolyline80 {
    get VolumeClassification(){
        try{
            return new IVolumeClassification80(_NativeITerrainPolygon80_get_VolumeClassification(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class ITerrainRectangle80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainRectangle80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainRectangle80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainRectangle80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainRectangle80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainRectangle80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainRectangle80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainRectangle80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainRectangle80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainRectangle80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainRectangle80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrainRectangle80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrainRectangle80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeITerrainRectangle80_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Top(/*Double*/pVal){
            try{
                _NativeITerrainRectangle80_put_Top(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Left(){
        try{
            return _NativeITerrainRectangle80_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Left(/*Double*/pVal){
            try{
                _NativeITerrainRectangle80_put_Left(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Right(){
        try{
            return _NativeITerrainRectangle80_get_Right(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Right(/*Double*/pVal){
            try{
                _NativeITerrainRectangle80_put_Right(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Bottom(){
        try{
            return _NativeITerrainRectangle80_get_Bottom(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Bottom(/*Double*/pVal){
            try{
                _NativeITerrainRectangle80_put_Bottom(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeITerrainRectangle80_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Double*/pVal){
            try{
                _NativeITerrainRectangle80_put_Width(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Depth(){
        try{
            return _NativeITerrainRectangle80_get_Depth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Depth(/*Double*/pVal){
            try{
                _NativeITerrainRectangle80_put_Depth(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainRegularPolygon80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainRegularPolygon80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainRegularPolygon80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainRegularPolygon80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainRegularPolygon80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainRegularPolygon80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainRegularPolygon80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainRegularPolygon80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainRegularPolygon80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainRegularPolygon80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainRegularPolygon80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrainRegularPolygon80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrainRegularPolygon80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Radius(){
        try{
            return _NativeITerrainRegularPolygon80_get_Radius(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius(/*Double*/pVal){
            try{
                _NativeITerrainRegularPolygon80_put_Radius(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NumberOfSegments(){
        try{
            return _NativeITerrainRegularPolygon80_get_NumberOfSegments(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NumberOfSegments(/*Int32*/pVal){
            try{
                _NativeITerrainRegularPolygon80_put_NumberOfSegments(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrain3DPolygon80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrain3DPolygon80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrain3DPolygon80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrain3DPolygon80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrain3DPolygon80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrain3DPolygon80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrain3DPolygon80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrain3DPolygon80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrain3DPolygon80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrain3DPolygon80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrain3DPolygon80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrain3DPolygon80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrain3DPolygon80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return GetIGeometry80Derived(_NativeITerrain3DPolygon80_get_Geometry(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrain3DPolygon80_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeITerrain3DPolygon80_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Double*/pVal){
            try{
                _NativeITerrain3DPolygon80_put_Height(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainBuilding80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainBuilding80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainBuilding80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainBuilding80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainBuilding80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainBuilding80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainBuilding80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainBuilding80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainBuilding80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainBuilding80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainBuilding80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return GetIGeometry80Derived(_NativeITerrainBuilding80_get_Geometry(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrainBuilding80_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeITerrainBuilding80_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Double*/pVal){
            try{
                _NativeITerrainBuilding80_put_Height(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Style(){
        try{
            return _NativeITerrainBuilding80_get_Style(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*BuildingStyleCode*/pVal){
            try{
                _NativeITerrainBuilding80_put_Style(this.getInstanceHandle,/*BuildingStyleCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Roof(){
        try{
            return new IRoofFace80(_NativeITerrainBuilding80_get_Roof(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Sides(){
        try{
            return new IBuildingSides80(_NativeITerrainBuilding80_get_Sides(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get EnableDraw(){
        try{
            return _NativeITerrainBuilding80_get_EnableDraw(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set EnableDraw(/*Boolean*/pVal){
            try{
                _NativeITerrainBuilding80_put_EnableDraw(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TerrainTextureOffsetX(){
        try{
            return _NativeITerrainBuilding80_get_TerrainTextureOffsetX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TerrainTextureOffsetX(/*Double*/pVal){
            try{
                _NativeITerrainBuilding80_put_TerrainTextureOffsetX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TerrainTextureOffsetY(){
        try{
            return _NativeITerrainBuilding80_get_TerrainTextureOffsetY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TerrainTextureOffsetY(/*Double*/pVal){
            try{
                _NativeITerrainBuilding80_put_TerrainTextureOffsetY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrain3DRectBase80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrain3DRectBase80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrain3DRectBase80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrain3DRectBase80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrain3DRectBase80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrain3DRectBase80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrain3DRectBase80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrain3DRectBase80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrain3DRectBase80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrain3DRectBase80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrain3DRectBase80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrain3DRectBase80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrain3DRectBase80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeITerrain3DRectBase80_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Top(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase80_put_Top(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Left(){
        try{
            return _NativeITerrain3DRectBase80_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Left(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase80_put_Left(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Right(){
        try{
            return _NativeITerrain3DRectBase80_get_Right(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Right(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase80_put_Right(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Bottom(){
        try{
            return _NativeITerrain3DRectBase80_get_Bottom(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Bottom(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase80_put_Bottom(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeITerrain3DRectBase80_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase80_put_Width(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Depth(){
        try{
            return _NativeITerrain3DRectBase80_get_Depth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Depth(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase80_put_Depth(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeITerrain3DRectBase80_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Double*/pVal){
            try{
                _NativeITerrain3DRectBase80_put_Height(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrain3DRegBase80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrain3DRegBase80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrain3DRegBase80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrain3DRegBase80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrain3DRegBase80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrain3DRegBase80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrain3DRegBase80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrain3DRegBase80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrain3DRegBase80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrain3DRegBase80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrain3DRegBase80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrain3DRegBase80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrain3DRegBase80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Radius(){
        try{
            return _NativeITerrain3DRegBase80_get_Radius(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius(/*Double*/pVal){
            try{
                _NativeITerrain3DRegBase80_put_Radius(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeITerrain3DRegBase80_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Double*/pVal){
            try{
                _NativeITerrain3DRegBase80_put_Height(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NumberOfSegments(){
        try{
            return _NativeITerrain3DRegBase80_get_NumberOfSegments(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NumberOfSegments(/*Int32*/pVal){
            try{
                _NativeITerrain3DRegBase80_put_NumberOfSegments(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainEllipse80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainEllipse80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainEllipse80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainEllipse80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainEllipse80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainEllipse80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainEllipse80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainEllipse80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainEllipse80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainEllipse80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainEllipse80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrainEllipse80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrainEllipse80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Radius(){
        try{
            return _NativeITerrainEllipse80_get_Radius(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius(/*Double*/pVal){
            try{
                _NativeITerrainEllipse80_put_Radius(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Radius2(){
        try{
            return _NativeITerrainEllipse80_get_Radius2(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius2(/*Double*/pVal){
            try{
                _NativeITerrainEllipse80_put_Radius2(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NumberOfSegments(){
        try{
            return _NativeITerrainEllipse80_get_NumberOfSegments(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NumberOfSegments(/*Int32*/pVal){
            try{
                _NativeITerrainEllipse80_put_NumberOfSegments(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainArc80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainArc80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainArc80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainArc80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainArc80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainArc80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainArc80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainArc80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainArc80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainArc80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainArc80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrainArc80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrainArc80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Radius(){
        try{
            return _NativeITerrainArc80_get_Radius(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius(/*Double*/pVal){
            try{
                _NativeITerrainArc80_put_Radius(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Radius2(){
        try{
            return _NativeITerrainArc80_get_Radius2(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius2(/*Double*/pVal){
            try{
                _NativeITerrainArc80_put_Radius2(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NumberOfSegments(){
        try{
            return _NativeITerrainArc80_get_NumberOfSegments(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NumberOfSegments(/*Int32*/pVal){
            try{
                _NativeITerrainArc80_put_NumberOfSegments(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get StartAngle(){
        try{
            return _NativeITerrainArc80_get_StartAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set StartAngle(/*Double*/pVal){
            try{
                _NativeITerrainArc80_put_StartAngle(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get EndAngle(){
        try{
            return _NativeITerrainArc80_get_EndAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set EndAngle(/*Double*/pVal){
            try{
                _NativeITerrainArc80_put_EndAngle(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainArrow80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainArrow80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainArrow80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainArrow80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainArrow80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainArrow80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainArrow80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainArrow80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainArrow80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainArrow80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainArrow80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrainArrow80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrainArrow80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HeadX(){
        try{
            return _NativeITerrainArrow80_get_HeadX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HeadX(/*Double*/pVal){
            try{
                _NativeITerrainArrow80_put_HeadX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get HeadY(){
        try{
            return _NativeITerrainArrow80_get_HeadY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HeadY(/*Double*/pVal){
            try{
                _NativeITerrainArrow80_put_HeadY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TailX(){
        try{
            return _NativeITerrainArrow80_get_TailX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TailX(/*Double*/pVal){
            try{
                _NativeITerrainArrow80_put_TailX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TailY(){
        try{
            return _NativeITerrainArrow80_get_TailY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TailY(/*Double*/pVal){
            try{
                _NativeITerrainArrow80_put_TailY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Style(){
        try{
            return _NativeITerrainArrow80_get_Style(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*Int32*/pVal){
            try{
                _NativeITerrainArrow80_put_Style(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrain3DArrow80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrain3DArrow80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrain3DArrow80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrain3DArrow80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrain3DArrow80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrain3DArrow80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrain3DArrow80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrain3DArrow80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrain3DArrow80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrain3DArrow80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrain3DArrow80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrain3DArrow80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrain3DArrow80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HeadX(){
        try{
            return _NativeITerrain3DArrow80_get_HeadX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HeadX(/*Double*/pVal){
            try{
                _NativeITerrain3DArrow80_put_HeadX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get HeadY(){
        try{
            return _NativeITerrain3DArrow80_get_HeadY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HeadY(/*Double*/pVal){
            try{
                _NativeITerrain3DArrow80_put_HeadY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TailX(){
        try{
            return _NativeITerrain3DArrow80_get_TailX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TailX(/*Double*/pVal){
            try{
                _NativeITerrain3DArrow80_put_TailX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TailY(){
        try{
            return _NativeITerrain3DArrow80_get_TailY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TailY(/*Double*/pVal){
            try{
                _NativeITerrain3DArrow80_put_TailY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Style(){
        try{
            return _NativeITerrain3DArrow80_get_Style(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*Int32*/pVal){
            try{
                _NativeITerrain3DArrow80_put_Style(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeITerrain3DArrow80_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Double*/pVal){
            try{
                _NativeITerrain3DArrow80_put_Height(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainSphere80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainSphere80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainSphere80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainSphere80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainSphere80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainSphere80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainSphere80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainSphere80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainSphere80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainSphere80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainSphere80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrainSphere80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FillStyle(){
        try{
            return new IFillStyle80(_NativeITerrainSphere80_get_FillStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Radius(){
        try{
            return _NativeITerrainSphere80_get_Radius(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Radius(/*Double*/pVal){
            try{
                _NativeITerrainSphere80_put_Radius(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SegmentDensity(){
        try{
            return _NativeITerrainSphere80_get_SegmentDensity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SegmentDensity(/*Int32*/pVal){
            try{
                _NativeITerrainSphere80_put_SegmentDensity(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Style(){
        try{
            return _NativeITerrainSphere80_get_Style(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*Int32*/pVal){
            try{
                _NativeITerrainSphere80_put_Style(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainModel80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainModel80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainModel80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainModel80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainModel80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainModel80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainModel80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainModel80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainModel80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainModel80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainModel80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ModelFileName(){
        try{
            return UTF8ToString(_NativeITerrainModel80_get_ModelFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ModelFileName(/*String*/pVal){
            try{
                _NativeITerrainModel80_put_ModelFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleFactor(){
        try{
            return _NativeITerrainModel80_get_ScaleFactor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleFactor(/*Double*/pVal){
            try{
                _NativeITerrainModel80_put_ScaleFactor(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FlipTexture(){
        try{
            return _NativeITerrainModel80_get_FlipTexture(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FlipTexture(/*Boolean*/pVal){
            try{
                _NativeITerrainModel80_put_FlipTexture(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BestLOD(){
        try{
            return _NativeITerrainModel80_get_BestLOD(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BestLOD(/*Double*/pVal){
            try{
                _NativeITerrainModel80_put_BestLOD(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ModelType(){
        try{
            return _NativeITerrainModel80_get_ModelType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ScaleX(){
        try{
            return _NativeITerrainModel80_get_ScaleX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleX(/*Double*/pVal){
            try{
                _NativeITerrainModel80_put_ScaleX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleY(){
        try{
            return _NativeITerrainModel80_get_ScaleY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleY(/*Double*/pVal){
            try{
                _NativeITerrainModel80_put_ScaleY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleZ(){
        try{
            return _NativeITerrainModel80_get_ScaleZ(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleZ(/*Double*/pVal){
            try{
                _NativeITerrainModel80_put_ScaleZ(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainImageLabel80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainImageLabel80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainImageLabel80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainImageLabel80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainImageLabel80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainImageLabel80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainImageLabel80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainImageLabel80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainImageLabel80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainImageLabel80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainImageLabel80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ImageFileName(){
        try{
            return UTF8ToString(_NativeITerrainImageLabel80_get_ImageFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ImageFileName(/*String*/pVal){
            try{
                _NativeITerrainImageLabel80_put_ImageFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Style(){
        try{
            return new ILabelStyle80(_NativeITerrainImageLabel80_get_Style(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*ILabelStyle80*/pVal){
            try{
                _NativeITerrainImageLabel80_put_Style(this.getInstanceHandle,/*ILabelStyle80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BlendMode(){
        try{
            return _NativeITerrainImageLabel80_get_BlendMode(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BlendMode(/*Int32*/pVal){
            try{
                _NativeITerrainImageLabel80_put_BlendMode(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    SetImageFromBuffer(/*Object*/buffer, /*Int32*/Width, /*Int32*/Height) {
        try{
            _NativeITerrainImageLabel80_SetImageFromBuffer(this.getInstanceHandle,/*Object*/Emval.toHandle(buffer),/*Int32*/Width,/*Int32*/Height);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainLabel80 extends ITerrainImageLabel80 {
    get Text(){
        try{
            return UTF8ToString(_NativeITerrainLabel80_get_Text(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Text(/*String*/pVal){
            try{
                _NativeITerrainLabel80_put_Text(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainEffect80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainEffect80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainEffect80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainEffect80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainEffect80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainEffect80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainEffect80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainEffect80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainEffect80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainEffect80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainEffect80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get EffectXML(){
        try{
            return UTF8ToString(_NativeITerrainEffect80_get_EffectXML(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set EffectXML(/*String*/xml){
            try{
                _NativeITerrainEffect80_put_EffectXML(this.getInstanceHandle,/*String*/allocateUTF8(String(xml))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxViewingHeight(){
        try{
            return _NativeITerrainEffect80_get_MaxViewingHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxViewingHeight(/*Double*/pVal){
            try{
                _NativeITerrainEffect80_put_MaxViewingHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinViewingHeight(){
        try{
            return _NativeITerrainEffect80_get_MinViewingHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinViewingHeight(/*Double*/pVal){
            try{
                _NativeITerrainEffect80_put_MinViewingHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineToGroundType(){
        try{
            return _NativeITerrainEffect80_get_LineToGroundType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineToGroundType(/*LineType*/pVal){
            try{
                _NativeITerrainEffect80_put_LineToGroundType(this.getInstanceHandle,/*LineType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineToGroundLength(){
        try{
            return _NativeITerrainEffect80_get_LineToGroundLength(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineToGroundLength(/*Double*/pVal){
            try{
                _NativeITerrainEffect80_put_LineToGroundLength(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LineColor(){
        try{
            return new IColor80(_NativeITerrainEffect80_get_LineColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LineColor(/*IColor80*/pVal){
            try{
                _NativeITerrainEffect80_put_LineColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LimitScreenSize(){
        try{
            return _NativeITerrainEffect80_get_LimitScreenSize(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LimitScreenSize(/*Boolean*/pVal){
            try{
                _NativeITerrainEffect80_put_LimitScreenSize(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Scale(){
        try{
            return _NativeITerrainEffect80_get_Scale(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Scale(/*Double*/pVal){
            try{
                _NativeITerrainEffect80_put_Scale(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get SmallestVisibleSize(){
        try{
            return _NativeITerrainEffect80_get_SmallestVisibleSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SmallestVisibleSize(/*Int32*/pVal){
            try{
                _NativeITerrainEffect80_put_SmallestVisibleSize(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainLocation80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainLocation80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainLocation80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainLocation80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainLocation80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainLocation80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITreeHotlink80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITreeHotlink80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITreeHotlink80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class ITerraExplorerMessage80 extends ITerraExplorerObject80 {
    get TargetPosition(){
        try{
            return _NativeITerraExplorerMessage80_get_TargetPosition(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TargetPosition(/*MsgTargetPosition*/pVal){
            try{
                _NativeITerraExplorerMessage80_put_TargetPosition(this.getInstanceHandle,/*MsgTargetPosition*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Text(){
        try{
            return UTF8ToString(_NativeITerraExplorerMessage80_get_Text(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Text(/*String*/pVal){
            try{
                _NativeITerraExplorerMessage80_put_Text(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get URL(){
        try{
            return UTF8ToString(_NativeITerraExplorerMessage80_get_URL(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set URL(/*String*/pVal){
            try{
                _NativeITerraExplorerMessage80_put_URL(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Type(){
        try{
            return _NativeITerraExplorerMessage80_get_Type(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Type(/*MsgType*/pVal){
            try{
                _NativeITerraExplorerMessage80_put_Type(this.getInstanceHandle,/*MsgType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BringToFront(){
        try{
            return _NativeITerraExplorerMessage80_get_BringToFront(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BringToFront(/*Boolean*/pVal){
            try{
                _NativeITerraExplorerMessage80_put_BringToFront(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IPopupMessage80 extends ITerraExplorerObject80 {
    get Left(){
        try{
            return _NativeIPopupMessage80_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Left(/*Int32*/pVal){
            try{
                _NativeIPopupMessage80_put_Left(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Top(){
        try{
            return _NativeIPopupMessage80_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Top(/*Int32*/pVal){
            try{
                _NativeIPopupMessage80_put_Top(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeIPopupMessage80_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Int32*/pVal){
            try{
                _NativeIPopupMessage80_put_Width(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Height(){
        try{
            return _NativeIPopupMessage80_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Height(/*Int32*/pVal){
            try{
                _NativeIPopupMessage80_put_Height(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Caption(){
        try{
            return UTF8ToString(_NativeIPopupMessage80_get_Caption(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Caption(/*String*/pVal){
            try{
                _NativeIPopupMessage80_put_Caption(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Src(){
        try{
            return UTF8ToString(_NativeIPopupMessage80_get_Src(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Src(/*String*/pVal){
            try{
                _NativeIPopupMessage80_put_Src(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Timeout(){
        try{
            return _NativeIPopupMessage80_get_Timeout(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Timeout(/*Int32*/pVal){
            try{
                _NativeIPopupMessage80_put_Timeout(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get InnerHTML(){
        try{
            return UTF8ToString(_NativeIPopupMessage80_get_InnerHTML(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set InnerHTML(/*String*/pVal){
            try{
                _NativeIPopupMessage80_put_InnerHTML(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get InnerText(){
        try{
            return UTF8ToString(_NativeIPopupMessage80_get_InnerText(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set InnerText(/*String*/pVal){
            try{
                _NativeIPopupMessage80_put_InnerText(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AllowResize(){
        try{
            return _NativeIPopupMessage80_get_AllowResize(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AllowResize(/*Boolean*/pVal){
            try{
                _NativeIPopupMessage80_put_AllowResize(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AllowDrag(){
        try{
            return _NativeIPopupMessage80_get_AllowDrag(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AllowDrag(/*Boolean*/pVal){
            try{
                _NativeIPopupMessage80_put_AllowDrag(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AnchorToView(){
        try{
            return _NativeIPopupMessage80_get_AnchorToView(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AnchorToView(/*Boolean*/pVal){
            try{
                _NativeIPopupMessage80_put_AnchorToView(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowCaption(){
        try{
            return _NativeIPopupMessage80_get_ShowCaption(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowCaption(/*Boolean*/pVal){
            try{
                _NativeIPopupMessage80_put_ShowCaption(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FocusToRender(){
        try{
            return _NativeIPopupMessage80_get_FocusToRender(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FocusToRender(/*Boolean*/pVal){
            try{
                _NativeIPopupMessage80_put_FocusToRender(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Align(){
        try{
            return UTF8ToString(_NativeIPopupMessage80_get_Align(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Align(/*String*/pVal){
            try{
                _NativeIPopupMessage80_put_Align(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Flags(){
        try{
            return _NativeIPopupMessage80_get_Flags(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Flags(/*_HTML_POPUP_FLAGS*/pVal){
            try{
                _NativeIPopupMessage80_put_Flags(this.getInstanceHandle,/*_HTML_POPUP_FLAGS*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ITerrainDynamicObject80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainDynamicObject80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainDynamicObject80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainDynamicObject80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainDynamicObject80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainDynamicObject80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainDynamicObject80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainDynamicObject80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainDynamicObject80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainDynamicObject80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Waypoints(){
        try{
            return new IRouteWaypoints80(_NativeITerrainDynamicObject80_get_Waypoints(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get MotionStyle(){
        try{
            return _NativeITerrainDynamicObject80_get_MotionStyle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MotionStyle(/*DynamicMotionStyle*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_MotionStyle(this.getInstanceHandle,/*DynamicMotionStyle*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DynamicType(){
        try{
            return _NativeITerrainDynamicObject80_get_DynamicType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DynamicType(/*DynamicObjectType*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_DynamicType(this.getInstanceHandle,/*DynamicObjectType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FileName(){
        try{
            return UTF8ToString(_NativeITerrainDynamicObject80_get_FileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FileName(/*String*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_FileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Text(){
        try{
            return UTF8ToString(_NativeITerrainDynamicObject80_get_Text(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Text(/*String*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_Text(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TextColor(){
        try{
            return new IColor80(_NativeITerrainDynamicObject80_get_TextColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TextColor(/*IColor80*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_TextColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get LimitScreenSize(){
        try{
            return _NativeITerrainDynamicObject80_get_LimitScreenSize(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LimitScreenSize(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_LimitScreenSize(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BackgroundColor(){
        try{
            return new IColor80(_NativeITerrainDynamicObject80_get_BackgroundColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BackgroundColor(/*IColor80*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_BackgroundColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FontName(){
        try{
            return UTF8ToString(_NativeITerrainDynamicObject80_get_FontName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FontName(/*String*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_FontName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FontSize(){
        try{
            return _NativeITerrainDynamicObject80_get_FontSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FontSize(/*Int32*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_FontSize(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FontStyle(){
        try{
            return _NativeITerrainDynamicObject80_get_FontStyle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FontStyle(/*Int32*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_FontStyle(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleFactor(){
        try{
            return _NativeITerrainDynamicObject80_get_ScaleFactor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleFactor(/*Double*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_ScaleFactor(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FlipTexture(){
        try{
            return _NativeITerrainDynamicObject80_get_FlipTexture(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FlipTexture(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_FlipTexture(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AltitudeType(){
        try{
            return _NativeITerrainDynamicObject80_get_AltitudeType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AltitudeType(/*AltitudeTypeCode*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_AltitudeType(this.getInstanceHandle,/*AltitudeTypeCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Acceleration(){
        try{
            return _NativeITerrainDynamicObject80_get_Acceleration(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Acceleration(/*Double*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_Acceleration(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TurnSpeed(){
        try{
            return _NativeITerrainDynamicObject80_get_TurnSpeed(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TurnSpeed(/*Double*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_TurnSpeed(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CircularRoute(){
        try{
            return _NativeITerrainDynamicObject80_get_CircularRoute(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CircularRoute(/*CircularRouteType*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_CircularRoute(this.getInstanceHandle,/*CircularRouteType*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Pause(){
        try{
            return _NativeITerrainDynamicObject80_get_Pause(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Pause(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_Pause(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MoveByTime(){
        try{
            return _NativeITerrainDynamicObject80_get_MoveByTime(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MoveByTime(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_MoveByTime(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PlayRouteOnStartup(){
        try{
            return _NativeITerrainDynamicObject80_get_PlayRouteOnStartup(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PlayRouteOnStartup(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_PlayRouteOnStartup(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TrackLineStyle(){
        try{
            return new ILineStyle80(_NativeITerrainDynamicObject80_get_TrackLineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ShowTrack(){
        try{
            return _NativeITerrainDynamicObject80_get_ShowTrack(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowTrack(/*Boolean*/pVal){
            try{
                _NativeITerrainDynamicObject80_put_ShowTrack(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    RestartRoute(/*Int32*/Index=0) {
        try{
            _NativeITerrainDynamicObject80_RestartRoute(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainRasterLayer80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainRasterLayer80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainRasterLayer80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainRasterLayer80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainRasterLayer80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainRasterLayer80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainRasterLayer80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainRasterLayer80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainRasterLayer80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainRasterLayer80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LineStyle(){
        try{
            return new ILineStyle80(_NativeITerrainRasterLayer80_get_LineStyle(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return GetIGeometry80Derived(_NativeITerrainRasterLayer80_get_Geometry(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FillColor(){
        try{
            return new IColor80(_NativeITerrainRasterLayer80_get_FillColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FillColor(/*IColor80*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_FillColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FileName(){
        try{
            return UTF8ToString(_NativeITerrainRasterLayer80_get_FileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get InitParam(){
        try{
            return UTF8ToString(_NativeITerrainRasterLayer80_get_InitParam(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PlugName(){
        try{
            return UTF8ToString(_NativeITerrainRasterLayer80_get_PlugName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DisplayName(){
        try{
            return UTF8ToString(_NativeITerrainRasterLayer80_get_DisplayName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get CoordinateSystem(){
        try{
            return new ICoordinateSystem80(_NativeITerrainRasterLayer80_get_CoordinateSystem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CoordinateSystem(/*ICoordinateSystem80*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_CoordinateSystem(this.getInstanceHandle,/*ICoordinateSystem80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get UseNull(){
        try{
            return _NativeITerrainRasterLayer80_get_UseNull(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UseNull(/*Boolean*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_UseNull(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NullValue(){
        try{
            return EmvalToJS(Emval.toValue(_NativeITerrainRasterLayer80_get_NullValue(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NullValue(/*Object*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_NullValue(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get NullTolerance(){
        try{
            return _NativeITerrainRasterLayer80_get_NullTolerance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set NullTolerance(/*Double*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_NullTolerance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ElevationScale(){
        try{
            return _NativeITerrainRasterLayer80_get_ElevationScale(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ElevationScale(/*Double*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_ElevationScale(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ElevationOffset(){
        try{
            return _NativeITerrainRasterLayer80_get_ElevationOffset(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ElevationOffset(/*Double*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_ElevationOffset(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ReprojectElevation(){
        try{
            return _NativeITerrainRasterLayer80_get_ReprojectElevation(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ReprojectElevation(/*Boolean*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_ReprojectElevation(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Reproject(){
        try{
            return _NativeITerrainRasterLayer80_get_Reproject(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Reproject(/*Boolean*/pVal){
            try{
                _NativeITerrainRasterLayer80_put_Reproject(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Imagery(){
        try{
            return _NativeITerrainRasterLayer80_get_Imagery(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Elevation(){
        try{
            return _NativeITerrainRasterLayer80_get_Elevation(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DataSourceWKT(){
        try{
            return UTF8ToString(_NativeITerrainRasterLayer80_get_DataSourceWKT(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DataSourceBBox(){
        try{
            return new IBBox2D80(_NativeITerrainRasterLayer80_get_DataSourceBBox(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Refresh(/*Int32*/AutoRefreshTimeInterval) {
        try{
            _NativeITerrainRasterLayer80_Refresh(this.getInstanceHandle,/*Int32*/AutoRefreshTimeInterval);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RefreshRect(/*Double*/MinX, /*Double*/MinY, /*Double*/MaxX, /*Double*/MaxY) {
        try{
            _NativeITerrainRasterLayer80_RefreshRect(this.getInstanceHandle,/*Double*/MinX,/*Double*/MinY,/*Double*/MaxX,/*Double*/MaxY);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainVideo80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainVideo80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainVideo80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainVideo80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainVideo80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainVideo80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainVideo80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainVideo80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainVideo80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainVideo80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainVideo80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get VideoFileName(){
        try{
            return UTF8ToString(_NativeITerrainVideo80_get_VideoFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set VideoFileName(/*String*/pVal){
            try{
                _NativeITerrainVideo80_put_VideoFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TelemetryFileName(){
        try{
            return UTF8ToString(_NativeITerrainVideo80_get_TelemetryFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TelemetryFileName(/*String*/pVal){
            try{
                _NativeITerrainVideo80_put_TelemetryFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get UseTelemetry(){
        try{
            return _NativeITerrainVideo80_get_UseTelemetry(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UseTelemetry(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo80_put_UseTelemetry(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ProjectionFieldOfView(){
        try{
            return _NativeITerrainVideo80_get_ProjectionFieldOfView(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ProjectionFieldOfView(/*Double*/pVal){
            try{
                _NativeITerrainVideo80_put_ProjectionFieldOfView(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get VideoOpacity(){
        try{
            return _NativeITerrainVideo80_get_VideoOpacity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set VideoOpacity(/*Double*/pVal){
            try{
                _NativeITerrainVideo80_put_VideoOpacity(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowProjectionLines(){
        try{
            return _NativeITerrainVideo80_get_ShowProjectionLines(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowProjectionLines(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo80_put_ShowProjectionLines(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ProjectionLinesLength(){
        try{
            return _NativeITerrainVideo80_get_ProjectionLinesLength(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ProjectionLinesLength(/*Double*/pVal){
            try{
                _NativeITerrainVideo80_put_ProjectionLinesLength(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowProjector(){
        try{
            return _NativeITerrainVideo80_get_ShowProjector(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowProjector(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo80_put_ShowProjector(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ProjectorLength(){
        try{
            return _NativeITerrainVideo80_get_ProjectorLength(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ProjectorLength(/*Double*/pVal){
            try{
                _NativeITerrainVideo80_put_ProjectorLength(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Volume(){
        try{
            return _NativeITerrainVideo80_get_Volume(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Volume(/*Int32*/pVal){
            try{
                _NativeITerrainVideo80_put_Volume(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Mute(){
        try{
            return _NativeITerrainVideo80_get_Mute(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Mute(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo80_put_Mute(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PlayVideoOnStartup(){
        try{
            return _NativeITerrainVideo80_get_PlayVideoOnStartup(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PlayVideoOnStartup(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo80_put_PlayVideoOnStartup(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get VideoLength(){
        try{
            return _NativeITerrainVideo80_get_VideoLength(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get VideoPosition(){
        try{
            return _NativeITerrainVideo80_get_VideoPosition(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set VideoPosition(/*Double*/pVal){
            try{
                _NativeITerrainVideo80_put_VideoPosition(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CanSeek(){
        try{
            return _NativeITerrainVideo80_get_CanSeek(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PlayStatus(){
        try{
            return _NativeITerrainVideo80_get_PlayStatus(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get MaximumProjectionDistance(){
        try{
            return _NativeITerrainVideo80_get_MaximumProjectionDistance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaximumProjectionDistance(/*Double*/pVal){
            try{
                _NativeITerrainVideo80_put_MaximumProjectionDistance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ProjectOnHiddenSurfaces(){
        try{
            return _NativeITerrainVideo80_get_ProjectOnHiddenSurfaces(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ProjectOnHiddenSurfaces(/*Boolean*/pVal){
            try{
                _NativeITerrainVideo80_put_ProjectOnHiddenSurfaces(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    PlayVideo(/*VideoPlayStatus*/Play=VideoPlayStatus80.VPS_PLAY) {
        try{
            _NativeITerrainVideo80_PlayVideo(this.getInstanceHandle,/*VideoPlayStatus*/Play);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetImage(/*Object*/Image, /*Int32*/Format=0, /*Object*/Param=null) {
        try{
            _NativeITerrainVideo80_SetImage(this.getInstanceHandle,/*Object*/Emval.toHandle(Image),/*Int32*/Format,/*Object*/Emval.toHandle(Param));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainPointCloudModel80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainPointCloudModel80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainPointCloudModel80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainPointCloudModel80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainPointCloudModel80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainPointCloudModel80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainPointCloudModel80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainPointCloudModel80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainPointCloudModel80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainPointCloudModel80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ModelFileName(){
        try{
            return UTF8ToString(_NativeITerrainPointCloudModel80_get_ModelFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ModelFileName(/*String*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_ModelFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleFactor(){
        try{
            return _NativeITerrainPointCloudModel80_get_ScaleFactor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleFactor(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_ScaleFactor(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FlattenBelowTerrain(){
        try{
            return _NativeITerrainPointCloudModel80_get_FlattenBelowTerrain(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FlattenBelowTerrain(/*Boolean*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_FlattenBelowTerrain(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get HideBelowImagery(){
        try{
            return _NativeITerrainPointCloudModel80_get_HideBelowImagery(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HideBelowImagery(/*Boolean*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_HideBelowImagery(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinIntensity(){
        try{
            return _NativeITerrainPointCloudModel80_get_MinIntensity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinIntensity(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_MinIntensity(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxIntensity(){
        try{
            return _NativeITerrainPointCloudModel80_get_MaxIntensity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxIntensity(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_MaxIntensity(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get IntensityBlend(){
        try{
            return _NativeITerrainPointCloudModel80_get_IntensityBlend(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set IntensityBlend(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_IntensityBlend(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PointSamplingInterval(){
        try{
            return _NativeITerrainPointCloudModel80_get_PointSamplingInterval(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PointSamplingInterval(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_PointSamplingInterval(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PointSize(){
        try{
            return _NativeITerrainPointCloudModel80_get_PointSize(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PointSize(/*Double*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_PointSize(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PointColor(){
        try{
            return new IColor80(_NativeITerrainPointCloudModel80_get_PointColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PointColor(/*IColor80*/pVal){
            try{
                _NativeITerrainPointCloudModel80_put_PointColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DataFormat(){
        try{
            return _NativeITerrainPointCloudModel80_get_DataFormat(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DefaultLocation(){
        try{
            return new IPointCloudDefaultLocation80(_NativeITerrainPointCloudModel80_get_DefaultLocation(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    CopyStyleFrom(/*String*/PointCloudObjectID) {
        try{
            _NativeITerrainPointCloudModel80_CopyStyleFrom(this.getInstanceHandle,/*String*/allocateUTF8(String(PointCloudObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CopyStyleTo(/*String*/PointCloudObjectID) {
        try{
            _NativeITerrainPointCloudModel80_CopyStyleTo(this.getInstanceHandle,/*String*/allocateUTF8(String(PointCloudObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetClassification(/*String*/Name) {
        try{
            return UTF8ToString(_NativeITerrainPointCloudModel80_GetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsClassified(/*String*/Name) {
        try{
            return _NativeITerrainPointCloudModel80_IsClassified(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    OpenStyleEditorDialog(/*String*/Name) {
        try{
            _NativeITerrainPointCloudModel80_OpenStyleEditorDialog(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClassification(/*String*/Name, /*String*/Value) {
        try{
            _NativeITerrainPointCloudModel80_SetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*String*/allocateUTF8(String(Value)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainModifier80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainModifier80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainModifier80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainModifier80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainModifier80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainModifier80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainModifier80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainModifier80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainModifier80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainModifier80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainModifier80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return GetIGeometry80Derived(_NativeITerrainModifier80_get_Geometry(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrainModifier80_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ElevationBehavior(){
        try{
            return _NativeITerrainModifier80_get_ElevationBehavior(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ElevationBehavior(/*ElevationBehaviorMode*/pVal){
            try{
                _NativeITerrainModifier80_put_ElevationBehavior(this.getInstanceHandle,/*ElevationBehaviorMode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Flat(){
        try{
            return _NativeITerrainModifier80_get_Flat(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Flat(/*Boolean*/newVal){
            try{
                _NativeITerrainModifier80_put_Flat(this.getInstanceHandle,/*Boolean*/newVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ApplyTo(){
        try{
            return UTF8ToString(_NativeITerrainModifier80_get_ApplyTo(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ApplyTo(/*String*/MeshObjectID){
            try{
                _NativeITerrainModifier80_put_ApplyTo(this.getInstanceHandle,/*String*/allocateUTF8(String(MeshObjectID))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DrawOrder(){
        try{
            return _NativeITerrainModifier80_get_DrawOrder(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DrawOrder(/*Double*/pVal){
            try{
                _NativeITerrainModifier80_put_DrawOrder(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    GetFeather() {
        try{
            return _NativeITerrainModifier80_GetFeather(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetFeather(/*Double*/dFeather) {
        try{
            _NativeITerrainModifier80_SetFeather(this.getInstanceHandle,/*Double*/dFeather);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainHole80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainHole80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainHole80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainHole80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainHole80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainHole80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainHole80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainHole80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeITerrainHole80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainHole80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainHole80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Geometry(){
        try{
            return GetIGeometry80Derived(_NativeITerrainHole80_get_Geometry(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Geometry(/*IGeometry*/pVal){
            try{
                _NativeITerrainHole80_put_Geometry(this.getInstanceHandle,/*IGeometry*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IPresentation80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeIPresentation80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SpeedFactor(){
        try{
            return _NativeIPresentation80_get_SpeedFactor(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SpeedFactor(/*Double*/pVal){
            try{
                _NativeIPresentation80_put_SpeedFactor(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CurrentlyPlayingActionId(){
        try{
            return UTF8ToString(_NativeIPresentation80_get_CurrentlyPlayingActionId(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get LoopMode(){
        try{
            return _NativeIPresentation80_get_LoopMode(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set LoopMode(/*Boolean*/pVal){
            try{
                _NativeIPresentation80_put_LoopMode(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PresentationJSON(){
        try{
            return UTF8ToString(_NativeIPresentation80_get_PresentationJSON(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PresentationJSON(/*String*/pVal){
            try{
                _NativeIPresentation80_put_PresentationJSON(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PresentationJSONSchema(){
        try{
            return UTF8ToString(_NativeIPresentation80_get_PresentationJSONSchema(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SettingsJSON(){
        try{
            return UTF8ToString(_NativeIPresentation80_get_SettingsJSON(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set SettingsJSON(/*String*/pVal){
            try{
                _NativeIPresentation80_put_SettingsJSON(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PlayingPresentationJSON(){
        try{
            return UTF8ToString(_NativeIPresentation80_get_PlayingPresentationJSON(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Status(){
        try{
            return UTF8ToString(_NativeIPresentation80_get_Status(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    CopyItem(/*String*/ItemID, /*String*/NewParentID, /*String*/InsertBeforeID) {
        try{
            _NativeIPresentation80_CopyItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID)),/*String*/allocateUTF8(String(NewParentID)),/*String*/allocateUTF8(String(InsertBeforeID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateAction(/*String*/ActionData) {
        try{
            return new IPresentationItem80(_NativeIPresentation80_CreateAction(this.getInstanceHandle,/*String*/allocateUTF8(String(ActionData))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMovie(/*Int32*/FrameSize, /*Int32*/FramesPerSecond, /*Boolean*/HideOverlay) {
        try{
            _NativeIPresentation80_CreateMovie(this.getInstanceHandle,/*Int32*/FrameSize,/*Int32*/FramesPerSecond,/*Boolean*/HideOverlay);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateStep(/*String*/Description) {
        try{
            return new IPresentationItem80(_NativeIPresentation80_CreateStep(this.getInstanceHandle,/*String*/allocateUTF8(String(Description))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteItem(/*String*/ItemID) {
        try{
            _NativeIPresentation80_DeleteItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetItem(/*String*/ItemID) {
        try{
            return new IPresentationItem80(_NativeIPresentation80_GetItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetItemPosition(/*String*/ItemID) {
        try{
            return new IPosition80(_NativeIPresentation80_GetItemPosition(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    MoveItem(/*String*/ItemID, /*String*/NewParentID, /*String*/InsertBeforeID) {
        try{
            _NativeIPresentation80_MoveItem(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID)),/*String*/allocateUTF8(String(NewParentID)),/*String*/allocateUTF8(String(InsertBeforeID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    NextStep() {
        try{
            _NativeIPresentation80_NextStep(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Pause() {
        try{
            _NativeIPresentation80_Pause(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Play() {
        try{
            _NativeIPresentation80_Play(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PlayFromID(/*String*/PresentationItemID) {
        try{
            _NativeIPresentation80_PlayFromID(this.getInstanceHandle,/*String*/allocateUTF8(String(PresentationItemID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    PreviousStep() {
        try{
            _NativeIPresentation80_PreviousStep(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ShowPath(/*String*/ItemID, /*Boolean*/Show, /*Boolean*/withAnimation) {
        try{
            _NativeIPresentation80_ShowPath(this.getInstanceHandle,/*String*/allocateUTF8(String(ItemID)),/*Boolean*/Show,/*Boolean*/withAnimation);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SkipAction() {
        try{
            _NativeIPresentation80_SkipAction(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Stop() {
        try{
            _NativeIPresentation80_Stop(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    StopMovie() {
        try{
            _NativeIPresentation80_StopMovie(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IScreenOverlay80 extends ITerraExplorerObject80 {
    get ImageFileName(){
        try{
            return UTF8ToString(_NativeIScreenOverlay80_get_ImageFileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ImageFileName(/*String*/pVal){
            try{
                _NativeIScreenOverlay80_put_ImageFileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get OverlayXY(){
        try{
            return new IScreenOverlayXY80(_NativeIScreenOverlay80_get_OverlayXY(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ScreenXY(){
        try{
            return new IScreenOverlayXY80(_NativeIScreenOverlay80_get_ScreenXY(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Size(){
        try{
            return new IScreenOverlayXY80(_NativeIScreenOverlay80_get_Size(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Rotation(){
        try{
            return _NativeIScreenOverlay80_get_Rotation(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Rotation(/*Double*/pVal){
            try{
                _NativeIScreenOverlay80_put_Rotation(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Color(){
        try{
            return new IColor80(_NativeIScreenOverlay80_get_Color(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Color(/*IColor80*/pVal){
            try{
                _NativeIScreenOverlay80_put_Color(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DrawOrder(){
        try{
            return _NativeIScreenOverlay80_get_DrawOrder(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DrawOrder(/*Int32*/pVal){
            try{
                _NativeIScreenOverlay80_put_DrawOrder(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IVisibility80 extends TEIUnknownHandle80 {
    get Show(){
        try{
            return _NativeIVisibility80_get_Show(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Show(/*Boolean*/pVal){
            try{
                _NativeIVisibility80_put_Show(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxVisibilityDistance(){
        try{
            return _NativeIVisibility80_get_MaxVisibilityDistance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxVisibilityDistance(/*Double*/pVal){
            try{
                _NativeIVisibility80_put_MaxVisibilityDistance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinVisibilityDistance(){
        try{
            return _NativeIVisibility80_get_MinVisibilityDistance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinVisibilityDistance(/*Double*/pVal){
            try{
                _NativeIVisibility80_put_MinVisibilityDistance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ShowThroughDistance(){
        try{
            return _NativeIVisibility80_get_ShowThroughDistance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ShowThroughDistance(/*Double*/pVal){
            try{
                _NativeIVisibility80_put_ShowThroughDistance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IBBox3D80 extends TEIUnknownHandle80 {
    get MinX(){
        try{
            return _NativeIBBox3D80_get_MinX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinX(/*Double*/pVal){
            try{
                _NativeIBBox3D80_put_MinX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinY(){
        try{
            return _NativeIBBox3D80_get_MinY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinY(/*Double*/pVal){
            try{
                _NativeIBBox3D80_put_MinY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinHeight(){
        try{
            return _NativeIBBox3D80_get_MinHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinHeight(/*Double*/pVal){
            try{
                _NativeIBBox3D80_put_MinHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxX(){
        try{
            return _NativeIBBox3D80_get_MaxX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxX(/*Double*/pVal){
            try{
                _NativeIBBox3D80_put_MaxX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxY(){
        try{
            return _NativeIBBox3D80_get_MaxY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxY(/*Double*/pVal){
            try{
                _NativeIBBox3D80_put_MaxY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxHeight(){
        try{
            return _NativeIBBox3D80_get_MaxHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxHeight(/*Double*/pVal){
            try{
                _NativeIBBox3D80_put_MaxHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class I3DMLFeatureLayers80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return new I3DMLFeatureLayer80(_NativeI3DMLFeatureLayers80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeI3DMLFeatureLayers80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IFeatureGroups80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return new IFeatureGroup80(_NativeIFeatureGroups80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIFeatureGroups80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Polyline(){
        try{
            return new IFeatureGroup80(_NativeIFeatureGroups80_get_Polyline(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Polygon(){
        try{
            return new IFeatureGroup80(_NativeIFeatureGroups80_get_Polygon(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Point(){
        try{
            return new IFeatureGroup80(_NativeIFeatureGroups80_get_Point(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Annotation(){
        try{
            return new IFeatureGroup80(_NativeIFeatureGroups80_get_Annotation(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Text(){
        try{
            return new IFeatureGroup80(_NativeIFeatureGroups80_get_Text(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    SetClassification(/*String*/Name, /*String*/Value) {
        try{
            _NativeIFeatureGroups80_SetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*String*/allocateUTF8(String(Value)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetProperty(/*String*/Name, /*Object*/Value) {
        try{
            _NativeIFeatureGroups80_SetProperty(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*Object*/Emval.toHandle(Value));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IBBox2D80 extends TEIUnknownHandle80 {
    get MinX(){
        try{
            return _NativeIBBox2D80_get_MinX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinX(/*Double*/pVal){
            try{
                _NativeIBBox2D80_put_MinX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinY(){
        try{
            return _NativeIBBox2D80_get_MinY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinY(/*Double*/pVal){
            try{
                _NativeIBBox2D80_put_MinY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxX(){
        try{
            return _NativeIBBox2D80_get_MaxX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxX(/*Double*/pVal){
            try{
                _NativeIBBox2D80_put_MaxX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxY(){
        try{
            return _NativeIBBox2D80_get_MaxY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxY(/*Double*/pVal){
            try{
                _NativeIBBox2D80_put_MaxY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ICoordinateSystem80 extends TEIUnknownHandle80 {
    get WellKnownText(){
        try{
            return UTF8ToString(_NativeICoordinateSystem80_get_WellKnownText(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set WellKnownText(/*String*/pVal){
            try{
                _NativeICoordinateSystem80_put_WellKnownText(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get WktDescription(){
        try{
            return UTF8ToString(_NativeICoordinateSystem80_get_WktDescription(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PrettyWkt(){
        try{
            return UTF8ToString(_NativeICoordinateSystem80_get_PrettyWkt(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FactorToMeter(){
        try{
            return _NativeICoordinateSystem80_get_FactorToMeter(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetFactorToMeterEx(/*Double*/Y) {
        try{
            return _NativeICoordinateSystem80_GetFactorToMeterEx(this.getInstanceHandle,/*Double*/Y);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InitFromBMG(/*String*/Group, /*String*/Sys, /*String*/Datum, /*String*/Unit) {
        try{
            _NativeICoordinateSystem80_InitFromBMG(this.getInstanceHandle,/*String*/allocateUTF8(String(Group)),/*String*/allocateUTF8(String(Sys)),/*String*/allocateUTF8(String(Datum)),/*String*/allocateUTF8(String(Unit)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InitFromEPSG(/*Int32*/EPSG) {
        try{
            _NativeICoordinateSystem80_InitFromEPSG(this.getInstanceHandle,/*Int32*/EPSG);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InitLatLong() {
        try{
            _NativeICoordinateSystem80_InitLatLong(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsCompound() {
        try{
            return _NativeICoordinateSystem80_IsCompound(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsGeocentric() {
        try{
            return _NativeICoordinateSystem80_IsGeocentric(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsPlanar() {
        try{
            return _NativeICoordinateSystem80_IsPlanar(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsSame(/*ICoordinateSystem80*/pCoordinateSystem) {
        try{
            return _NativeICoordinateSystem80_IsSame(this.getInstanceHandle,/*ICoordinateSystem80*/pCoordinateSystem.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsWktValid() {
        try{
            return _NativeICoordinateSystem80_IsWktValid(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IFeatureGroup80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeIFeatureGroup80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Features(){
        try{
            return new IFeatures80(_NativeIFeatureGroup80_get_Features(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get GeometryType(){
        try{
            return _NativeIFeatureGroup80_get_GeometryType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get DisplayAs(){
        try{
            return _NativeIFeatureGroup80_get_DisplayAs(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisplayAs(/*ObjectTypeCode*/ObjectType){
            try{
                _NativeIFeatureGroup80_put_DisplayAs(this.getInstanceHandle,/*ObjectTypeCode*/ObjectType); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    CreateFeature(/*Object*/Geometry, /*String*/Attributes="") {
        try{
            return UTF8ToString(_NativeIFeatureGroup80_CreateFeature(this.getInstanceHandle,/*Object*/Emval.toHandle(Geometry),/*String*/allocateUTF8(String(Attributes))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DrawFeature(/*DrawingMode*/DrawingMode=DrawingMode80.DRAW_MODE_MAGNET, /*Int32*/Left=2147483647, /*Int32*/Top=2147483647) {
        try{
            return new IFeature80(_NativeIFeatureGroup80_DrawFeature(this.getInstanceHandle,/*DrawingMode*/DrawingMode,/*Int32*/Left,/*Int32*/Top));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExecuteGetDataSourceFeatureIdQuery(/*String*/FeatureID) {
        try{
            return new IFeature80(_NativeIFeatureGroup80_ExecuteGetDataSourceFeatureIdQuery(this.getInstanceHandle,/*String*/allocateUTF8(String(FeatureID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetClassification(/*String*/Name) {
        try{
            return UTF8ToString(_NativeIFeatureGroup80_GetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetCurrentFeatures() {
        try{
            return new IFeatures80(_NativeIFeatureGroup80_GetCurrentFeatures(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetFeatureByObjectID(/*String*/ObjectID) {
        try{
            return new IFeature80(_NativeIFeatureGroup80_GetFeatureByObjectID(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetProperty(/*String*/Name) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIFeatureGroup80_GetProperty(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsAnnotation() {
        try{
            return _NativeIFeatureGroup80_IsAnnotation(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsClassified(/*String*/Name) {
        try{
            return _NativeIFeatureGroup80_IsClassified(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    OpenStyleEditorDialog(/*String*/Name) {
        try{
            _NativeIFeatureGroup80_OpenStyleEditorDialog(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemoveFeature(/*String*/ObjectID) {
        try{
            _NativeIFeatureGroup80_RemoveFeature(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetClassification(/*String*/Name, /*String*/Value) {
        try{
            _NativeIFeatureGroup80_SetClassification(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*String*/allocateUTF8(String(Value)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetProperty(/*String*/Name, /*Object*/Value) {
        try{
            _NativeIFeatureGroup80_SetProperty(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*Object*/Emval.toHandle(Value));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IFeatureAttributes80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return new IFeatureAttribute80(_NativeIFeatureAttributes80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIFeatureAttributes80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    GetFeatureAttribute(/*String*/attributeNameStr) {
        try{
            return new IFeatureAttribute80(_NativeIFeatureAttributes80_GetFeatureAttribute(this.getInstanceHandle,/*String*/allocateUTF8(String(attributeNameStr))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IFeatureAttribute80 extends TEIUnknownHandle80 {
    get Name(){
        try{
            return UTF8ToString(_NativeIFeatureAttribute80_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Value(){
        try{
            return UTF8ToString(_NativeIFeatureAttribute80_get_Value(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Value(/*String*/pVal){
            try{
                _NativeIFeatureAttribute80_put_Value(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IAttributes80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return new IAttribute80(_NativeIAttributes80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIAttributes80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Attribute(/*Object*/Index){                                    
        try{
            return new IAttribute80(_NativeIAttributes80_get_Attribute(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ImportAll(/*Boolean*/val){
            try{
                _NativeIAttributes80_put_ImportAll(this.getInstanceHandle,/*Boolean*/val); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    CreateAttribute(/*String*/AttributeName, /*AttributeTypeCode*/attributeType, /*Int32*/Size, /*Int32*/Precision=15) {
        try{
            _NativeIAttributes80_CreateAttribute(this.getInstanceHandle,/*String*/allocateUTF8(String(AttributeName)),/*AttributeTypeCode*/attributeType,/*Int32*/Size,/*Int32*/Precision);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsAttributeExist(/*String*/AttributeName) {
        try{
            return _NativeIAttributes80_IsAttributeExist(this.getInstanceHandle,/*String*/allocateUTF8(String(AttributeName)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IAttribute80 extends TEIUnknownHandle80 {
    get Name(){
        try{
            return UTF8ToString(_NativeIAttribute80_get_Name(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Name(/*String*/pVal){
            try{
                _NativeIAttribute80_put_Name(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Type(){
        try{
            return _NativeIAttribute80_get_Type(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Type(/*AttributeTypeCode*/pVal){
            try{
                _NativeIAttribute80_put_Type(this.getInstanceHandle,/*AttributeTypeCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Size(){
        try{
            return _NativeIAttribute80_get_Size(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Size(/*Int32*/pVal){
            try{
                _NativeIAttribute80_put_Size(this.getInstanceHandle,/*Int32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Import(){
        try{
            return _NativeIAttribute80_get_Import(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Import(/*Boolean*/pVal){
            try{
                _NativeIAttribute80_put_Import(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class INetworkLink80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeINetworkLink80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Path(){
        try{
            return UTF8ToString(_NativeINetworkLink80_get_Path(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Path(/*String*/pVal){
            try{
                _NativeINetworkLink80_put_Path(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AutoRefreshInterval(){
        try{
            return _NativeINetworkLink80_get_AutoRefreshInterval(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AutoRefreshInterval(/*Int32*/seconds){
            try{
                _NativeINetworkLink80_put_AutoRefreshInterval(this.getInstanceHandle,/*Int32*/seconds); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get RefreshAfterStopInterval(){
        try{
            return _NativeINetworkLink80_get_RefreshAfterStopInterval(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set RefreshAfterStopInterval(/*Int32*/seconds){
            try{
                _NativeINetworkLink80_put_RefreshAfterStopInterval(this.getInstanceHandle,/*Int32*/seconds); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    Refresh() {
        try{
            _NativeINetworkLink80_Refresh(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IMessageObject80 extends TEIUnknownHandle80 {
    get MessageID(){
        try{
            return UTF8ToString(_NativeIMessageObject80_get_MessageID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MessageID(/*String*/pVal){
            try{
                _NativeIMessageObject80_put_MessageID(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    Activate() {
        try{
            _NativeIMessageObject80_Activate(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetMessageObject() {
        try{
            return GetITerraExplorerObject80Derived(_NativeIMessageObject80_GetMessageObject(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITerrainObject80 extends TEIUnknownHandle80 {
    get GroundObject(){
        try{
            return _NativeITerrainObject80_get_GroundObject(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set GroundObject(/*Boolean*/pVal){
            try{
                _NativeITerrainObject80_put_GroundObject(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DrawOrder(){
        try{
            return _NativeITerrainObject80_get_DrawOrder(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DrawOrder(/*Double*/pVal){
            try{
                _NativeITerrainObject80_put_DrawOrder(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BBox(){
        try{
            return new IBBox3D80(_NativeITerrainObject80_get_BBox(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tint(){
        try{
            return new IColor80(_NativeITerrainObject80_get_Tint(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Tint(/*IColor80*/pVal){
            try{
                _NativeITerrainObject80_put_Tint(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Highlight(){
        try{
            return _NativeITerrainObject80_get_Highlight(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Highlight(/*Boolean*/pVal){
            try{
                _NativeITerrainObject80_put_Highlight(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    GetRecommendedDistance() {
        try{
            return _NativeITerrainObject80_GetRecommendedDistance(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITooltip80 extends TEIUnknownHandle80 {
    get Text(){
        try{
            return UTF8ToString(_NativeITooltip80_get_Text(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Text(/*String*/pVal){
            try{
                _NativeITooltip80_put_Text(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IAttachment80 extends TEIUnknownHandle80 {
    get IsAttached(){
        try{
            return _NativeIAttachment80_get_IsAttached(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get AutoDetach(){
        try{
            return _NativeIAttachment80_get_AutoDetach(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set AutoDetach(/*Boolean*/pVal){
            try{
                _NativeIAttachment80_put_AutoDetach(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaX(){
        try{
            return _NativeIAttachment80_get_DeltaX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaX(/*Double*/DeltaX){
            try{
                _NativeIAttachment80_put_DeltaX(this.getInstanceHandle,/*Double*/DeltaX); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaY(){
        try{
            return _NativeIAttachment80_get_DeltaY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaY(/*Double*/DeltaY){
            try{
                _NativeIAttachment80_put_DeltaY(this.getInstanceHandle,/*Double*/DeltaY); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaAltitude(){
        try{
            return _NativeIAttachment80_get_DeltaAltitude(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaAltitude(/*Double*/DeltaAltitude){
            try{
                _NativeIAttachment80_put_DeltaAltitude(this.getInstanceHandle,/*Double*/DeltaAltitude); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaPitch(){
        try{
            return _NativeIAttachment80_get_DeltaPitch(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaPitch(/*Double*/DeltaPitch){
            try{
                _NativeIAttachment80_put_DeltaPitch(this.getInstanceHandle,/*Double*/DeltaPitch); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaYaw(){
        try{
            return _NativeIAttachment80_get_DeltaYaw(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaYaw(/*Double*/DeltaYaw){
            try{
                _NativeIAttachment80_put_DeltaYaw(this.getInstanceHandle,/*Double*/DeltaYaw); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DeltaRoll(){
        try{
            return _NativeIAttachment80_get_DeltaRoll(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DeltaRoll(/*Double*/DeltaRoll){
            try{
                _NativeIAttachment80_put_DeltaRoll(this.getInstanceHandle,/*Double*/DeltaRoll); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get AttachedToID(){
        try{
            return UTF8ToString(_NativeIAttachment80_get_AttachedToID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AttachTo(/*String*/ObjectID, /*Double*/DeltaX, /*Double*/DeltaY, /*Double*/DeltaAltitude, /*Double*/DeltaYaw, /*Double*/DeltaPitch, /*Double*/DeltaRoll) {
        try{
            _NativeIAttachment80_AttachTo(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)),/*Double*/DeltaX,/*Double*/DeltaY,/*Double*/DeltaAltitude,/*Double*/DeltaYaw,/*Double*/DeltaPitch,/*Double*/DeltaRoll);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ITimeSpan80 extends TEIUnknownHandle80 {
    get Start(){
        try{
            return EmvalToJS(Emval.toValue(_NativeITimeSpan80_get_Start(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Start(/*Object*/pVal){
            try{
                _NativeITimeSpan80_put_Start(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get End(){
        try{
            return EmvalToJS(Emval.toValue(_NativeITimeSpan80_get_End(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set End(/*Object*/pVal){
            try{
                _NativeITimeSpan80_put_End(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ILineStyle80 extends TEIUnknownHandle80 {
    get Color(){
        try{
            return new IColor80(_NativeILineStyle80_get_Color(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Color(/*IColor80*/pVal){
            try{
                _NativeILineStyle80_put_Color(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeILineStyle80_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Double*/pVal){
            try{
                _NativeILineStyle80_put_Width(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get BackColor(){
        try{
            return new IColor80(_NativeILineStyle80_get_BackColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set BackColor(/*IColor80*/pVal){
            try{
                _NativeILineStyle80_put_BackColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Pattern(){
        try{
            return _NativeILineStyle80_get_Pattern(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Pattern(/*UInt32*/pVal){
            try{
                _NativeILineStyle80_put_Pattern(this.getInstanceHandle,/*UInt32*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IFillStyle80 extends TEIUnknownHandle80 {
    get Color(){
        try{
            return new IColor80(_NativeIFillStyle80_get_Color(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Color(/*IColor80*/pVal){
            try{
                _NativeIFillStyle80_put_Color(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Texture(){
        try{
            return new IObjectTexture80(_NativeIFillStyle80_get_Texture(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IObjectTexture80 extends TEIUnknownHandle80 {
    get FileName(){
        try{
            return UTF8ToString(_NativeIObjectTexture80_get_FileName(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FileName(/*String*/pVal){
            try{
                _NativeIObjectTexture80_put_FileName(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get TilingMethod(){
        try{
            return _NativeIObjectTexture80_get_TilingMethod(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set TilingMethod(/*TilingMethodCode*/pVal){
            try{
                _NativeIObjectTexture80_put_TilingMethod(this.getInstanceHandle,/*TilingMethodCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleX(){
        try{
            return _NativeIObjectTexture80_get_ScaleX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleX(/*Double*/pVal){
            try{
                _NativeIObjectTexture80_put_ScaleX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ScaleY(){
        try{
            return _NativeIObjectTexture80_get_ScaleY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ScaleY(/*Double*/pVal){
            try{
                _NativeIObjectTexture80_put_ScaleY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get RotateAngle(){
        try{
            return _NativeIObjectTexture80_get_RotateAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set RotateAngle(/*Double*/pVal){
            try{
                _NativeIObjectTexture80_put_RotateAngle(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get XScrollRate(){
        try{
            return _NativeIObjectTexture80_get_XScrollRate(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set XScrollRate(/*Double*/pVal){
            try{
                _NativeIObjectTexture80_put_XScrollRate(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get YScrollRate(){
        try{
            return _NativeIObjectTexture80_get_YScrollRate(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set YScrollRate(/*Double*/pVal){
            try{
                _NativeIObjectTexture80_put_YScrollRate(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IVolumeClassification80 extends TEIUnknownHandle80 {
    get Mode(){
        try{
            return _NativeIVolumeClassification80_get_Mode(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Mode(/*VolumeMode*/pVal){
            try{
                _NativeIVolumeClassification80_put_Mode(this.getInstanceHandle,/*VolumeMode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ExtrudeUpFront(){
        try{
            return _NativeIVolumeClassification80_get_ExtrudeUpFront(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ExtrudeUpFront(/*Double*/Val){
            try{
                _NativeIVolumeClassification80_put_ExtrudeUpFront(this.getInstanceHandle,/*Double*/Val); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ExtrudeDownBack(){
        try{
            return _NativeIVolumeClassification80_get_ExtrudeDownBack(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ExtrudeDownBack(/*Double*/Val){
            try{
                _NativeIVolumeClassification80_put_ExtrudeDownBack(this.getInstanceHandle,/*Double*/Val); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get buffer(){
        try{
            return _NativeIVolumeClassification80_get_buffer(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set buffer(/*Double*/Val){
            try{
                _NativeIVolumeClassification80_put_buffer(this.getInstanceHandle,/*Double*/Val); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Vertical(){
        try{
            return _NativeIVolumeClassification80_get_Vertical(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IBuildingFace80 extends TEIUnknownHandle80 {
    get FillType(){
        try{
            return _NativeIBuildingFace80_get_FillType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FillType(/*FaceFillTypeCode*/pVal){
            try{
                _NativeIBuildingFace80_put_FillType(this.getInstanceHandle,/*FaceFillTypeCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Color(){
        try{
            return new IColor80(_NativeIBuildingFace80_get_Color(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Color(/*IColor80*/pVal){
            try{
                _NativeIBuildingFace80_put_Color(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Texture(){
        try{
            return new IObjectTexture80(_NativeIBuildingFace80_get_Texture(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IRoofFace80 extends IBuildingFace80 {
    get Style(){
        try{
            return _NativeIRoofFace80_get_Style(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Style(/*RoofStyleCode*/pVal){
            try{
                _NativeIRoofFace80_put_Style(this.getInstanceHandle,/*RoofStyleCode*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get RooftopDeltaHeight(){
        try{
            return _NativeIRoofFace80_get_RooftopDeltaHeight(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set RooftopDeltaHeight(/*Double*/pVal){
            try{
                _NativeIRoofFace80_put_RooftopDeltaHeight(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IBuildingSides80 extends IBuildingFace80 {
    Item(/*Object*/Index){                                    
        try{
            return new IBuildingFace80(_NativeIBuildingSides80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIBuildingSides80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IRouteWaypoints80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return new IRouteWaypoint80(_NativeIRouteWaypoints80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIRouteWaypoints80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Current(){
        try{
            return _NativeIRouteWaypoints80_get_Current(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddWaypoint(/*IRouteWaypoint80*/pWaypoint) {
        try{
            _NativeIRouteWaypoints80_AddWaypoint(this.getInstanceHandle,/*IRouteWaypoint80*/pWaypoint.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteWaypoint(/*Int32*/Index) {
        try{
            _NativeIRouteWaypoints80_DeleteWaypoint(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    FromArray(/*Object*/Waypoints) {
        try{
            _NativeIRouteWaypoints80_FromArray(this.getInstanceHandle,/*Object*/Emval.toHandle(Waypoints));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetWaypoint(/*Int32*/Index) {
        try{
            return new IRouteWaypoint80(_NativeIRouteWaypoints80_GetWaypoint(this.getInstanceHandle,/*Int32*/Index));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InsertWaypoint(/*Int32*/IndexInsertAfter, /*IRouteWaypoint80*/pWaypoint) {
        try{
            _NativeIRouteWaypoints80_InsertWaypoint(this.getInstanceHandle,/*Int32*/IndexInsertAfter,/*IRouteWaypoint80*/pWaypoint.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ModifyWaypoint(/*Int32*/Index, /*IRouteWaypoint80*/pWaypoint) {
        try{
            _NativeIRouteWaypoints80_ModifyWaypoint(this.getInstanceHandle,/*Int32*/Index,/*IRouteWaypoint80*/pWaypoint.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToArray() {
        try{
            return EmvalToJS(Emval.toValue(_NativeIRouteWaypoints80_ToArray(this.getInstanceHandle)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IPointCloudDefaultLocation80 extends TEIUnknownHandle80 {
    get X(){
        try{
            return _NativeIPointCloudDefaultLocation80_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Y(){
        try{
            return _NativeIPointCloudDefaultLocation80_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Altitude(){
        try{
            return _NativeIPointCloudDefaultLocation80_get_Altitude(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get CoordinateSystem(){
        try{
            return new ICoordinateSystem80(_NativeIPointCloudDefaultLocation80_get_CoordinateSystem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IPresentationItem80 extends TEIUnknownHandle80 {
    get ID(){
        try{
            return UTF8ToString(_NativeIPresentationItem80_get_ID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Description(){
        try{
            return UTF8ToString(_NativeIPresentationItem80_get_Description(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ItemJSON(){
        try{
            return UTF8ToString(_NativeIPresentationItem80_get_ItemJSON(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ItemJSON(/*String*/pVal){
            try{
                _NativeIPresentationItem80_put_ItemJSON(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Type(){
        try{
            return _NativeIPresentationItem80_get_Type(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Parent(){
        try{
            return new IPresentationItem80(_NativeIPresentationItem80_get_PARENT(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get NextSibling(){
        try{
            return new IPresentationItem80(_NativeIPresentationItem80_get_NextSibling(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PreviousSibling(){
        try{
            return new IPresentationItem80(_NativeIPresentationItem80_get_PreviousSibling(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FirstChild(){
        try{
            return new IPresentationItem80(_NativeIPresentationItem80_get_FirstChild(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    IsParentOf(/*String*/PresentationItemID) {
        try{
            return _NativeIPresentationItem80_IsParentOf(this.getInstanceHandle,/*String*/allocateUTF8(String(PresentationItemID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IScreenOverlayXY80 extends TEIUnknownHandle80 {
    get X(){
        try{
            return _NativeIScreenOverlayXY80_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/pVal){
            try{
                _NativeIScreenOverlayXY80_put_X(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeIScreenOverlayXY80_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/pVal){
            try{
                _NativeIScreenOverlayXY80_put_Y(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get XUnit(){
        try{
            return _NativeIScreenOverlayXY80_get_XUnit(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set XUnit(/*ScreenOverlayUnits*/pVal){
            try{
                _NativeIScreenOverlayXY80_put_XUnit(this.getInstanceHandle,/*ScreenOverlayUnits*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get YUnit(){
        try{
            return _NativeIScreenOverlayXY80_get_YUnit(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set YUnit(/*ScreenOverlayUnits*/pVal){
            try{
                _NativeIScreenOverlayXY80_put_YUnit(this.getInstanceHandle,/*ScreenOverlayUnits*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IWorldPointInfo80 extends TEIUnknownHandle80 {
    get Position(){
        try{
            return new IPosition80(_NativeIWorldPointInfo80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ObjectID(){
        try{
            return UTF8ToString(_NativeIWorldPointInfo80_get_ObjectID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Type(){
        try{
            return _NativeIWorldPointInfo80_get_Type(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class ITerraExplorerObjects80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return GetITerraExplorerObject80Derived(_NativeITerraExplorerObjects80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeITerraExplorerObjects80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IScreenPointInfo80 extends TEIUnknownHandle80 {
    get X(){
        try{
            return _NativeIScreenPointInfo80_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Y(){
        try{
            return _NativeIScreenPointInfo80_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get InsideScreenRect(){
        try{
            return _NativeIScreenPointInfo80_get_InsideScreenRect(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PointBehindCamera(){
        try{
            return _NativeIScreenPointInfo80_get_PointBehindCamera(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IMouseInfo80 extends TEIUnknownHandle80 {
    get X(){
        try{
            return _NativeIMouseInfo80_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Y(){
        try{
            return _NativeIMouseInfo80_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get delta(){
        try{
            return _NativeIMouseInfo80_get_delta(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Flags(){
        try{
            return _NativeIMouseInfo80_get_Flags(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IScreenRect80 extends TEIUnknownHandle80 {
    get Left(){
        try{
            return _NativeIScreenRect80_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeIScreenRect80_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Width(){
        try{
            return _NativeIScreenRect80_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Height(){
        try{
            return _NativeIScreenRect80_get_Height(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IModuleLicenseInfo80 extends TEIUnknownHandle80 {
    get Module(){
        try{
            return UTF8ToString(_NativeIModuleLicenseInfo80_get_Module(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Exist(){
        try{
            return _NativeIModuleLicenseInfo80_get_Exist(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Valid(){
        try{
            return _NativeIModuleLicenseInfo80_get_Valid(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ErrCode(){
        try{
            return _NativeIModuleLicenseInfo80_get_ErrCode(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ErrCodeEx(){
        try{
            return _NativeIModuleLicenseInfo80_get_ErrCodeEx(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ErrString(){
        try{
            return UTF8ToString(_NativeIModuleLicenseInfo80_get_ErrString(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PurchaseType(){
        try{
            return UTF8ToString(_NativeIModuleLicenseInfo80_get_PurchaseType(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ExpirationDate(){
        try{
            return EmvalToJS(Emval.toValue(_NativeIModuleLicenseInfo80_get_ExpirationDate(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Version(){
        try{
            return UTF8ToString(_NativeIModuleLicenseInfo80_get_Version(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IContainers80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return new IContainer80(_NativeIContainers80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIContainers80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddContainer(/*String*/Name, /*String*/URL, /*ContainerSite*/StartupSite) {
        try{
            return _NativeIContainers80_AddContainer(this.getInstanceHandle,/*String*/allocateUTF8(String(Name)),/*String*/allocateUTF8(String(URL)),/*ContainerSite*/StartupSite);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    GetContainer(/*Int32*/Index) {
        try{
            return new IContainerItem80(_NativeIContainers80_GetContainer(this.getInstanceHandle,/*Int32*/Index));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemoveContainer(/*Int32*/Index) {
        try{
            _NativeIContainers80_RemoveContainer(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IMultiple3DWindows80 extends TEIUnknownHandle80 {
    IsLeader() {
        try{
            return _NativeIMultiple3DWindows80_IsLeader(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    LinkPosition(/*Object*/target, /*Double*/OffsetX=0, /*Double*/OffsetY=0, /*Double*/OffsetAltitude=0, /*Double*/OffsetYaw=0, /*Double*/OffsetPitch=0, /*LinkPositionFlags*/LinkFlags=LinkPositionFlags80.LP_NONE) {
        try{
            _NativeIMultiple3DWindows80_LinkPosition(this.getInstanceHandle,/*Object*/Emval.toHandle(target),/*Double*/OffsetX,/*Double*/OffsetY,/*Double*/OffsetAltitude,/*Double*/OffsetYaw,/*Double*/OffsetPitch,/*LinkPositionFlags*/LinkFlags);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetAsLeader() {
        try{
            _NativeIMultiple3DWindows80_SetAsLeader(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    UnlinkPosition() {
        try{
            _NativeIMultiple3DWindows80_UnlinkPosition(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IClipboard80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return GetITerraExplorerObject80Derived(_NativeIClipboard80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIClipboard80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddObject(/*String*/ObjectID) {
        try{
            _NativeIClipboard80_AddObject(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemoveAll() {
        try{
            _NativeIClipboard80_RemoveAll(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ISelection80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return GetITerraExplorerObject80Derived(_NativeISelection80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeISelection80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Add(/*String*/ObjectID) {
        try{
            _NativeISelection80_Add(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CanAdd(/*String*/ObjectID) {
        try{
            return _NativeISelection80_CanAdd(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)))== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Remove(/*String*/ObjectID) {
        try{
            _NativeISelection80_Remove(this.getInstanceHandle,/*String*/allocateUTF8(String(ObjectID)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    RemoveAll() {
        try{
            _NativeISelection80_RemoveAll(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class I3DViewshed80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeI3DViewshed80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeI3DViewshed80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeI3DViewshed80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeI3DViewshed80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeI3DViewshed80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeI3DViewshed80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeI3DViewshed80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeI3DViewshed80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeI3DViewshed80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeI3DViewshed80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get FieldOfViewX(){
        try{
            return _NativeI3DViewshed80_get_FieldOfViewX(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FieldOfViewX(/*Double*/pVal){
            try{
                _NativeI3DViewshed80_put_FieldOfViewX(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get FieldOfViewY(){
        try{
            return _NativeI3DViewshed80_get_FieldOfViewY(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set FieldOfViewY(/*Double*/pVal){
            try{
                _NativeI3DViewshed80_put_FieldOfViewY(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Distance(){
        try{
            return _NativeI3DViewshed80_get_Distance(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Distance(/*Double*/pVal){
            try{
                _NativeI3DViewshed80_put_Distance(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get RayColor(){
        try{
            return new IColor80(_NativeI3DViewshed80_get_RayColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set RayColor(/*IColor80*/pVal){
            try{
                _NativeI3DViewshed80_put_RayColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get VisibleAreaColor(){
        try{
            return new IColor80(_NativeI3DViewshed80_get_VisibleAreaColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set VisibleAreaColor(/*IColor80*/pVal){
            try{
                _NativeI3DViewshed80_put_VisibleAreaColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get HiddenAreaColor(){
        try{
            return new IColor80(_NativeI3DViewshed80_get_HiddenAreaColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set HiddenAreaColor(/*IColor80*/pVal){
            try{
                _NativeI3DViewshed80_put_HiddenAreaColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Quality(){
        try{
            return _NativeI3DViewshed80_get_Quality(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Quality(/*ViewshedQuality*/pVal){
            try{
                _NativeI3DViewshed80_put_Quality(this.getInstanceHandle,/*ViewshedQuality*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get RefreshRate(){
        try{
            return _NativeI3DViewshed80_get_RefreshRate(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set RefreshRate(/*ViewshedRefreshRate*/pVal){
            try{
                _NativeI3DViewshed80_put_RefreshRate(this.getInstanceHandle,/*ViewshedRefreshRate*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ILineOfSight80 extends ITerraExplorerObject80 {
    get VisibleTargets(){
        try{
            return EmvalToJS(Emval.toValue(_NativeILineOfSight80_get_VisibleTargets(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HiddenTargets(){
        try{
            return EmvalToJS(Emval.toValue(_NativeILineOfSight80_get_HiddenTargets(this.getInstanceHandle))); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class ITerrainThreatDome80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeITerrainThreatDome80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeITerrainThreatDome80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeITerrainThreatDome80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeITerrainThreatDome80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeITerrainThreatDome80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeITerrainThreatDome80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeITerrainThreatDome80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeITerrainThreatDome80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeITerrainThreatDome80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Color(){
        try{
            return new IColor80(_NativeITerrainThreatDome80_get_Color(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Color(/*IColor80*/pVal){
            try{
                _NativeITerrainThreatDome80_put_Color(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Range(){
        try{
            return _NativeITerrainThreatDome80_get_Range(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get AngularStep(){
        try{
            return _NativeITerrainThreatDome80_get_AngularStep(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get RadialStep(){
        try{
            return _NativeITerrainThreatDome80_get_RadialStep(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Direction(){
        try{
            return _NativeITerrainThreatDome80_get_Direction(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HorizontalFOV(){
        try{
            return _NativeITerrainThreatDome80_get_HorizontalFOV(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ElevationAngle(){
        try{
            return _NativeITerrainThreatDome80_get_ElevationAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HorizontalStartAngle(){
        try{
            return _NativeITerrainThreatDome80_get_HorizontalStartAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get HorizontalEndAngle(){
        try{
            return _NativeITerrainThreatDome80_get_HorizontalEndAngle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IContourMap80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeIContourMap80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeIContourMap80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeIContourMap80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeIContourMap80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeIContourMap80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeIContourMap80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeIContourMap80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeIContourMap80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeIContourMap80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeIContourMap80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeIContourMap80_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Top(/*Double*/pVal){
            try{
                _NativeIContourMap80_put_Top(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Left(){
        try{
            return _NativeIContourMap80_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Left(/*Double*/pVal){
            try{
                _NativeIContourMap80_put_Left(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Right(){
        try{
            return _NativeIContourMap80_get_Right(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Right(/*Double*/pVal){
            try{
                _NativeIContourMap80_put_Right(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Bottom(){
        try{
            return _NativeIContourMap80_get_Bottom(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Bottom(/*Double*/pVal){
            try{
                _NativeIContourMap80_put_Bottom(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeIContourMap80_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Double*/pVal){
            try{
                _NativeIContourMap80_put_Width(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Depth(){
        try{
            return _NativeIContourMap80_get_Depth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Depth(/*Double*/pVal){
            try{
                _NativeIContourMap80_put_Depth(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DisplayStyle(){
        try{
            return _NativeIContourMap80_get_DisplayStyle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisplayStyle(/*ContourDisplayStyle*/pVal){
            try{
                _NativeIContourMap80_put_DisplayStyle(this.getInstanceHandle,/*ContourDisplayStyle*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get UseMinMaxValues(){
        try{
            return _NativeIContourMap80_get_UseMinMaxValues(this.getInstanceHandle)== 0?false:true; 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set UseMinMaxValues(/*Boolean*/pVal){
            try{
                _NativeIContourMap80_put_UseMinMaxValues(this.getInstanceHandle,/*Boolean*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MinElevation(){
        try{
            return _NativeIContourMap80_get_MinElevation(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MinElevation(/*Double*/pVal){
            try{
                _NativeIContourMap80_put_MinElevation(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get MaxElevation(){
        try{
            return _NativeIContourMap80_get_MaxElevation(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set MaxElevation(/*Double*/pVal){
            try{
                _NativeIContourMap80_put_MaxElevation(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ColorOutsideOfRange(){
        try{
            return _NativeIContourMap80_get_ColorOutsideOfRange(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ColorOutsideOfRange(/*ContourColorOutsideOfRange*/pVal){
            try{
                _NativeIContourMap80_put_ColorOutsideOfRange(this.getInstanceHandle,/*ContourColorOutsideOfRange*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CoverageArea(){
        try{
            return _NativeIContourMap80_get_CoverageArea(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CoverageArea(/*CoverageArea*/pVal){
            try{
                _NativeIContourMap80_put_CoverageArea(this.getInstanceHandle,/*CoverageArea*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PaletteID(){
        try{
            return UTF8ToString(_NativeIContourMap80_get_PaletteID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PaletteID(/*String*/pVal){
            try{
                _NativeIContourMap80_put_PaletteID(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ContourLinesColor(){
        try{
            return new IColor80(_NativeIContourMap80_get_ContourLinesColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ContourLinesColor(/*IColor80*/pVal){
            try{
                _NativeIContourMap80_put_ContourLinesColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ContourLinesInterval(){
        try{
            return _NativeIContourMap80_get_ContourLinesInterval(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ContourLinesInterval(/*Double*/pVal){
            try{
                _NativeIContourMap80_put_ContourLinesInterval(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Opacity(){
        try{
            return _NativeIContourMap80_get_Opacity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Opacity(/*Double*/Opacity){
            try{
                _NativeIContourMap80_put_Opacity(this.getInstanceHandle,/*Double*/Opacity); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ISlopeMap80 extends ITerraExplorerObject80 {
    get TreeItem(){
        try{
            return new ITreeItem80(_NativeISlopeMap80_get_TreeItem(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Message(){
        try{
            return new IMessageObject80(_NativeISlopeMap80_get_Message(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Action(){
        try{
            return new IAction80(_NativeISlopeMap80_get_Action(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Position(){
        try{
            return new IPosition80(_NativeISlopeMap80_get_Position(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Position(/*IPosition80*/pVal){
            try{
                _NativeISlopeMap80_put_Position(this.getInstanceHandle,/*IPosition80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Terrain(){
        try{
            return new ITerrainObject80(_NativeISlopeMap80_get_Terrain(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Tooltip(){
        try{
            return new ITooltip80(_NativeISlopeMap80_get_Tooltip(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Attachment(){
        try{
            return new IAttachment80(_NativeISlopeMap80_get_Attachment(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Visibility(){
        try{
            return new IVisibility80(_NativeISlopeMap80_get_Visibility(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get TimeSpan(){
        try{
            return new ITimeSpan80(_NativeISlopeMap80_get_TimeSpan(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Top(){
        try{
            return _NativeISlopeMap80_get_Top(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Top(/*Double*/pVal){
            try{
                _NativeISlopeMap80_put_Top(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Left(){
        try{
            return _NativeISlopeMap80_get_Left(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Left(/*Double*/pVal){
            try{
                _NativeISlopeMap80_put_Left(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Right(){
        try{
            return _NativeISlopeMap80_get_Right(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Right(/*Double*/pVal){
            try{
                _NativeISlopeMap80_put_Right(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Bottom(){
        try{
            return _NativeISlopeMap80_get_Bottom(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Bottom(/*Double*/pVal){
            try{
                _NativeISlopeMap80_put_Bottom(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Width(){
        try{
            return _NativeISlopeMap80_get_Width(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Width(/*Double*/pVal){
            try{
                _NativeISlopeMap80_put_Width(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Depth(){
        try{
            return _NativeISlopeMap80_get_Depth(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Depth(/*Double*/pVal){
            try{
                _NativeISlopeMap80_put_Depth(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get DisplayStyle(){
        try{
            return _NativeISlopeMap80_get_DisplayStyle(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set DisplayStyle(/*SlopeDisplayStyle*/pVal){
            try{
                _NativeISlopeMap80_put_DisplayStyle(this.getInstanceHandle,/*SlopeDisplayStyle*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get CoverageArea(){
        try{
            return _NativeISlopeMap80_get_CoverageArea(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set CoverageArea(/*CoverageArea*/pVal){
            try{
                _NativeISlopeMap80_put_CoverageArea(this.getInstanceHandle,/*CoverageArea*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get PaletteID(){
        try{
            return UTF8ToString(_NativeISlopeMap80_get_PaletteID(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set PaletteID(/*String*/pVal){
            try{
                _NativeISlopeMap80_put_PaletteID(this.getInstanceHandle,/*String*/allocateUTF8(String(pVal))); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get ArrowColor(){
        try{
            return new IColor80(_NativeISlopeMap80_get_ArrowColor(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set ArrowColor(/*IColor80*/pVal){
            try{
                _NativeISlopeMap80_put_ArrowColor(this.getInstanceHandle,/*IColor80*/pVal.getInstanceHandle); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Opacity(){
        try{
            return _NativeISlopeMap80_get_Opacity(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Opacity(/*Double*/Opacity){
            try{
                _NativeISlopeMap80_put_Opacity(this.getInstanceHandle,/*Double*/Opacity); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ObjectTypeCode80 {
    OT_UNDEFINED = 0;
    OT_POLYLINE = 1;
    OT_POLYGON = 2;
    OT_RECTANGLE = 3;
    OT_REGULAR_POLYGON = 4;
    OT_CIRCLE = 5;
    OT_3D_POLYGON = 6;
    OT_BUILDING = 7;
    OT_BOX = 8;
    OT_PYRAMID = 9;
    OT_CYLINDER = 10;
    OT_CONE = 11;
    OT_ELLIPSE = 12;
    OT_ARC = 13;
    OT_ARROW = 14;
    OT_3D_ARROW = 15;
    OT_SPHERE = 16;
    OT_MODEL = 17;
    OT_LABEL = 18;
    OT_LOCATION = 19;
    OT_TREE_HOTLINK = 20;
    OT_ROUTE = 21;
    OT_MESSAGE = 22;
    OT_DYNAMIC = 23;
    OT_IMAGE_LABEL = 24;
    OT_THREAT_DOME = 25;
    OT_IMAGERY_LAYER = 26;
    OT_TERRAIN_VIDEO = 27;
    OT_POINT_CLOUD = 28;
    OT_ELEVATION_LAYER = 29;
    OT_TERRAIN_MODIFIER = 30;
    OT_TERRAIN_HOLE = 31;
    OT_POPUP_MESSAGE = 32;
    OT_FEATURE = 33;
    OT_PRESENTATION = 34;
    OT_ANALYSIS_LOS = 35;
    OT_FEATURE_LAYER = 36;
    OT_FEATURE_GROUP = 37;
    OT_3D_MESH_LAYER = 38;
    OT_3D_MESH_FEATURE_LAYER = 39;
    OT_KML_LAYER = 40;
    OT_3D_VIEWSHED = 41;
    OT_CONTOUR_MAP = 42;
    OT_SLOPE_MAP = 43;
    OT_EFFECT = 44;
    OT_NETWORK_LINK = 45;
    OT_SCREEN_OVERLAY = 46;
};
class IGeometry80 extends TEIUnknownHandle80 {
    get Dimension(){
        try{
            return _NativeIGeometry80_get_Dimension(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Envelope(){
        try{
            return GetIGeometry80Derived(_NativeIGeometry80_get_Envelope(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get GeometryType(){
        try{
            return _NativeIGeometry80_get_GeometryType(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get GeometryTypeStr(){
        try{
            return UTF8ToString(_NativeIGeometry80_get_GeometryTypeStr(this.getInstanceHandle)); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Wks(){
        try{
            return new IWks80(_NativeIGeometry80_get_Wks(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SpatialOperator(){
        try{
            return new ISpatialOperator80(_NativeIGeometry80_get_SpatialOperator(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get SpatialRelation(){
        try{
            return new ISpatialRelation80(_NativeIGeometry80_get_SpatialRelation(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Clone() {
        try{
            return GetIGeometry80Derived(_NativeIGeometry80_Clone(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    EndEdit() {
        try{
            return GetIGeometry80Derived(_NativeIGeometry80_EndEdit(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsEmpty() {
        try{
            return _NativeIGeometry80_IsEmpty(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    IsSimple() {
        try{
            return _NativeIGeometry80_IsSimple(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SetEmpty() {
        try{
            _NativeIGeometry80_SetEmpty(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    StartEdit() {
        try{
            _NativeIGeometry80_StartEdit(this.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IntersectionType80 {
    IT_NONE = 0;
    IT_INTERSECT = 1;
    IT_WITHIN = 2;
};
class SGPublishPermission80 {
    SG_PERMISSION_ONLY_ME = 0;
    SG_PERMISSION_MY_GROUP = 1;
    SG_PERMISSION_MY_SITE = 2;
    SG_PERMISSION_EVERYONE = 3;
};
class ActionCode80 {
    AC_FLYTO = 0;
    AC_CIRCLEPATTERN = 1;
    AC_OVALPATTERN = 2;
    AC_LINEPATTERN = 3;
    AC_ARCPATTERN = 4;
    AC_FOLLOWBEHIND = 5;
    AC_FOLLOWABOVE = 6;
    AC_FOLLOWBELOW = 7;
    AC_FOLLOWRIGHT = 8;
    AC_FOLLOWLEFT = 9;
    AC_FOLLOWBEHINDANDABOVE = 10;
    AC_FOLLOWCOCKPIT = 11;
    AC_FOLLOWFROMGROUND = 12;
    AC_STOP = 13;
    AC_JUMP = 14;
    AC_DELETE = 15;
    AC_EDIT_FINISHED = 16;
    AC_OBJECT_ADDED = 17;
    AC_PLAY = 18;
    AC_SHOW = 19;
    AC_EDIT_STARTED = 20;
    AC_SELCHANGED = 21;
    AC_WAYPOINT_REACHED = 22;
    AC_GROUP_ADDED = 23;
    AC_LAYER_ADDED = 24;
    AC_LAYER_REFRESHED = 25;
    AC_ITEM_MOVED = 26;
    AC_LAYER_REMOVED = 27;
    AC_3DML_ADDED = 28;
    AC_3DML_REMOVED = 29;
    AC_DRAWING_OBJECT_STARTED = 30;
    AC_DRAWING_OBJECT_FINISHED = 31;
    AC_EDIT_CHANGE = 32;
};
class AltitudeTypeCode80 {
    ATC_TERRAIN_RELATIVE = 0;
    ATC_PIVOT_RELATIVE = 1;
    ATC_ON_TERRAIN = 2;
    ATC_TERRAIN_ABSOLUTE = 3;
    ATC_3DML_RELATIVE = 4;
};
class GPSOperationMode80 {
    GPS_MODE_OFF = 0;
    GPS_MODE_SHOW_LOCATION_INDICATOR = 2;
    GPS_MODE_FOLLOW = 4;
    GPS_MODE_NONE = 999;
};
class IGeometryCreator80 extends TEIUnknownHandle80 {
    CreateGeometryFromWKB(/*Object*/buffer) {
        try{
            return GetIGeometry80Derived(_NativeIGeometryCreator80_CreateGeometryFromWKB(this.getInstanceHandle,/*Object*/Emval.toHandle(buffer)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateGeometryFromWKT(/*String*/buffer) {
        try{
            return GetIGeometry80Derived(_NativeIGeometryCreator80_CreateGeometryFromWKT(this.getInstanceHandle,/*String*/allocateUTF8(String(buffer))));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLinearRingGeometry(/*Object*/Vertices) {
        try{
            return new ILinearRing80(_NativeIGeometryCreator80_CreateLinearRingGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(Vertices)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateLineStringGeometry(/*Object*/Vertices) {
        try{
            return new ILineString80(_NativeIGeometryCreator80_CreateLineStringGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(Vertices)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMultiLineStringGeometry(/*Object*/lineStringList) {
        try{
            return new IMultiLineString80(_NativeIGeometryCreator80_CreateMultiLineStringGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(lineStringList)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMultiPointGeometry(/*Object*/pointList) {
        try{
            return new IMultiPoint80(_NativeIGeometryCreator80_CreateMultiPointGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(pointList)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreateMultiPolygonGeometry(/*Object*/polygonList) {
        try{
            return new IMultiPolygon80(_NativeIGeometryCreator80_CreateMultiPolygonGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(polygonList)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePointGeometry(/*Object*/vertex) {
        try{
            return new IPoint80(_NativeIGeometryCreator80_CreatePointGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(vertex)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    CreatePolygonGeometry(/*Object*/ExteriorRing, /*Object*/interiorRingList=0) {
        try{
            return new IPolygon80(_NativeIGeometryCreator80_CreatePolygonGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(ExteriorRing),/*Object*/Emval.toHandle(interiorRingList)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class DynamicMotionStyle80 {
    MOTION_GROUND_VEHICLE = 0;
    MOTION_AIRPLANE = 1;
    MOTION_HELICOPTER = 2;
    MOTION_HOVER = 3;
    MOTION_MANUAL = 4;
};
class DynamicObjectType80 {
    DYNAMIC_3D_MODEL = 0;
    DYNAMIC_TEXT_LABEL = 1;
    DYNAMIC_IMAGE_LABEL = 2;
    DYNAMIC_VIRTUAL = 3;
};
class SGLabelStyle80 {
    LS_DEFAULT = 0;
    LS_STREET = 1;
    LS_STATE = 2;
};
class MsgTargetPosition80 {
    MTP_LEFT = 0;
    MTP_MAIN = 2;
    MTP_MESSAGE_BAR = 3;
    MTP_FLOAT = 4;
    MTP_POPUP = 5;
};
class MsgType80 {
    TYPE_TEXT = 0;
    TYPE_URL = 1;
    TYPE_SCRIPT = 3;
};
class ModelTypeCode80 {
    MT_NORMAL = 0;
    MT_ANIMATION = 1;
    MT_PROGRESSIVE = 2;
};
class LayerGeometryType80 {
    LGT_POINT = 0;
    LGT_POLYLINE = 1;
    LGT_POLYGON = 2;
    LGT_COLLECTION = 3;
    LGT_NONE = -1;
};
class SphereStyle80 {
    SPHERE_NORMAL = 0;
    SPHERE_UPPER_HALF = 1;
    SPHERE_LOWER_HALF = 2;
    SPHERE_UPPER_HALF_BASE = 3;
    SPHERE_LOWER_HALF_BASE = 4;
};
class ElevationBehaviorMode80 {
    EB_REPLACE = 0;
    EB_BELOW = 1;
    EB_ABOVE = 2;
    EB_OFFSET = 3;
};
class DrawingMode80 {
    DRAW_MODE_SHOW_PROPERTY = 1;
    DRAW_MODE_SHOW_PROPERTY_TOOLBAR = 2;
    DRAW_MODE_MAGNET = 4;
    DRAW_MODE_XY = 8;
};
class EditItemFlags80 {
    EDIT_ITEM_USE_PROPERTY = 0;
    EDIT_ITEM = 1;
    EDIT_ITEM_VERTICES = 2;
    EDIT_ITEM_BUILDING_ROOF = 3;
    EDIT_ITEM_MOVE_Y = 4;
    EDIT_ITEM_SNAP = 5;
    EDIT_ITEM_VERTICES_Y = 6;
    EDIT_ITEM_DRAG_TO_CURSOR = 7;
    EDIT_ITEM_SHOW_PROPERTY = 256;
    EDIT_ITEM_SHOW_PROPERTY_TOOLBAR = 512;
    EDIT_ITEM_SHOW_PROPERTY_WITHOUT_TOOLBAR = 1024;
    EDIT_ITEM_SHOW_PROPERTY_WITH_UNDO_REDO_TOOLBAR = 2048;
    EDIT_ITEM_MOVE_MODE_XY = 4096;
    EDIT_ITEM_MOVE_MODE_Z = 8192;
    EDIT_ITEM_MOVE_MODE_MAGNET = 16384;
    EDIT_ITEM_SNAP_ON = 32768;
};
class ItemCode80 {
    SELECTED = 10;
    CHILD = 11;
    FIRSTVISIBLE = 12;
    NEXT = 13;
    NEXTVISIBLE = 14;
    PARENT = 15;
    PREVIOUS = 16;
    PREVIOUSVISIBLE = 17;
    ROOT = 18;
};
class SortType80 {
    SORT_ALPHABETICALLY_AZ = 0;
    SORT_ALPHABETICALLY_ZA = 1;
    SORT_BY_TYPE = 2;
    SORT_NO_SORT = 3;
};
class WorldPointType80 {
    WPT_TERRAIN = 0;
    WPT_MODEL = 1;
    WPT_LABEL = 2;
    WPT_PRIMITIVE = 4;
    WPT_ANIM = 8;
    WPT_BUILDING = 16;
    WPT_SKY = 32;
    WPT_ACCURATE_CPT = 64;
    WPT_BBOX_CPT = 128;
    WPT_VIDEO = 256;
    WPT_UNDERGROUND = 512;
    WPT_SCREEN_OVERLAY = 1024;
    WPT_SCREEN_CONTROL = 2048;
    WPT_SCREEN_COVERED = 4096;
    WPT_3DML = 8192;
    WPT_SURFACE = 65536;
    WPT_DEFAULT = -1;
};
class MouseInputMode80 {
    MI_FREE_FLIGHT = 0;
    MI_COM_CLIENT = 1;
    MI_CONTROLLED_FLIGHT = 2;
    MI_EDIT = 3;
    MI_MEASUREMENT = 4;
};
class PixelFromWorldMode80 {
    PFW_IGNORE_Z_BUFFER = 0;
    PFW_USE_Z_BUFFER = 1;
};
class MessageBarTextAlignment80 {
    MBT_LEFT = 0;
    MBT_CENTER = 1;
    MBT_RIGHT = 2;
};
class AccuracyLevel80 {
    ACCURACY_NORMAL = 0;
    ACCURACY_BEST_FROM_MEMORY = 1;
    ACCURACY_FORCE_BEST_RENDERED = 2;
};
class PermissionType80 {
    LMP_ENABLE_ALL = 0;
    LMP_DISABLE_API = 1;
    LMP_DISABLE_UI = 2;
    LMP_DISABLE_ALL = -1;
};
class ICoord2D80 extends TEIUnknownHandle80 {
    get X(){
        try{
            return _NativeICoord2D80_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/pVal){
            try{
                _NativeICoord2D80_put_X(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeICoord2D80_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/pVal){
            try{
                _NativeICoord2D80_put_Y(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class ICoord3D80 extends TEIUnknownHandle80 {
    get X(){
        try{
            return _NativeICoord3D80_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/pVal){
            try{
                _NativeICoord3D80_put_X(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeICoord3D80_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/pVal){
            try{
                _NativeICoord3D80_put_Y(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Z(){
        try{
            return _NativeICoord3D80_get_Z(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Z(/*Double*/pVal){
            try{
                _NativeICoord3D80_put_Z(this.getInstanceHandle,/*Double*/pVal); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class TimeZoneType80 {
    TIME_ZONE_TYPE_MY_COMPUTER = 0;
    TIME_ZONE_TYPE_UTC = 1;
    TIME_ZONE_TYPE_SPECIFIC = 2;
};
class SliderDisplayMode80 {
    MODE_TIME_NONE = 0;
    MODE_FIXED_TIME = 1;
    MODE_TIME = 2;
    MODE_RANGE_PROJECT = 4;
    MODE_RANGE_CUSTOM = 8;
    MODE_ADJUST_FOR_GROUP = 16;
};
class TEVersionType80 {
    TEVT_PRO = 0;
    TEVT_PLUS = 1;
    TEVT_VIEWER = 2;
    TEVT_UNKNOWN = -1;
};
class FullScreenMode80 {
    FULL_SCREEN_NONE = 0;
    FULL_SCREEN_STANDARD = 1;
    FULL_SCREEN_D3D = 2;
    FULL_SCREEN_STEREOSCOPIC = 3;
    FULL_SCREEN_WITH_CAPTION = 4;
};
class ContourDisplayStyle80 {
    CDS_CONTOUR_STYLE_LINES = 0;
    CDS_CONTOUR_STYLE_COLORS = 1;
    CDS_CONTOUR_STYLE_LINES_AND_COLORS = 2;
    CDS_CONTOUR_STYLE_DEFAULT = -1;
};
class SlopeDisplayStyle80 {
    SDS_SLOPE_STYLE_DIRECTION = 0;
    SDS_SLOPE_STYLE_COLORS = 1;
    SDS_SLOPE_STYLE_DIRECTION_AND_COLORS = 2;
    SDS_SLOPE_STYLE_DEFAULT = -1;
};
class ILineString80 extends IGeometry80 {
    get Length(){
        try{
            return _NativeILineString80_get_Length(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get StartPoint(){
        try{
            return new IPoint80(_NativeILineString80_get_StartPoint(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get EndPoint(){
        try{
            return new IPoint80(_NativeILineString80_get_EndPoint(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Value(/*Double*/t){                                    
        try{
            return new IPoint80(_NativeILineString80_get_Value(this.getInstanceHandle,/*Double*/t));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get NumPoints(){
        try{
            return _NativeILineString80_get_NumPoints(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Points(){
        try{
            return new IPoints80(_NativeILineString80_get_Points(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    IsClosed() {
        try{
            return _NativeILineString80_IsClosed(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class MultipleViewshedAnalysisType80 {
    MVT_VIEWSHED_ON_ROUTE = 0;
    MVT_TIMESPAN_VIEWSHED_ON_ROUTE = 1;
    MVT_CUMULATIVE_VIEWSHED_ON_ROUTE = 2;
    MVT_NOT_VALID = -1;
};
class CompareGroup80 {
    CG_ALL_OBJECTS = 0;
    CG_GROUP_1 = 1;
    CG_GROUP_2 = 2;
};
class ShadowType80 {
    STP_NONE = 0;
    STP_GLOBAL = 1;
    STP_SELECTION = 2;
};
class ViewshedQuality80 {
    VSQ_QUALITY_LOW = 0;
    VSQ_QUALITY_MEDIUM = 1;
    VSQ_QUALITY_HIGH = 2;
};
class ContainerSite80 {
    CS_DOCK_LEFT = 0;
    CS_DOCK_RIGHT = 1;
    CS_DOCK_TOP = 2;
    CS_DOCK_BOTTOM = 3;
    CS_DOCK_FLOAT = 4;
    CS_MAIN = 5;
    CS_NOT_VALID = -1;
};
class FeatureState80 {
    FS_NONE = 0;
    FS_NEW = 1;
    FS_MODIFIED = 2;
    FS_DELETED = 3;
};
class ReplaceTerrainMeshType80 {
    REPLACE_TERRAIN_NONE = 0;
    REPLACE_TERRAIN_WITH_3DML_GROUND_LAYER = 1;
    REPLACE_TERRAIN_WITH_SIMPLIFIED_MESH = 2;
};
class Oversampling80 {
    OVERSAMPLING_LOW = 75;
    OVERSAMPLING_NORMAL = 100;
    OVERSAMPLING_HIGH = 125;
    OVERSAMPLING_BEST = 150;
};
class MeshLayerDisplayStyle80 {
    MLDM_NORMAL = 0;
    MLDM_XRAY = 2;
    MLDM_SOLID = 3;
    MLDM_ADD_WIRE = 32768;
    MLDM_UNKNOWN = 65535;
};
class StreamLayerStatus80 {
    SLS_NOT_STREAMED_LAYER = 0;
    SLS_STREAMING = 1;
    SLS_STREAM_PAUSED = 2;
};
class AltitudeUnitCode80 {
    AU_METER = 0;
    AU_FEET = 1;
    AU_CENTIMETER = 2;
    AU_DECIMETER = 3;
    AU_INCHE = 4;
    AU_YARD = 5;
    AU_UNDEFINED = -1;
};
class LabelLockMode80 {
    LM_DECAL = 0;
    LM_AXIS = 1;
    LM_AXIS_TEXTUP = 2;
    LM_AXIS_AUTOPITCH = 3;
    LM_AXIS_AUTOPITCH_TEXTUP = 4;
    LM_AXIS_AUTOYAW = 5;
};
class LineType80 {
    LINE_TYPE_NONE = 0;
    LINE_TYPE_TO_GROUND = 1;
    LINE_TYPE_CUSTOM = 2;
};
class ShowTextOptions80 {
    SHOW_TEXT_ALWAYS = 0;
    SHOW_TEXT_ON_HOVER = 1;
};
class BuildingStyleCode80 {
    BS_STRETCH_TERRAIN = 0;
    BS_POLYGONS = 1;
};
class _HTML_POPUP_FLAGS80 {
    HTML_POPUP_NONE = 0;
    HTML_POPUP_ANCHOR_3D_WINDOW = 1;
    HTML_POPUP_ALLOW_DRAG = 2;
    HTML_POPUP_NO_CAPTION = 4;
    HTML_POPUP_USE_DEFAULT_POS = 8;
    HTML_POPUP_USE_LAST_SIZE = 16;
    HTML_POPUP_ALLOW_RESIZE = 32;
    HTML_POPUP_ADD_SHADOW = 64;
    HTML_POPUP_NO_BORDER = 128;
    HTML_POPUP_SET_FOCUS_TO_RENDER = 256;
    HTML_POPUP_NOT_USE_POINTER = 512;
    HTML_POPUP_ALWAYS_VISIBLE = 1024;
    HTML_POPUP_USE_LAST_POS = 2048;
    HTML_POPUP_USE_TEXT_AS_INNER_HTML = 4096;
    HTML_POPUP_USE_AUTO_SIZE = 8192;
    HTML_POPUP_OPEN_LINK_IN_EXTERNAL_BROWSER = 16384;
    HTML_POPUP_BRING_TO_FRONT = 32768;
    HTML_POPUP_ROUNDED_CORNERS = 65536;
};
class CircularRouteType80 {
    CRT_STOP_AT_THE_END = 0;
    CRT_MOVE_TO_START = 1;
    CRT_JUMP_TO_START = 2;
};
class VideoPlayStatus80 {
    VPS_PAUSE = 0;
    VPS_PLAY = 1;
    VPS_STOP = 2;
};
class CPTDataFormat80 {
    CPT_DF_INTENSITY = 0;
    CPT_DF_RGB = 1;
};
class AttributeTypeCode80 {
    AT_TEXT = 0;
    AT_INTEGER = 1;
    AT_DOUBLE = 2;
    AT_UNKNOWN = -1;
};
class TilingMethodCode80 {
    TM_TILES_PER_SIDE = 0;
    TM_TILES_PER_AXIS = 0;
    TM_METERS_PER_TILE = 1;
    TM_UNDEFINED = -1;
};
class VolumeMode80 {
    VM_NONE = 0;
    VM_3D_POLYGON = 1;
    VM_COLORIZE_OBJECTS_AND_LAYERS = 2;
};
class FaceFillTypeCode80 {
    FACE_COLOR = 0;
    FACE_TEXTURE = 1;
    FACE_TERRAIN_TEXTURE = 2;
    FACE_UNDEFINED = -1;
};
class RoofStyleCode80 {
    ROOFTOP_FLAT = 0;
    ROOFTOP_ANGULAR = 1;
};
class PresentationItemType80 {
    PIT_STEP = 0;
    PIT_ACTION = 1;
};
class ScreenOverlayUnits80 {
    SO_UNIT_FRACTION = 0;
    SO_UNIT_PIXEL = 1;
    SO_UNIT_INSET_PIXELS = 2;
};
class LinkPositionFlags80 {
    LP_NONE = 0;
    LP_ABSOLUTE_ALTITUDE = 1;
    LP_ABSOLUTE_YAW = 2;
    LP_ABSOLUTE_PITCH = 4;
    LP_FACTOR_ALTITUDE = 2048;
    LP_FOLLOWER_ONLY = 4096;
};
class ViewshedRefreshRate80 {
    VSRR_REFRESH_RATE_SLOW = 0;
    VSRR_REFRESH_RATE_HEIGH = 1;
};
class ContourColorOutsideOfRange80 {
    CCOR_TRANSPARENT = 0;
    CCOR_RED_BLUE = 1;
};
class CoverageArea80 {
    CA_RECTANGLE = 0;
    CA_ENTIRE_TERRAIN = 1;
};
class SGGeometryTypeId80 {
    SG_POINT = 0;
    SG_LINESTRING = 1;
    SG_LINEARRING = 2;
    SG_POLYGON = 3;
    SG_MULTIPOINT = 4;
    SG_MULTILINESTRING = 5;
    SG_MULTIPOLYGON = 6;
};
class IWks80 extends TEIUnknownHandle80 {
    ExportToWKB(/*Boolean*/b3Dimension) {
        try{
            return EmvalToJS(Emval.toValue(_NativeIWks80_ExportToWKB(this.getInstanceHandle,/*Boolean*/b3Dimension)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ExportToWKT() {
        try{
            return UTF8ToString(_NativeIWks80_ExportToWKT(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ImportFromWKB(/*Object*/buffer) {
        try{
            _NativeIWks80_ImportFromWKB(this.getInstanceHandle,/*Object*/Emval.toHandle(buffer));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ImportFromWKT(/*String*/wkt) {
        try{
            _NativeIWks80_ImportFromWKT(this.getInstanceHandle,/*String*/allocateUTF8(String(wkt)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ISpatialOperator80 extends TEIUnknownHandle80 {
    Boundary() {
        try{
            return GetIGeometry80Derived(_NativeISpatialOperator80_Boundary(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Buffer(/*Double*/buffer) {
        try{
            return GetIGeometry80Derived(_NativeISpatialOperator80_Buffer(this.getInstanceHandle,/*Double*/buffer));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Difference(/*IGeometry*/otherGeometry) {
        try{
            return GetIGeometry80Derived(_NativeISpatialOperator80_Difference(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Distance(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialOperator80_Distance(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Intersection(/*IGeometry*/otherGeometry) {
        try{
            return GetIGeometry80Derived(_NativeISpatialOperator80_Intersection(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    SymmetricDifference(/*IGeometry*/otherGeometry) {
        try{
            return GetIGeometry80Derived(_NativeISpatialOperator80_SymmetricDifference(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Union(/*IGeometry*/otherGeometry) {
        try{
            return GetIGeometry80Derived(_NativeISpatialOperator80_Union(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ISpatialRelation80 extends TEIUnknownHandle80 {
    Contains(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation80_Contains(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Crosses(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation80_Crosses(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Disjoint(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation80_Disjoint(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Intersects(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation80_Intersects(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Overlaps(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation80_Overlaps(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Touches(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation80_Touches(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    Within(/*IGeometry*/otherGeometry) {
        try{
            return _NativeISpatialRelation80_Within(this.getInstanceHandle,/*IGeometry*/otherGeometry.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class ILinearRing80 extends ILineString80 {
    get Area(){
        try{
            return _NativeILinearRing80_get_Area(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Centroid(){
        try{
            return new IPoint80(_NativeILinearRing80_get_Centroid(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IGeometryCollection80 extends IGeometry80 {
    Item(/*Object*/Index){                                    
        try{
            return GetIGeometry80Derived(_NativeIGeometryCollection80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIGeometryCollection80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get NumGeometries(){
        try{
            return _NativeIGeometryCollection80_get_NumGeometries(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    Geometry(/*Int32*/Index){                                    
        try{
            return GetIGeometry80Derived(_NativeIGeometryCollection80_get_Geometry(this.getInstanceHandle,/*Int32*/Index));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddGeometry(/*Object*/pVal) {
        try{
            return GetIGeometry80Derived(_NativeIGeometryCollection80_AddGeometry(this.getInstanceHandle,/*Object*/Emval.toHandle(pVal)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteGeometry(/*Int32*/Index) {
        try{
            _NativeIGeometryCollection80_DeleteGeometry(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IMultiLineString80 extends IGeometryCollection80 {
    get Length(){
        try{
            return _NativeIMultiLineString80_get_Length(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    IsClosed() {
        try{
            return _NativeIMultiLineString80_IsClosed(this.getInstanceHandle)== 0?false:true;
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IMultiPoint80 extends IGeometryCollection80 {
};
class IMultiPolygon80 extends IGeometryCollection80 {
    get Area(){
        try{
            return _NativeIMultiPolygon80_get_Area(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Centroid(){
        try{
            return new IPoint80(_NativeIMultiPolygon80_get_Centroid(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PointOnSurface(){
        try{
            return new IPoint80(_NativeIMultiPolygon80_get_PointOnSurface(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IPoint80 extends IGeometry80 {
    get X(){
        try{
            return _NativeIPoint80_get_X(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set X(/*Double*/X){
            try{
                _NativeIPoint80_put_X(this.getInstanceHandle,/*Double*/X); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Y(){
        try{
            return _NativeIPoint80_get_Y(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Y(/*Double*/Y){
            try{
                _NativeIPoint80_put_Y(this.getInstanceHandle,/*Double*/Y); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
    get Z(){
        try{
            return _NativeIPoint80_get_Z(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    set Z(/*Double*/Z){
            try{
                _NativeIPoint80_put_Z(this.getInstanceHandle,/*Double*/Z); 
            }
            catch(err){
                this.ApiError(err);
            }
        }
};
class IPolygon80 extends IGeometry80 {
    get Area(){
        try{
            return _NativeIPolygon80_get_Area(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Centroid(){
        try{
            return new IPoint80(_NativeIPolygon80_get_Centroid(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get PointOnSurface(){
        try{
            return new IPoint80(_NativeIPolygon80_get_PointOnSurface(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get ExteriorRing(){
        try{
            return new ILinearRing80(_NativeIPolygon80_get_ExteriorRing(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    InteriorRing(/*Int32*/Index){                                    
        try{
            return new ILinearRing80(_NativeIPolygon80_get_InteriorRing(this.getInstanceHandle,/*Int32*/Index));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get NumInteriorRings(){
        try{
            return _NativeIPolygon80_get_NumInteriorRings(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Rings(){
        try{
            return new IRings80(_NativeIPolygon80_get_Rings(this.getInstanceHandle));
        }
        catch(err){
            this.ApiError(err);
        }
    }
};
class IPoints80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return new IPoint80(_NativeIPoints80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIPoints80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddPoint(/*Double*/X, /*Double*/Y, /*Double*/Z) {
        try{
            _NativeIPoints80_AddPoint(this.getInstanceHandle,/*Double*/X,/*Double*/Y,/*Double*/Z);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeletePoint(/*Int32*/Index) {
        try{
            _NativeIPoints80_DeletePoint(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    InsertPoint(/*Int32*/InsertAfterIndex, /*Double*/X, /*Double*/Y, /*Double*/Z) {
        try{
            _NativeIPoints80_InsertPoint(this.getInstanceHandle,/*Int32*/InsertAfterIndex,/*Double*/X,/*Double*/Y,/*Double*/Z);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    ToArray() {
        try{
            return EmvalToJS(Emval.toValue(_NativeIPoints80_ToArray(this.getInstanceHandle)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
class IRings80 extends TEIUnknownHandle80 {
    Item(/*Object*/Index){                                    
        try{
            return new ILinearRing80(_NativeIRings80_get_Item(this.getInstanceHandle,/*Object*/Emval.toHandle(Index)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
    get Count(){
        try{
            return _NativeIRings80_get_Count(this.getInstanceHandle); 
        }
        catch(err){
            this.ApiError(err);
        }
    }
    AddRing(/*Object*/val=0) {
        try{
            return new ILinearRing80(_NativeIRings80_AddRing(this.getInstanceHandle,/*Object*/Emval.toHandle(val)));
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
    DeleteRing(/*Int32*/Index) {
        try{
            _NativeIRings80_DeleteRing(this.getInstanceHandle,/*Int32*/Index);
        }
        catch(err){
            this.ApiError(err);
        }
    }
            
};
function GetITerraExplorerObject80Derived(handle){
    var iid = UTF8ToString(_Native_GetITerraExplorerObject80DerivedIID(handle));//also increase the ref count of handle
    switch(iid)
    {
        
    case "IID_I3DMLFeatureLayer80":
         return new I3DMLFeatureLayer80(handle);
    case "IID_IFeature80":
         return new IFeature80(handle);
    case "IID_IMeshLayer80":
         return new IMeshLayer80(handle);
    case "IID_IFeatureLayer80":
         return new IFeatureLayer80(handle);
    case "IID_IKMLLayer80":
         return new IKMLLayer80(handle);
    case "IID_ITerrainPolyline80":
         return new ITerrainPolyline80(handle);
    case "IID_ITerrainPolygon80":
         return new ITerrainPolygon80(handle);
    case "IID_ITerrainRectangle80":
         return new ITerrainRectangle80(handle);
    case "IID_ITerrainRegularPolygon80":
         return new ITerrainRegularPolygon80(handle);
    case "IID_ITerrain3DPolygon80":
         return new ITerrain3DPolygon80(handle);
    case "IID_ITerrainBuilding80":
         return new ITerrainBuilding80(handle);
    case "IID_ITerrain3DRectBase80":
         return new ITerrain3DRectBase80(handle);
    case "IID_ITerrain3DRegBase80":
         return new ITerrain3DRegBase80(handle);
    case "IID_ITerrainEllipse80":
         return new ITerrainEllipse80(handle);
    case "IID_ITerrainArc80":
         return new ITerrainArc80(handle);
    case "IID_ITerrainArrow80":
         return new ITerrainArrow80(handle);
    case "IID_ITerrain3DArrow80":
         return new ITerrain3DArrow80(handle);
    case "IID_ITerrainSphere80":
         return new ITerrainSphere80(handle);
    case "IID_ITerrainModel80":
         return new ITerrainModel80(handle);
    case "IID_ITerrainImageLabel80":
         return new ITerrainImageLabel80(handle);
    case "IID_ITerrainLabel80":
         return new ITerrainLabel80(handle);
    case "IID_ITerrainEffect80":
         return new ITerrainEffect80(handle);
    case "IID_ITerrainLocation80":
         return new ITerrainLocation80(handle);
    case "IID_ITreeHotlink80":
         return new ITreeHotlink80(handle);
    case "IID_ITerraExplorerMessage80":
         return new ITerraExplorerMessage80(handle);
    case "IID_IPopupMessage80":
         return new IPopupMessage80(handle);
    case "IID_ITerrainDynamicObject80":
         return new ITerrainDynamicObject80(handle);
    case "IID_ITerrainRasterLayer80":
         return new ITerrainRasterLayer80(handle);
    case "IID_ITerrainVideo80":
         return new ITerrainVideo80(handle);
    case "IID_ITerrainPointCloudModel80":
         return new ITerrainPointCloudModel80(handle);
    case "IID_ITerrainModifier80":
         return new ITerrainModifier80(handle);
    case "IID_ITerrainHole80":
         return new ITerrainHole80(handle);
    case "IID_IPresentation80":
         return new IPresentation80(handle);
    case "IID_IScreenOverlay80":
         return new IScreenOverlay80(handle);
    case "IID_IFeatureGroup80":
         return new IFeatureGroup80(handle);
    case "IID_INetworkLink80":
         return new INetworkLink80(handle);
    case "IID_I3DViewshed80":
         return new I3DViewshed80(handle);
    case "IID_ILineOfSight80":
         return new ILineOfSight80(handle);
    case "IID_ITerrainThreatDome80":
         return new ITerrainThreatDome80(handle);
    case "IID_IContourMap80":
         return new IContourMap80(handle);
    case "IID_ISlopeMap80":
         return new ISlopeMap80(handle);        
    }
    return null;
}
function GetIGeometry80Derived(handle){
    var iid = UTF8ToString(_Native_GetIGeometry80DerivedIID(handle));//also increase the ref count of handle
    switch(iid)
    {
        
    case "IID_ILineString":
         return new ILineString80(handle);
    case "IID_ILinearRing":
         return new ILinearRing80(handle);
    case "IID_IGeometryCollection":
         return new IGeometryCollection80(handle);
    case "IID_IMultiLineString":
         return new IMultiLineString80(handle);
    case "IID_IMultiPoint":
         return new IMultiPoint80(handle);
    case "IID_IMultiPolygon":
         return new IMultiPolygon80(handle);
    case "IID_IPoint":
         return new IPoint80(handle);
    case "IID_IPolygon":
         return new IPolygon80(handle);        
    }
    return null;
}
function GetJSObjectFromHandle(handle){
    var iid = UTF8ToString(_Native_GetIID80(handle));//also increase the ref count of handle
    switch(iid)
    {
        
    case "IID_SGWorld80":
         return new SGWorld80(handle);
    case "IID_ITerraExplorerObject80":
         return new ITerraExplorerObject80(handle);
    case "IID_I3DMLFeatureLayer80":
         return new I3DMLFeatureLayer80(handle);
    case "IID_IProject80":
         return new IProject80(handle);
    case "IID_INavigate80":
         return new INavigate80(handle);
    case "IID_ICreator80":
         return new ICreator80(handle);
    case "IID_IDrawing80":
         return new IDrawing80(handle);
    case "IID_IProjectTree80":
         return new IProjectTree80(handle);
    case "IID_IWindow80":
         return new IWindow80(handle);
    case "IID_ITerrain80":
         return new ITerrain80(handle);
    case "IID_ILicenseManager80":
         return new ILicenseManager80(handle);
    case "IID_ICoordServices80":
         return new ICoordServices80(handle);
    case "IID_IDateTime80":
         return new IDateTime80(handle);
    case "IID_ITEVersionInfo80":
         return new ITEVersionInfo80(handle);
    case "IID_IApplication80":
         return new IApplication80(handle);
    case "IID_ICommand80":
         return new ICommand80(handle);
    case "IID_IAnalysis80":
         return new IAnalysis80(handle);
    case "IID_ISGServer80":
         return new ISGServer80(handle);
    case "IID_IAction80":
         return new IAction80(handle);
    case "IID_IContainerItem80":
         return new IContainerItem80(handle);
    case "IID_ITreeItem80":
         return new ITreeItem80(handle);
    case "IID_I3DMLFeatureProperties80":
         return new I3DMLFeatureProperties80(handle);
    case "IID_IPosition80":
         return new IPosition80(handle);
    case "IID_IDataSourceInfo80":
         return new IDataSourceInfo80(handle);
    case "IID_IFeatures80":
         return new IFeatures80(handle);
    case "IID_IFeature80":
         return new IFeature80(handle);
    case "IID_IMeshLayer80":
         return new IMeshLayer80(handle);
    case "IID_IFeatureLayer80":
         return new IFeatureLayer80(handle);
    case "IID_IKMLLayer80":
         return new IKMLLayer80(handle);
    case "IID_ILabelStyle80":
         return new ILabelStyle80(handle);
    case "IID_IColor80":
         return new IColor80(handle);
    case "IID_IRouteWaypoint80":
         return new IRouteWaypoint80(handle);
    case "IID_ITerrainPolyline80":
         return new ITerrainPolyline80(handle);
    case "IID_ITerrainPolygon80":
         return new ITerrainPolygon80(handle);
    case "IID_ITerrainRectangle80":
         return new ITerrainRectangle80(handle);
    case "IID_ITerrainRegularPolygon80":
         return new ITerrainRegularPolygon80(handle);
    case "IID_ITerrain3DPolygon80":
         return new ITerrain3DPolygon80(handle);
    case "IID_ITerrainBuilding80":
         return new ITerrainBuilding80(handle);
    case "IID_ITerrain3DRectBase80":
         return new ITerrain3DRectBase80(handle);
    case "IID_ITerrain3DRegBase80":
         return new ITerrain3DRegBase80(handle);
    case "IID_ITerrainEllipse80":
         return new ITerrainEllipse80(handle);
    case "IID_ITerrainArc80":
         return new ITerrainArc80(handle);
    case "IID_ITerrainArrow80":
         return new ITerrainArrow80(handle);
    case "IID_ITerrain3DArrow80":
         return new ITerrain3DArrow80(handle);
    case "IID_ITerrainSphere80":
         return new ITerrainSphere80(handle);
    case "IID_ITerrainModel80":
         return new ITerrainModel80(handle);
    case "IID_ITerrainImageLabel80":
         return new ITerrainImageLabel80(handle);
    case "IID_ITerrainLabel80":
         return new ITerrainLabel80(handle);
    case "IID_ITerrainEffect80":
         return new ITerrainEffect80(handle);
    case "IID_ITerrainLocation80":
         return new ITerrainLocation80(handle);
    case "IID_ITreeHotlink80":
         return new ITreeHotlink80(handle);
    case "IID_ITerraExplorerMessage80":
         return new ITerraExplorerMessage80(handle);
    case "IID_IPopupMessage80":
         return new IPopupMessage80(handle);
    case "IID_ITerrainDynamicObject80":
         return new ITerrainDynamicObject80(handle);
    case "IID_ITerrainRasterLayer80":
         return new ITerrainRasterLayer80(handle);
    case "IID_ITerrainVideo80":
         return new ITerrainVideo80(handle);
    case "IID_ITerrainPointCloudModel80":
         return new ITerrainPointCloudModel80(handle);
    case "IID_ITerrainModifier80":
         return new ITerrainModifier80(handle);
    case "IID_ITerrainHole80":
         return new ITerrainHole80(handle);
    case "IID_IPresentation80":
         return new IPresentation80(handle);
    case "IID_IScreenOverlay80":
         return new IScreenOverlay80(handle);
    case "IID_IVisibility80":
         return new IVisibility80(handle);
    case "IID_IBBox3D80":
         return new IBBox3D80(handle);
    case "IID_I3DMLFeatureLayers80":
         return new I3DMLFeatureLayers80(handle);
    case "IID_IFeatureGroups80":
         return new IFeatureGroups80(handle);
    case "IID_IBBox2D80":
         return new IBBox2D80(handle);
    case "IID_ICoordinateSystem80":
         return new ICoordinateSystem80(handle);
    case "IID_IFeatureGroup80":
         return new IFeatureGroup80(handle);
    case "IID_IFeatureAttributes80":
         return new IFeatureAttributes80(handle);
    case "IID_IFeatureAttribute80":
         return new IFeatureAttribute80(handle);
    case "IID_IAttributes80":
         return new IAttributes80(handle);
    case "IID_IAttribute80":
         return new IAttribute80(handle);
    case "IID_INetworkLink80":
         return new INetworkLink80(handle);
    case "IID_IMessageObject80":
         return new IMessageObject80(handle);
    case "IID_ITerrainObject80":
         return new ITerrainObject80(handle);
    case "IID_ITooltip80":
         return new ITooltip80(handle);
    case "IID_IAttachment80":
         return new IAttachment80(handle);
    case "IID_ITimeSpan80":
         return new ITimeSpan80(handle);
    case "IID_ILineStyle80":
         return new ILineStyle80(handle);
    case "IID_IFillStyle80":
         return new IFillStyle80(handle);
    case "IID_IObjectTexture80":
         return new IObjectTexture80(handle);
    case "IID_IVolumeClassification80":
         return new IVolumeClassification80(handle);
    case "IID_IBuildingFace80":
         return new IBuildingFace80(handle);
    case "IID_IRoofFace80":
         return new IRoofFace80(handle);
    case "IID_IBuildingSides80":
         return new IBuildingSides80(handle);
    case "IID_IRouteWaypoints80":
         return new IRouteWaypoints80(handle);
    case "IID_IPointCloudDefaultLocation80":
         return new IPointCloudDefaultLocation80(handle);
    case "IID_IPresentationItem80":
         return new IPresentationItem80(handle);
    case "IID_IScreenOverlayXY80":
         return new IScreenOverlayXY80(handle);
    case "IID_IWorldPointInfo80":
         return new IWorldPointInfo80(handle);
    case "IID_ITerraExplorerObjects80":
         return new ITerraExplorerObjects80(handle);
    case "IID_IScreenPointInfo80":
         return new IScreenPointInfo80(handle);
    case "IID_IMouseInfo80":
         return new IMouseInfo80(handle);
    case "IID_IScreenRect80":
         return new IScreenRect80(handle);
    case "IID_IModuleLicenseInfo80":
         return new IModuleLicenseInfo80(handle);
    case "IID_IContainers80":
         return new IContainers80(handle);
    case "IID_IMultiple3DWindows80":
         return new IMultiple3DWindows80(handle);
    case "IID_IClipboard80":
         return new IClipboard80(handle);
    case "IID_ISelection80":
         return new ISelection80(handle);
    case "IID_I3DViewshed80":
         return new I3DViewshed80(handle);
    case "IID_ILineOfSight80":
         return new ILineOfSight80(handle);
    case "IID_ITerrainThreatDome80":
         return new ITerrainThreatDome80(handle);
    case "IID_IContourMap80":
         return new IContourMap80(handle);
    case "IID_ISlopeMap80":
         return new ISlopeMap80(handle);
    case "IID_IGeometry":
         return new IGeometry80(handle);
    case "IID_IGeometryCreator":
         return new IGeometryCreator80(handle);
    case "IID_ICoord2D":
         return new ICoord2D80(handle);
    case "IID_ICoord3D":
         return new ICoord3D80(handle);
    case "IID_ILineString":
         return new ILineString80(handle);
    case "IID_IWks":
         return new IWks80(handle);
    case "IID_ISpatialOperator":
         return new ISpatialOperator80(handle);
    case "IID_ISpatialRelation":
         return new ISpatialRelation80(handle);
    case "IID_ILinearRing":
         return new ILinearRing80(handle);
    case "IID_IGeometryCollection":
         return new IGeometryCollection80(handle);
    case "IID_IMultiLineString":
         return new IMultiLineString80(handle);
    case "IID_IMultiPoint":
         return new IMultiPoint80(handle);
    case "IID_IMultiPolygon":
         return new IMultiPolygon80(handle);
    case "IID_IPoint":
         return new IPoint80(handle);
    case "IID_IPolygon":
         return new IPolygon80(handle);
    case "IID_IPoints":
         return new IPoints80(handle);
    case "IID_IRings":
         return new IRings80(handle);        
    }
    return null;
}