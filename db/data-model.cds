namespace ohav;

using {managed} from '@sap/cds/common';

entity training : managed {

    cid      : String(80);
    name     : String(100);
    skill    : String(100);
    trainer  : String(80);
    location : String(30);
    room     : String(20);
    trainee  : String(100);
    duration : String(20);

}

entity products : managed {
    ProductID       : String(80);
    ProductName     : String(80);
    SupplierID      : String(80);
    CategoryID      : String(80);
    QuantityPerUnit : String(80);
    UnitPrice       : String(80);
    UnitsInStock    : String(80);
    UnitsOnOrder    : String(80);
    ReorderLevel    : String(80);
    Discontinued    : Boolean;
}

entity products_copy : managed {
    ProductID       : String(80);
    ProductName     : String(80);
    SupplierID      : String(80);
    CategoryID      : String(80);
    QuantityPerUnit : String(80);
    UnitPrice       : String(80);
    UnitsInStock    : String(80);
    UnitsOnOrder    : String(80);
    ReorderLevel    : String(80);
    Discontinued    : Boolean;
    text            : Association to many productsName on text.ProductID = ProductID
}

entity productsName : managed {
    ProductID   : String(80);
    ProductName : String(80);
    Language    : String(1)
}

 define view Foo as select from products{
    ProductID as ![ProductID],
    ProductName as ![ProductName]
} ;


