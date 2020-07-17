class Api::ReviewsController < ApplicationController 
  
  def create 
    @review = Review.new(review_params)
    @review.user_id = current_user.id 

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
  end 

  def destroy 
  end 

  private 
  def review_params 
    params.require(:review).permit(:bench_id, :comment, :rating)
  end 
end 