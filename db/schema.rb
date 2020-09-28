# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_24_225225) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "additional_details", force: :cascade do |t|
    t.integer "expense_id", null: false
    t.integer "author_id", null: false
    t.text "notes"
    t.string "asset_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_additional_details_on_author_id"
    t.index ["expense_id"], name: "index_additional_details_on_expense_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.string "logo_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sub_category_id"
  end

  create_table "expense_details", force: :cascade do |t|
    t.integer "expense_id", null: false
    t.integer "paid_by", null: false
    t.float "amount_paid", default: 0.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["expense_id"], name: "index_expense_details_on_expense_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.integer "profile_id", null: false
    t.float "amount", null: false
    t.string "desc", null: false
    t.integer "category_id", null: false
    t.string "payable_type"
    t.bigint "payable_id"
    t.date "date", null: false
    t.string "split_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_expenses_on_category_id"
    t.index ["payable_type", "payable_id"], name: "index_expenses_on_payable_type_and_payable_id"
    t.index ["profile_id"], name: "index_expenses_on_profile_id"
  end

  create_table "friends", force: :cascade do |t|
    t.integer "profile_id", null: false
    t.integer "friend_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friend_id"], name: "index_friends_on_friend_id"
    t.index ["profile_id", "friend_id"], name: "index_friends_on_profile_id_and_friend_id", unique: true
    t.index ["profile_id"], name: "index_friends_on_profile_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["password_digest"], name: "index_users_on_password_digest", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
