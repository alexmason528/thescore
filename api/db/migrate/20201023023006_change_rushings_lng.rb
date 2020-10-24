class ChangeRushingsLng < ActiveRecord::Migration[6.0]
  def change
    reversible do |dir|
      change_table :rushings do |t|
        dir.up   { t.change :lng, :float, default: 0.0 }
        dir.down { t.change :lng, :string }
      end
    end
  end
end
