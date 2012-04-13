require 'test_helper'

class HomesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get news_letter" do
    get :news_letter
    assert_response :success
  end

end
