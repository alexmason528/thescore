require 'rails_helper'

RSpec.describe Rushing, type: :model do
  subject { 
    described_class.new(player: 'Alex',
                        team: 'JAX',
                        pos: 'RB',
                        yds: 0)
  }
  
  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without player" do
    subject.player = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without team" do
    subject.team = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without pos" do
    subject.pos = nil
    expect(subject).to_not be_valid
  end
end
