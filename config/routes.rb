Rails.application.routes.draw do
  resources :posts
  get 'pages/home', as: "home"
  get 'pages/about'

  root 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
