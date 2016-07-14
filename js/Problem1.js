var fs = require('fs');
var data = fs.readFileSync('../csv/India2011.csv', { encoding: 'utf8' }).toString();
var s = data.split("\r\n");
var literateMaleTemp = 0,
	literateFemaleTemp = 0,
	illiterateMaleTemp = 0,
	illiterateFemaleTemp = 0;
for (var i = 1; i < s.length; i++) {
    var obj = {};
    var line = s[i].split(",");
    for (var j = 0; j < top.length; j++) {
        if (line[4] == "Total" && line[5] == "All ages") {
            literateMaleTemp = literateMaleTemp + parseInt(line[13]);
            literateFemaleTemp=literateFemaleTemp+parseInt(line[14]);
            illiterateMaleTemp = illiterateMaleTemp + parseInt(line[10]);
            illiterateFemaleTemp=illiterateFemaleTemp+parseInt(line[11]);
        }
    }
}
var result='[{"Total Literate Males":"'+
			literateMaleTemp+
			'","Total Literate Females":"'
			+literateMaleTemp+
			'","Total Illiterate Males":"'
			+illiterateMaleTemp+
			'","Total Illiterate Females":"'+
			illiterateFemaleTemp+
			'"}]'
fs.writeFileSync('../json/P1.JSON',result);
