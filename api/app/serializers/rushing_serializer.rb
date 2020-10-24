class RushingSerializer < ActiveModel::Serializer
  attributes :id, :player, :team, :pos, :att, :att_g, :yds, :yds_g, :avg,
             :td, :lng, :touchdown, :fir, :first_percent, :twenty_plus, :forty_plus,
             :fum, :created_at, :updated_at
end
