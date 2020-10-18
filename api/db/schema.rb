# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_18_040914) do

  create_table "rushings", force: :cascade do |t|
    t.string "player", null: false
    t.string "team", null: false
    t.string "pos", null: false
    t.float "att", default: 0.0, null: false
    t.float "att_g", default: 0.0, null: false
    t.float "yds", default: 0.0, null: false
    t.float "avg", default: 0.0, null: false
    t.float "yds_g", default: 0.0, null: false
    t.float "td", default: 0.0, null: false
    t.string "lng", null: false
    t.float "fir", default: 0.0, null: false
    t.float "first_percent", default: 0.0, null: false
    t.float "twenty_plus", default: 0.0, null: false
    t.float "forty_plus", default: 0.0, null: false
    t.float "fum", default: 0.0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
