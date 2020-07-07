Rails.application.routes.draw do
  resources :todos
  post 'user_token' => 'user_token#create'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
