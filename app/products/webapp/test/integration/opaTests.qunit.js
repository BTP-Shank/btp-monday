sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/samsoft/mm/manageproducts/products/test/integration/FirstJourney',
		'com/samsoft/mm/manageproducts/products/test/integration/pages/ProductsList',
		'com/samsoft/mm/manageproducts/products/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/samsoft/mm/manageproducts/products') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);