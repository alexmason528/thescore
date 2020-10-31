Rails.application.routes.draw do
  scope :api, defaults: { :format => 'json' } do
    resources :rushings, only: [:index] do
      get :teams, on: :collection
    end
  end
end
