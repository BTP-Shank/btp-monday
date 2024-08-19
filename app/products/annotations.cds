using CatalogService as service from '../../srv/service';

annotate service.Products with @(
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'ProductID',
                Value: ProductID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'ProductName',
                Value: ProductName,
            },
            {
                $Type: 'UI.DataField',
                Label: 'SupplierID',
                Value: SupplierID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'CategoryID',
                Value: CategoryID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'QuantityPerUnit',
                Value: QuantityPerUnit,
            },
            {
                $Type: 'UI.DataField',
                Label: 'UnitPrice',
                Value: UnitPrice,
            },
            {
                $Type: 'UI.DataField',
                Label: 'UnitsInStock',
                Value: UnitsInStock,
            },
            {
                $Type: 'UI.DataField',
                Label: 'UnitsOnOrder',
                Value: UnitsOnOrder,
            },
            {
                $Type: 'UI.DataField',
                Label: 'ReorderLevel',
                Value: ReorderLevel,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Discontinued',
                Value: Discontinued,
            },
        ],
    },
    UI.Facets                    : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : 'General Information',
        Target: '@UI.FieldGroup#GeneratedGroup',
    }, 
    // {
    //     $Type : 'UI.ReferenceFacet',
    //     ID    : 'GeneratedFacet2',
    //     Label : 'Ohav's Products',
    //     Target: '@UI.FieldGroup#GeneratedGroup2',
    // },
    ],
    UI.LineItem                  : [
        {
            $Type                : 'UI.DataField',
            Label                : 'ProductID',
            Value                : ProductID,
            ![@HTML5.CssDefaults]: {width: '5rem'},
        },
        {
            $Type                : 'UI.DataField',
            Label                : 'ProductName',
            Value                : ProductName,
            ![@HTML5.CssDefaults]: {width: '5rem'},
        },
        {
            $Type                : 'UI.DataField',
            Label                : 'SupplierID',
            Value                : SupplierID,
            ![@HTML5.CssDefaults]: {width: '5rem'},
        },
        {
            $Type                : 'UI.DataField',
            Label                : 'CategoryID',
            Value                : CategoryID,
            ![@HTML5.CssDefaults]: {width: '5rem'},
        },
        {
            $Type                : 'UI.DataField',
            Label                : 'QuanPerUnit',
            Value                : QuantityPerUnit,
            ![@HTML5.CssDefaults]: {width: '5rem'},
        },
    ],
    UI.SelectionFields           : [
        ProductName,
        SupplierID
    ]
);
