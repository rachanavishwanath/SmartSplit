class Api::AdditionalDetailsController < ApplicationController

    def index
        @additional_details = AdditionalDetail.where(expense_id: params[:expense_id])
        render :index
    end

    def create
        @ad = AdditionalDetail.new(ad_params)
        if @ad.save
            render :show
        else
            render @ad.errors.full_messages, status: 422
        end
    end

    def destroy
        @ad = AdditionalDetail.find(params[:id])
        @ad.destroy
        render json: {}
    end

    private
    def ad_params
        params.require(:additional_detail).permit(:expense_id, :author_id, :notes, :asset_url)
    end

end