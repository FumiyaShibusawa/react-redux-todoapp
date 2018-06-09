Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "todo_lists#index"
  get "/login" => "todo_lists#index"
  resources :todo_lists
  resources :todos
  resources :users
end
