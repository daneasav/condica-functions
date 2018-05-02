module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        let employeeId = (req.query.name || req.body.name)
        let time = (req.query.time || req.body.time || new Date())

        // write to cosmos DB
        context.bindings.timeRecord = JSON.stringify({ 
            name: employeeId,
            time: time
        });

        context.res = {
            body: "Record saved for " + employeeId
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
