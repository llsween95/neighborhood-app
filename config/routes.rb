Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :posts do 
    member do 
      put 'like'
     end  
  end
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  get '/posts', to: 'posts#index'
  get '/posts/:posts_id', to: 'posts/#show'

  get '/posts/:posts_id/comments', to: 'comments#index'
  get '/posts/:posts_id/comments/:comments_id', to: 'comments#show'

  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
