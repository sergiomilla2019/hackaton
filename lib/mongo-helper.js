import { MongoClient, ServerApiVersion } from "mongodb"
import bcrypt from "bcrypt"

const saltRounds = parseInt(process.env.SALT_ROUNDS, 10)
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.0sfzgql.mongodb.net/?retryWrites=true&w=majority`


const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

const connectDb = () => client.connect()
const disconnectDb = () => client.close()
const getUserByQuery = async (query) => {
  let result = []

  try {
    const db = client.db(process.env.MONGODB_DATABASE)
    const collection = db.collection(process.env.MONGODB_COLLECTION)

    //console.log(query)
    result = await collection.find(query).toArray()
    

    //console.log(result, "<---getUserByQuery---")
  } catch (e) {
    console.log("error on getting user", e)
  }

  return result
}

const createNotify = async ({ name, message, type }) => {
  let result

  try {
    //const hash = await bcrypt.hash(password, saltRounds)

    const db = client.db(process.env.MONGODB_DATABASE)
    const collection = db.collection(process.env.MONGODB_COLLECTION1)
    //const newUser = { email, password: hash }

    const newNotify = { name, message, type }

    result = await collection.insertOne(newNotify)
  } catch (e) {
    console.log("error on creating newNotify", e)
  }

  return result
}

const createUser = async ({ email, password }) => {
  let result

  try {
    //const hash = await bcrypt.hash(password, saltRounds)

    const db = client.db(process.env.MONGODB_DATABASE)
    const collection = db.collection(process.env.MONGODB_COLLECTION)
    //const newUser = { email, password: hash }

    const newUser = { email, password }

    result = await collection.insertOne(newUser)
  } catch (e) {
    console.log("error on creating user", e)
  }

  return result
}

const updateUserByEmail = async ({ email, update }) => {
  let result

  try {
    const db = client.db(process.env.MONGODB_DATABASE)
    const collection = db.collection(process.env.MONGODB_COLLECTION)

    result = await collection.findOneAndUpdate({ email }, { $set: update })
  } catch (e) {
    console.log("error on updating user", e)
  }

  return result
}

const mongoHelper = {
  connectDb,
  disconnectDb,
  getUserByQuery,
  createUser,
  updateUserByEmail,
  createNotify,
}

export default mongoHelper
