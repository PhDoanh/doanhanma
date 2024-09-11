<table id="<% tp.file.cursor(1) %>" class="display">
    <thead>
        <tr>
            <th></th><% tp.file.cursor(2) %>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td><% tp.file.cursor(2) %>
		</tr><% tp.file.cursor(3) %>
    </tbody>
</table>
<script>
	$(document).ready(function() {
	  $('#<% tp.file.cursor(1) %>').DataTable();
	});
</script>