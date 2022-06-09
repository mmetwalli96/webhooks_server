require 'sinatra'
require 'json'



  get '/' do
    "Hello World!"
  end

  post '/deploy' do
    # payload = JSON.parse(params[:payload])
    # puts payload
    "Deployed!"
  end
