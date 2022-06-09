require 'sinatra'
require 'json'
require 'octokit'

class DeploymentTutorial < Sinatra::Base
  get '/' do
    "Hello World!"
  end

  post '/deploy' do
    # payload = JSON.parse(params[:payload])
    # puts payload
    "Deployed!"
  end
end
