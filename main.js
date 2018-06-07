
var jsonOutput = $('#json-output');
var csvOutput = $('#csv-output');
var jsonInput = $('#json-input');
var csvInput = $('#csv-input');

var json2csvGo = $('#json2csvgo');
var csv2jsonGo = $('#csv2jsongo');

var indentation = 4;
var delimeter = ','

json2csvGo.on('click', function(e) {
    try {
        var obj = JSON.parse(jsonInput.val());
    } catch(err) {
        console.error(err);
        alert('Error while converting JSON to CSV. Malformed JSON');
    }
    try {
        csvOutput.val(obj2csv(obj, { delimeter: delimeter }))
    } catch(err) {
        console.error(err);
        alert('Error while converting JSON to CSV. Check the console for more information');
    }
});

csv2jsonGo.on('click', function(e) {
    try {
        jsonOutput.val(JSON.stringify(csv2obj(csvInput.val(), { delimeter: delimeter }), null, indentation));
    } catch(err) {
        console.error(err);
        alert('Error while converting JSON to CSV. Check the console for more information');
    }
});

