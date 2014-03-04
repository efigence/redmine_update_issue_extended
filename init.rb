require 'redmine'

Redmine::Plugin.register :redmine_update_issue_extended do
  name 'Redmine update issue extended plugin'
  author 'Jacek Grzybowski'
  description "Allows to extend edit issue view by adding text next to edit description button"
  version '0.0.2'
  url 'http://github.com/efigence/redmine_update_issue_extended'
  author_url 'http://efigence.com'

  settings :default => {}, :partial => 'settings/update_issue_extended_settings'
end

require 'redmine_update_issue_extended/hooks/view_issues_edit_hook'
