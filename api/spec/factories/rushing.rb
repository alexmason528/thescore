FactoryBot.define do
  factory :rushing do
    sequence(:player) { |n| "Player#{n}" }
    sequence(:team) { |n| "Team#{n}" }
    sequence(:pos) { |n| "Pos#{n}" }
    sequence(:yds) { |n| n }
  end
end
