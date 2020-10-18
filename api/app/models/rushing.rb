require 'csv'

class Rushing < ActiveRecord::Base
  def self.to_csv
    attributes = %w{id player}

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |user|
        csv << attributes.map{ |attr| user.send(attr) }
      end
    end
  end
end
