# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@user1 = User.create!(name: "Sweeney", email: "sweendog@email.com", password:"123456")
@post1 = Post.create!(content: "Hey, it's Sweendog here.", user:@user1 )
@comment1 = Comment.create!(content:"I am commenting on my own post.", user:@user1, post:@post1)

@user2 = User.create!(name: "John Johnson", email: "jj@email.com", password:"123456")
@post2 = Post.create!(content: "John Johnson, reporting for duty.", user:@user2 )
@comment2 = Comment.create!(content:"John Johnson here commenting on my own post.", user:@user2, post:@post2)