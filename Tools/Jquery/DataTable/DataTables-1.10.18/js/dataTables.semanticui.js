!function(factory){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function($){return factory($,window,document)}):"object"==typeof exports?module.exports=function(root,$){return root=root||window,$&&$.fn.dataTable||($=require("datatables.net")(root,$).$),factory($,0,root.document)}:factory(jQuery,window,document)}(function($,window,document,undefined){"use strict";var DataTable=$.fn.dataTable;return $.extend(!0,DataTable.defaults,{dom:"<'ui stackable grid'<'row'<'eight wide column'l><'right aligned eight wide column'f>><'row dt-table'<'sixteen wide column'tr>><'row'<'seven wide column'i><'right aligned nine wide column'p>>>",renderer:"semanticUI"}),$.extend(DataTable.ext.classes,{sWrapper:"dataTables_wrapper dt-semanticUI",sFilter:"dataTables_filter ui input",sProcessing:"dataTables_processing ui segment",sPageButton:"paginate_button item"}),DataTable.ext.renderer.pageButton.semanticUI=function(settings,host,idx,buttons,page,pages){function attach(container,buttons){for(var button,clickHandler=function(e){e.preventDefault(),$(e.currentTarget).hasClass("disabled")||api.page()==e.data.action||api.page(e.data.action).draw("page")},i=0,ien=buttons.length;i<ien;i++)if(button=buttons[i],$.isArray(button))attach(container,button);else{switch(btnClass=btnDisplay="",button){case"ellipsis":btnDisplay="&#x2026;",btnClass="disabled";break;case"first":btnDisplay=lang.sFirst,btnClass=button+(0<page?"":" disabled");break;case"previous":btnDisplay=lang.sPrevious,btnClass=button+(0<page?"":" disabled");break;case"next":btnDisplay=lang.sNext,btnClass=button+(page<pages-1?"":" disabled");break;case"last":btnDisplay=lang.sLast,btnClass=button+(page<pages-1?"":" disabled");break;default:btnDisplay=button+1,btnClass=page===button?"active":""}var tag=-1===btnClass.indexOf("disabled")?"a":"div";btnDisplay&&(tag=$("<"+tag+">",{class:classes.sPageButton+" "+btnClass,id:0===idx&&"string"==typeof button?settings.sTableId+"_"+button:null,href:"#","aria-controls":settings.sTableId,"aria-label":aria[button],"data-dt-idx":counter,tabindex:settings.iTabIndex}).html(btnDisplay).appendTo(container),settings.oApi._fnBindAction(tag,{action:button},clickHandler),counter++)}}var btnDisplay,btnClass,activeEl,api=new DataTable.Api(settings),classes=settings.oClasses,lang=settings.oLanguage.oPaginate,aria=settings.oLanguage.oAria.paginate||{},counter=0;try{activeEl=$(host).find(document.activeElement).data("dt-idx")}catch(e){}attach($(host).empty().html('<div class="ui stackable pagination menu"/>').children(),buttons),activeEl!==undefined&&$(host).find("[data-dt-idx="+activeEl+"]").focus()},$(document).on("init.dt",function(e,ctx){"dt"===e.namespace&&(e=new $.fn.dataTable.Api(ctx),$.fn.dropdown&&$("div.dataTables_length select",e.table().container()).dropdown(),$("div.dataTables_filter.ui.input",e.table().container()).removeClass("input").addClass("form"),$("div.dataTables_filter input",e.table().container()).wrap('<span class="ui input" />'))}),DataTable});