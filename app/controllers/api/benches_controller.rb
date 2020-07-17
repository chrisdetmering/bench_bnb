class Api::BenchesController < ApplicationController 
  def index 
    @benches = Bench.in_bounds(bounds)
  
    if filter_by_seating? 
       @benches = @benches.where(seating: seating_range)
    end

    @benches = @benches.includes(:reviews)
    render :index
  end 

  def create 
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages
    end

  end

  def show 
    @bench = Bench.find(params[:id])

    if !@bench.nil? 
      render :show
    else 
      render @bench.errors.full_messages
    end 
  end 
 
  private 
  def bench_params 
    params.require(:bench)
    .permit(
      :description, 
      :lat, 
      :lng, 
      :seating, 
      :max_seating, 
      :min_seating, 
      :photo)
  end

  def bounds 
    params[:bounds]
  end 

  def filter_by_seating? 
    params[:minSeating] && params[:maxSeating]
  end 

 
  def seating_range
    (params[:minSeating]..params[:maxSeating])
  end 
end 