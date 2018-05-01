module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        let employeeId = (req.query.name || req.body.name)

        // write to cosmos DB
        context.bindings.timeRecord = JSON.stringify({ 
            id: employeeId,
            name: employeeId,
            time: new Date()
          });

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + employeeId + " .Cosmos DB"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};
