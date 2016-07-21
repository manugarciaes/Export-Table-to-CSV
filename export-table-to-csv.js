/**
 * Export table html to CSV
 * @type {{table: string, init: Function, get: Function, export: Function}}
 */
var exportTableToCsv = {

    table: '',
    filename: '',
    init: function (table, filename) {
        exportToCsv.table = table;
        exportToCsv.filename = filename;

        var head = exportToCsv.get('tr','th');
        var body = exportToCsv.get('tr','td');

        var csv = head + '\n';
        csv += body;

        exportToCsv.export(csv);
    },
    get: function (parent, child) {
        rows = '';
        exportToCsv.table.find(parent).each(function () {
            var row = [];
            $(this).find(child).each(function () {
                var text = $(this).text();
                text = $.trim(text.replace(/\n/g, ''));
                // local replace
                text = text.replace($(this).data('export-replace'),'');
                // global replace
                text = text.replace(exportToCsv.table.data('export-replace'),'');

                row.push(
                    '"' + text + '"'
                )
            });

            var rowJoin = row.join(';') + '\n';
            if (rowJoin.length > 1) {
                rows += rowJoin;
            }
        });

        return rows;
    },
    export: function (csv) {
        var encodedUri = 'data:application/vnd.ms-excel,' + encodeURI(csv);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", exportToCsv.filename);
        document.body.appendChild(link);

        link.click();
    }

}