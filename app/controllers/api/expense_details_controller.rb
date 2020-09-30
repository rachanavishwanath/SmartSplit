class Api::ExpenseDetailsController < ApplicationController
    def index
        #@expense_details = ExpenseDetail.where(expense_id: params[:expense_id])
        @expense_details = ExpenseDetail.all
        render :index
    end

    def update
    end

    def create
        @expenseDetail = ExpenseDetail.new(expense_details_params)
        if @expenseDetail.save
            render :show
        else
            render json: @expenseDetail.errors.full_messages, status: 404
        end
    end

    private
    def expense_details_params
        params.require(:expense_details).permit(:expense_id, :paid_by, :amount_paid)
    end
end