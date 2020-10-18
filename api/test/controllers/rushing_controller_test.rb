require 'test_helper'

class RushingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rushing_index_url
    assert_response :success
  end

end
