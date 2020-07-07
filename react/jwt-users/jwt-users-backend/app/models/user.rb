class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true

    # tells knock what info to include in the body
    def to_token_payload
        {
            sub: id,
            email: email
        }
    end
end
