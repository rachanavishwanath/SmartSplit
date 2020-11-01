class Api::AdditionalDetailsController < ApplicationController

    def index
        @additional_details = AdditionalDetail.includes(:expense).where(expense_id: params[:expense_id])
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

     def update
        debugger
        @ad = AdditionalDetail.find(params[:additional_detail][:id])
        debugger
        @ad.notes = params[:additional_detail][:notes] if params[:additional_detail][:notes]
        @ad.asset = params[:additional_detail][:asset] if params[:additional_detail][:asset]
        debugger
        if @ad.save
            debugger
            render :show
        else
            debugger
            render json: @ad.errors.full_messages, status: 422
        end
    end

    def destroy
        @ad = AdditionalDetail.find(params[:id])
        @ad.destroy
        render json: {}
    end

    private
    def ad_params
        params.require(:additional_detail).permit(:expense_id, :author_id, :notes, :asset)
    end

end