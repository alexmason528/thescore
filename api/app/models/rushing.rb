require 'csv'

class Rushing < ActiveRecord::Base
  validates :player, presence: true
  validates :team, presence: true
  validates :pos, presence: true

  def self.to_csv
    attributes = %w{player team pos att att_g yds avg yds_g td lng fir first_percent twenty_plus forty_plus fum}

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |user|
        csv << attributes.map{ |attr| user.send(attr) }
      end
    end
  end
end
