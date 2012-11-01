
var UserSchema = new Schema({
    name: {type: String, trim: true}
});
mongoose.model('User', UserSchema);