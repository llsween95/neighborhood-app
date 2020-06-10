Rails.application.routes.draw do
  resources :likes
  
  resources :posts do 
    resources :comments
    member do 
      put 'like'
     end  
  end
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

 
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
