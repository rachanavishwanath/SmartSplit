class UserMailer < ApplicationMailer
    default from: 'smartsplitinvitations@gmail.com'

    def invitation_email(current_user, user)
        @user = user
        @url = 'https://smartsplit2.herokuapp.com/#/signup'
        mail(to: user.email, subject: "#{current_user.name} invited you to join SmartSplit")
    end

    def add_friend_email(current_user, user)
        @user = user
        @url = 'https://smartsplit2.herokuapp.com/#/signup'
        mail(to: user.email, subject: "#{current_user.name} added you as a friend")
    end
end