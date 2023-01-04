import dynamoDb from '../../../lib/mongo-helper'

export default async function handler(req, res) {
  await dynamoDb.connectDb()
  //const [user] = await dynamoDb.getUserByQuery({ email: req.body.email })

  //console.log(user, "<--handler--")
  
    try {
      await dynamoDb.createNotify(req.body)
      await dynamoDb.disconnectDb()  
    } catch (error) {
      console.log(error)
    }
    
    res.status(200).json({ name: req.body.name })
}
