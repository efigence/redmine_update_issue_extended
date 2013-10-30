module RedmineUpdateIssueExtended
  module Hooks
    class ViewIssuesEditHook < Redmine::Hook::ViewListener
      render_on(:view_issues_edit_notes_bottom, :partial => 'settings/issue_edit', :layout => false)
    end
  end
end
