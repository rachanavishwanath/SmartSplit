class Api::ExpenseDetailsController < ApplicationController
    def index
        @expense_details = ExpenseDetail.where(expense_id: params[:expense_id])
        render :index
    end

    def update
    end

    def create
    end
end