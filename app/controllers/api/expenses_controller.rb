class Api::ExpensesController < ApplicationController

    #before_action :ensure_logged_in

    def index
        #replace 12 with current_user.id after testing
        @expenses = Expense.all.where(profile_id: current_user.id)
        if params.has_key?(:friend_id) 
            @expenses = Expense.with_a_friend(current_user.id, params[:friend_id])
        end
        render :index
    end

    def show
        debugger
        @expense = Expense.find(params[:id])
        render '/api/expenses/show'
    end

    def create
        @expense = Expense.new(expense_params)
        if @expense.save!
            render 'api/expenses/index'
        else
            render json: @expense.errors.full_messages, status: 422
        end
    end

    def update
        @expense = Expense.find(params[:id])
        if @expense.update(expense_params)
            render 'api/expenses/index'
        else
            render json: @expense.errors.full_messages, status: 422
        end
    end

    def destroy
        @expense = Expense.find(params[:id])
        @expense.destroy
        render json: {}
    end

    private
    def expense_params
        params.require(:expense).permit(:amount, :profile_id, :amount, :desc, :category_id, :payable_type, :payable_id, :date, :split_type )
    end
end