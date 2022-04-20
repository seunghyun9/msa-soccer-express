export default function BoardModel(mongoose){
  mongoose.model('board',
      mongoose.Schema(
          { passengerId: String,
            name: String,
            team: String,
            teamId: String,
            subject: String }, 
            { timestamps: true}
      )
  )
}