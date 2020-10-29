class UserMailer < ApplicationMailer
    default from: 'invitations@SmartSplit.com'

    def invitation_email(user)
        @user = user
        @url = 'http://localhost:3000/#/signup'
        mail(to: user.email, subject: 'Invitation to join SmartSplit')
    end
end