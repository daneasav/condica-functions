module.exports = function (context, req) {
    let employeeId = (req.query.name || req.body.name)
    //let startTime = (req.query.startTime || req.body.startTime || getTodayDate(new Date()))
    //let endTime = (req.query.endTime || req.body.endTime || getTodayDate(new Date()))
    let today = (req.query.today || req.body.today || getTodayDate(new Date()))

    let records = context.bindings.generateReport;
    
    let startRecord = "";
    let endRecord = "";
    if (records.length > 0) {
        startRecord = record[0];
        endRecord = record[records.length-1];
    }
        
    context.res = {
        body: "Date: " + today + " Employee: " + employeeId + " StartDate: " + startRecord + " EndDate: " + endRecord
    };       
    
    context.done();
};

function getTodayDate(date) {
    return date.getUTCFullYear() + '-' +
           ('0'+ (date.getUTCMonth() + 1)).slice(-2) + '-' +
           ('0'+ date.getUTCDate()).slice(-2);
}