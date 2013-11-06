$(function(){
  $(document).bind('ajaxSuccess', function() {
    desc_caption = $('#hidden_edit_desc').text()
    $("label[for='issue_description']").next().append(desc_caption);
  });
});
