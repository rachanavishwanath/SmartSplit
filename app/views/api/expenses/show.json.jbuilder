json.expense do
    json.partial! 'api/expenses/expense', expense: @expense
end
json.user do
    json.partial! 'api/users/user', user: @user
end