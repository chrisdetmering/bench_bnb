class AddColumnToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :user_id, :integer, null: false 
    add_column :reviews, :bench_id, :integer, null: false 

  end

  
end
