Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, default: { format: :json } do 
    resources :users, only: [:create]
    get '/users', to: 'users#show'
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:index, :create, :destroy]
    resources :expenses, only: [:create, :index, :show, :update, :destroy] do
      resources :additional_details, only: [:index]
      #resources :expense_details, only: [:index]
    end
    resources :categories, only: [:index]
    resources :additional_details, only: [:create, :destroy]
    resources :expense_details, only: [:index, :update, :create]
  end
end
