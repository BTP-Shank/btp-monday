//@ui5-bundle com/samsoft/mm/manageproducts/products/Component-preload.js
sap.ui.require.preload({
	"com/samsoft/mm/manageproducts/products/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.samsoft.mm.manageproducts.products.Component",{metadata:{manifest:"json"}})});
},
	"com/samsoft/mm/manageproducts/products/i18n/i18n.properties":'# This is the resource bundle for com.samsoft.mm.manageproducts.products\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Manage Products\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,45\nflpTitle=Manage Products\n\n#XFLD,35\nflpSubtitle=Samsoft\n',
	"com/samsoft/mm/manageproducts/products/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.samsoft.mm.manageproducts.products","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.14.3","toolsId":"5c38d11e-4424-433f-a0d9-e3b5395f15b9"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"manageprojects-manage":{"semanticObject":"manageprojects","action":"manage","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.127.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.samsoft.mm.manageproducts.products.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"ProductsList","target":"ProductsList"},{"pattern":"Products({key}):?query:","name":"ProductsObjectPage","target":"ProductsObjectPage"}],"targets":{"ProductsList":{"type":"Component","id":"ProductsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Products","variantManagement":"Page","navigation":{"Products":{"detail":{"route":"ProductsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"ProductsObjectPage":{"type":"Component","id":"ProductsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Products"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"btp-monday"}}'
});
//# sourceMappingURL=Component-preload.js.map
