module.exports = mongoose =>
 mongoose.model('todo', // db에서 자동으로 복수형인 users로 바꿔줌
        mongoose.Schema(
            {userid: String,
              task : String,
              completed : String
            }, { timestamps: true}
          )
        )