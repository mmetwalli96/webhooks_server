require 'sinatra'
require 'json'
  
  set :port, 3000

  get '/' do
    "Hello World!"
  end

  post '/event_handler' do
    payload = JSON.parse(params[:payload])
    "Deployed!"
  end
