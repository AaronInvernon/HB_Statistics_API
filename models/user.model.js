const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    email: {type: String, required: true}, 
    password: {type: String, required: true}, 
    team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'}
});

UserSchema.pre('save', function (next) {
    const user = this;
  
    if (user.isModified('password')) {
      bcrypt.genSalt(SALT_WORK_FACTOR)
        .then(salt => {
          return bcrypt.hash(user.password, salt)
            .then(hash => {
              user.password = hash;
              next();
            });
        })
        .catch(error => next(error));
    } else {
      next();
    }
  });

const User = new mongoose.model('User', UserSchema)

module.exports = User;