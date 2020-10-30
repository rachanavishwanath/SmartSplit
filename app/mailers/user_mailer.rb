class UserMailer < ApplicationMailer
    default from: 'invitations@SmartSplit.com'

    def invitation_email(user)
        @user = user
        @url = 'https://smartsplit2.herokuapp.com/#/signup'
        mail(to: user.email, subject: 'Invitation to join SmartSplit')
    end
end