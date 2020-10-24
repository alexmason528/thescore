require 'rails_helper'
require 'database_cleaner/active_record'

DatabaseCleaner.strategy = :truncation, {:only => %w[rushings]}

RSpec.describe 'Rushings', type: :request do
  before(:all) do
    (1..300).each { create(:rushing) }
  end

  it 'get rushings' do
    get '/api/rushings/'
    expect(assigns(:rushings).count).to eq(10)
  end

  it 'get rushings with pagination' do
    get '/api/rushings/', params: { page: 2, page_size: 20 }
    expect(assigns(:rushings).count).to eq(20)
    expect(assigns(:rushings).first.id).to eq(21)
  end

  it 'get rushings filtered by player' do
    get '/api/rushings/', params: { player: 'Player300' }
    expect(assigns(:rushings).count).to eq(1)

    get '/api/rushings/', params: { player: 'Player25', page_size: 20 }
    expect(assigns(:rushings).count).to eq(11)

    get '/api/rushings/', params: { player: 'Player25' }
    expect(assigns(:rushings).count).to eq(10)
  end

  it 'get rushings ordered by yds descending' do
    get '/api/rushings/', params: { order_by: 'yds', dir: 'descend' }
    expect(assigns(:rushings).first.yds).to eq(300)

    get '/api/rushings/', params: { order_by: 'yds', dir: 'ascend', page: 3, page_size: 50 }
    expect(assigns(:rushings).first.yds).to eq(101)
  end

  it 'get rushings with ordering, filtering and pagination' do
    get '/api/rushings/', params: { page: 3, page_size: 50, order_by: 'yds', dir: 'descend' }
    expect(assigns(:rushings).count).to eq(50)
    expect(assigns(:rushings).first.yds).to eq(200)

    get '/api/rushings/', params: { page: 7, page_size: 50, order_by: 'yds', dir: 'descend' }
    expect(assigns(:rushings).count).to eq(0)

    get '/api/rushings/', params: { page: 3, page_size: 50, player: 'Player1', order_by: 'yds', dir: 'descend' }
    expect(assigns(:rushings).count).to eq(11)
  end

  it 'export rushings' do
    get '/api/rushings.csv/'
    expect(response.content_type).to eq('application/octet-stream')
  end

  after(:all) do
    DatabaseCleaner.clean
  end
end
