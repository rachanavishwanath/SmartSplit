Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, default: { format: :json } do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resource :friends, only: [:index, :create, :delete]
    resources :expenses, only: [:create, :index, :show, :update, :destroy] do
      resources :additional_details, only: [:index]
      resources :expense_details, only: [:index]
    end
    resources :categories, only: [:index]
    resources :additional_details, only: [:create, :delete]
    resources :expense_details, only: [:update, :create]
  end
end
