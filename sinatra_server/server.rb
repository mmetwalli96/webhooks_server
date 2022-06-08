require 'sinatra/base'
require 'json'
require 'octokit'

class DeploymentTutorial < Sinatra::Base
  get '/' do
    "Hello World!"
  end

  post '/deploy' do
    payload = JSON.parse(request.body.read)
    puts payload
    "Deployed!"
  end
end
