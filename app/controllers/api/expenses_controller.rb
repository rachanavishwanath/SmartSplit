class Api::ExpensesController < ApplicationController

    def index
        if params.has_key?(:payable_id) 
            @expenses = Expense.all.where(payable_id: params[:payable_id])
        else
            @expenses = Expense.all.where(profile_id: current_user.id )
        end
        render :index
    end

    def show
        @expense = Expense.find(params[:id])
        render '/api/expenses/show'
    end

    def create
        @expense = Expense.new(expense_params)
        @expense.profile_id = current_user.id
        if @expense.save!
            @user = current_user
            render 'api/expenses/show'
        else
            render json: @expense.errors.full_messages, status: 422
        end
    end

    def update
        @expense = Expense.find(params[:id])
        if @expense.update(expense_params)
            render 'api/expenses/show'
        else
            render json: @expense.errors.full_messages, status: 422
        end
    end

    def destroy
        @expense = Expense.find(params[:id])
        @expense.destroy
        @user = current_user
        render 'api/users/show'
    end

    private
    def expense_params
        params.require(:expense).permit(:profile_id, :amount, :desc, :category_id, :payable_type, :payable_id, :date, :split_type )
    end
end