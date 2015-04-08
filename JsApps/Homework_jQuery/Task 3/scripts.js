var json = '[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}]';


var cars = JSON.parse(json);
console.log(cars);
generateTable(cars);

function generateTable (json) {
	var table,
		tbody,
		tr,
		td,
		th,
		rowB,
		rowH;

	table = $('<table class="table"><thead></thead><tbody></tbody></table>');
	thead = table.children('thead');
	tbody = table.children('tbody');
	tr = '<tr></tr>';
	td = '<td></td>';
	th = '<th></th>';

	$.each(json, function  (index, value) {
		if (typeof value === 'object') {
			if(index === 0){
				rowH = $(tr);
			}
			rowB = $(tr);

			$.each(value, function  (key, val) {
				if (index === 0) {
					rowH.append($(th).text(key));
				}
				rowB.append($(td).text(val));
			});
			rowB.appendTo(tbody);
		}
	});
	rowH.appendTo(thead);
	$('body').append(table);
}