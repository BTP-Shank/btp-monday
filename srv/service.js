const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService {

    // overide the standard init method with custom logic
    async init() {

        const { trainers, Products, ProductsCopy  } = this.entities;

        this.after("READ", trainers, (res) => {
            console.log("Shashank", res);
        });

        this.after("READ", Products, (res) => {
            for (let i = 0; i < res.length; i++) {
                if (res[i].UnitsInStock > 20) {
                    res[i].ProductName = res[i].ProductName + 'AVAI';
                }
            }
        });

        this.before("POST", Products, (req) => {
            console.log(req.data);

            if (req.data.UnitsInStock < 10) {
                req.reject(400, "The product with stocks less than 10 not allowed to be stored in database");
            }
        });

        this.on("purgeDB", async (req) => {

            // Step 1 Create a connection with DB module
            let dbConn = await cds.connect.to("db");

            //Step 2 Create  a transaction in db for setting up LUW ( logical Unit of Work )
            let tx = await dbConn.transaction(req);

            let id = req.data.ProductID ;

            // Step 3 Check if the entry exist in the db or not

            let resp = await tx.run([SELECT.from(Products).where({
                ProductID : id
            })]);

            if( resp[0].length === 0 ){
                req.reject(400, "the record to purge does not exist in our db");
            }

            console.log(resp[0]);

            try
            {
            let resp1 = await tx.run([INSERT.into(ProductsCopy).entries(resp[0])]);
            }catch(err){
                return {
                    "msg" : err
                }
            }

            // delete it from the first table


            return {
                "msg" : "Product ID " + id + "purged successfully" 
            }

        });

        await super.init();

    }
}

module.exports = CatalogService;
