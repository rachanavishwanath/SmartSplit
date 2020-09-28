# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Friend.destroy_all
Category.destroy_all

guest = User.create!(
    name: 'guest',
    email: 'demo@email.com',
    password: '123456789'
)

u1 = User.create!(
    name: 'user1',
    email: 'user1@email.com',
    password: '123456789'
)

u2 = User.create!(
    name: 'user2',
    email: 'user2@email.com',
    password: '123456789'
)

f1 = Friend.create!(
    profile_id: u1.id,
    friend_id: guest.id
)

f2 = Friend.create!(
    profile_id: u2.id,
    friend_id: guest.id
)

f3 = Friend.create!(
    profile_id: u2.id,
    friend_id: u1.id
)