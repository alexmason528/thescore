class CreateRushings < ActiveRecord::Migration[6.0]
  def change
    create_table :rushings do |t|
      t.string :player, null: false
      t.string :team, null: false
      t.string :pos, null: false
      t.float :att, null: false, default: 0
      t.float :att_g, null: false, default: 0
      t.float :yds, null: false, default: 0
      t.float :avg, null: false, default: 0
      t.float :yds_g, null: false, default: 0
      t.float :td, null: false, default: 0
      t.string :lng, null: false
      t.float :fir, null: false, default: 0
      t.float :first_percent, null: false, default: 0
      t.float :twenty_plus, null: false, default: 0
      t.float :forty_plus, null: false, default: 0
      t.float :fum, null: false, default: 0

      t.timestamps
    end
  end
end
