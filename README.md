# Export table to CSV -

```

## Example

<table id="export-table">
    <thead>
        <tr>
            <td>Head</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>A</td>
        </tr>
        <tr>
            <!-- export replace: replace the value -->
            <td data-export-replace="$">B $</td>
        </tr>
        <tr>
            <td>C</td>
        </tr>
    </tbody>
</table>   
    
<script>

    $(function () {
    
        exportTableToCsv.init($('#export-table'), 'csv-name.csv');
    
    });
    
</script>