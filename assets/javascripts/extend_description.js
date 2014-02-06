$(function(){
  $(document).bind('ajaxSuccess', function() {
    desc_caption = $('#hidden_edit_desc').text();
    edit_link = $("label[for='issue_description']").next();
    if(!edit_link.text().length) {
      edit_link.append(desc_caption);
    };
  });
});
