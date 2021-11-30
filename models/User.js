import mongoose from 'mongoose';
//import mongoosePaginate from 'mongoose-paginate-v2';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)