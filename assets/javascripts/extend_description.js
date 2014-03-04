$(document).ready( function() {
  var desc_caption = $('#hidden_edit_desc').text();
  var edit_link = $("label[for='issue_description']").next();
  edit_link.append(desc_caption);
  $(document).bind('ajaxSuccess', function() {
    var desc_caption = $('#hidden_edit_desc').text();
    var edit_link = $("label[for='issue_description']").next();
    if(!edit_link.text().length) {
      edit_link.append(desc_caption);
    };
  });
});
