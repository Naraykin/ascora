module.exports = function mongoURI(mongoName, mongoPassword) {
    return 'mongodb+srv://' + mongoName + ':' + mongoPassword +'@ascora-main-5aobm.mongodb.net/test?retryWrites=true&w=majority'
}