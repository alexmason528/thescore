class AddTouchdownToRushings < ActiveRecord::Migration[6.0]
  def change
    add_column :rushings, :touchdown, :boolean, default: false
  end
end
