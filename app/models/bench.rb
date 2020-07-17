class Bench < ApplicationRecord 
  validates :description, :lat, :lng, presence: true
  has_many :reviews
  has_one_attached :photo
  

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds['northEast']['lat'])
        .where("lat > ?", bounds['southWest']['lat']) 
        .where("lng < ?", bounds['northEast']['lng'])
        .where("lng > ?", bounds['southWest']['lng'])
  end 

  def self.in_seat_range(benches, min_seating, max_seating)
    benches.select do |bench| 
        bench.seating >= min_seating && bench.seating <= max_seating
      end 
  end 
end   