require 'sinatra'
require 'json'

  get '/' do
    "Hello World!"
  end

  post '/event_handler' do
    payload = JSON.parse(params[:payload])
    "Deployed!"
  end