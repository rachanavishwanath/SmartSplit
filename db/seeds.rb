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
Expense.destroy_all

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

c1 = Category.create!(name: 'Entertainment',
        logo_url: 'nothing_yet'
        )

s1 = Category.create!(name: 'Games',
        logo_url: 'nothing_yet',
        sub_category_id: c1.id
        )

s2 = Category.create!(name: 'Movies',
        logo_url: 'nothing_yet',
        sub_category_id: c1.id
        )

s3 = Category.create!(name: 'Music',
        logo_url: 'nothing_yet',
        sub_category_id: c1.id
        )

s4 = Category.create!(name: 'Other',
        logo_url: 'nothing_yet',
        sub_category_id: c1.id
        )

s5 = Category.create!(name: 'Sports',
        logo_url: 'nothing_yet',
        sub_category_id: c1.id
        )  

 
c2 = Category.create!(name: 'Food and drink',
        logo_url: 'nothing_yet'
        )

s6 = Category.create!(name: 'Dining out',
        logo_url: 'nothing_yet',
        sub_category_id: c2.id
        )

s7 = Category.create!(name: 'Groceries',
        logo_url: 'nothing_yet',
        sub_category_id: c2.id
        )

s8 = Category.create!(name: 'Liquor',
        logo_url: 'nothing_yet',
        sub_category_id: c2.id
        )

s9 = Category.create!(name: 'Other',
        logo_url: 'nothing_yet',
        sub_category_id: c2.id
        )

c3 = Category.create!(name: 'Home',
        logo_url: 'nothing_yet'
        )

s10 = Category.create!(name: 'Electronics',
        logo_url: 'nothing_yet',
        sub_category_id: c3.id
        )

s11 = Category.create!(name: 'Furniture',
        logo_url: 'nothing_yet',
        sub_category_id: c3.id
        )

s12 = Category.create!(name: 'Household supplies',
        logo_url: 'nothing_yet',
        sub_category_id: c3.id
        )

s13 = Category.create!(name: 'Maintenance',
        logo_url: 'nothing_yet',
        sub_category_id: c3.id
        )
s14 = Category.create!(name: 'Mortgage',
        logo_url: 'nothing_yet',
        sub_category_id: c3.id
        )
s15 = Category.create!(name: 'Other',
        logo_url: 'nothing_yet',
        sub_category_id: c3.id
        )
s16 = Category.create!(name: 'Pets',
        logo_url: 'nothing_yet',
        sub_category_id: c3.id
        )
s17 = Category.create!(name: 'Rent',
        logo_url: 'nothing_yet',
        sub_category_id: c3.id
        )
s18 = Category.create!(name: 'Services',
        logo_url: 'nothing_yet',
        sub_category_id: c3.id
        )     

c4 = Category.create!(name: 'Life',
        logo_url: 'nothing_yet'
        )

s19 = Category.create!(name: 'Childcare',
        logo_url: 'nothing_yet',
        sub_category_id: c4.id
        )

s20 = Category.create!(name: 'Clothing',
        logo_url: 'nothing_yet',
        sub_category_id: c4.id
        )

s21 = Category.create!(name: 'Education',
        logo_url: 'nothing_yet',
        sub_category_id: c4.id
        )

s22 = Category.create!(name: 'Gifts',
        logo_url: 'nothing_yet',
        sub_category_id: c4.id
        )
s23 = Category.create!(name: 'Insurance',
        logo_url: 'nothing_yet',
        sub_category_id: c4.id
        )
s24 = Category.create!(name: 'Medical expenses',
        logo_url: 'nothing_yet',
        sub_category_id: c4.id
        )
s25 = Category.create!(name: 'Other',
        logo_url: 'nothing_yet',
        sub_category_id: c4.id
        )
s26 = Category.create!(name: 'Taxes',
        logo_url: 'nothing_yet',
        sub_category_id: c4.id
        )

c5 = Category.create!(name: 'Transportation',
        logo_url: 'nothing_yet'
        )

s27 = Category.create!(name: 'Bicycle',
        logo_url: 'nothing_yet',
        sub_category_id: c5.id
        )

s28 = Category.create!(name: 'Bus/train',
        logo_url: 'nothing_yet',
        sub_category_id: c5.id
        )

s29 = Category.create!(name: 'Car',
        logo_url: 'nothing_yet',
        sub_category_id: c5.id
        )

s30 = Category.create!(name: 'Gas/fuel',
        logo_url: 'nothing_yet',
        sub_category_id: c5.id
        )
s31 = Category.create!(name: 'Hotel',
        logo_url: 'nothing_yet',
        sub_category_id: c5.id
        )
s32 = Category.create!(name: 'Other',
        logo_url: 'nothing_yet',
        sub_category_id: c5.id
        )
s33 = Category.create!(name: 'Parking',
        logo_url: 'nothing_yet',
        sub_category_id: c5.id
        )
s34 = Category.create!(name: 'Plane',
        logo_url: 'nothing_yet',
        sub_category_id: c5.id
        )
s35 = Category.create!(name: 'Taxi',
        logo_url: 'nothing_yet',
        sub_category_id: c5.id
        )

c6 = Category.create!(name: 'Uncategorized',
        logo_url: 'nothing_yet'
        )
s36 = Category.create!(name: 'General',
        logo_url: 'nothing_yet',
        sub_category_id: c6.id
        )

c7 = Category.create!(name: 'Utilities',
        logo_url: 'nothing_yet'
        )

s37 = Category.create!(name: 'Cleaning',
        logo_url: 'nothing_yet',
        sub_category_id: c7.id
        )
s38 = Category.create!(name: 'Electricity',
        logo_url: 'nothing_yet',
        sub_category_id: c7.id
        )
s39 = Category.create!(name: 'Heat/gas',
        logo_url: 'nothing_yet',
        sub_category_id: c7.id
        )
s40 = Category.create!(name: 'Other',
        logo_url: 'nothing_yet',
        sub_category_id: c7.id
        )
s41 = Category.create!(name: 'Trash',
        logo_url: 'nothing_yet',
        sub_category_id: c7.id
        )
s42 = Category.create!(name: 'TV/Phone/Internet',
        logo_url: 'nothing_yet',
        sub_category_id: c7.id
        )
s43 = Category.create!(name: 'Water',
        logo_url: 'nothing_yet',
        sub_category_id: c7.id
        )

e1 = Expense.create!(profile_id: guest.id, 
        amount: 10, desc: 'Star Wars movie', category_id: s2.id,
        payable_type: 'Friend', payable_id: f1.id, split_type: 'equally', date: '2020-09-26')

e2 = Expense.create!(profile_id: guest.id, 
        amount: 20, desc: 'Game day', category_id: s1.id,
        payable_type: 'Friend', payable_id: f2.id, split_type: 'equally', date: '2020-08-26')
