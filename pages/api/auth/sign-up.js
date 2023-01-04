import dynamoDb from '../../../lib/mongo-helper'

export default async function handler(req, res) {
  await dynamoDb.connectDb()
  const [user] = await dynamoDb.getUserByQuery({ email: req.body.email })

  //console.log(user, "<--handler--")
  if (user) {
    res.status(409).json({ error: 'Email exists' })
  } else {
    try {
      await dynamoDb.createUser(req.body)
      await dynamoDb.disconnectDb()  
    } catch (error) {
      console.log(error)
    }
    
    res.status(200).json({ email: req.body.email })
  }
}
