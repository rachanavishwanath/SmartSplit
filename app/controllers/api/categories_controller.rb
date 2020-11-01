class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.includes(:sub_categories)
        render :index
    end
end