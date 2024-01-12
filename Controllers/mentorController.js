const ObjectId = require("mongodb").ObjectId;
require('dotenv').config()
const URL = process.env.DB_URL
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const createMentors = async (req, res) => {
  try {
    const data = req.body
    const connection = await MongoClient.connect(URL)
    const db = connection.db("Student-and-Mentor")
    const result = await db.collection('mentors').insertMany(data)
    connection.close()
    res.send(result)
  } catch (error) {
    console.log(error);
  }
}

const getAllMentors = async (req, res) => {
  try {
    const connection = await MongoClient.connect(URL)
    const db = connection.db("Project02")
    const mentors = await db.collection('Mentors').find({}).toArray()
    connection.close()
    res.send(mentors)
  } catch (error) {
    console.log(error);
  }
}

const getMentorById = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await MongoClient.connect(URL)
    const db = connection.db("Project02")
    const mentor = await db.collection('Mentors').findOne({ _id: ObjectId(id) })
    connection.close()
    mentor
      ? res.send(mentor)
      : res.status(404).send({ message: 'Mentor not found ' })
  } catch (error) {
    console.log(error);
  }
}

const editMentorById = async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body
    const connection = await MongoClient.connect(URL)
    const db = connection.db("Project02")
    const mentor = await db.collection('Mentors').updateOne({ _id: ObjectId(id) }, { $set: updateData })
    connection.close()
    res.send(mentor)
  } catch (error) {
    console.log(error);
  }
}

const deleteMentorById = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await MongoClient.connect(URL)
    const db = connection.db("Project02")
    const mentor = await db.collection('Mentors').deleteOne({ _id: ObjectId(id) })
    connection.close()
    res.send(mentor)
  } catch (error) {
    console.log(error);
  }
}

const deleteAllMentor = async () => {
  try {
    const connection = await MongoClient.connect(URL)
    const db = connection.db("Project02")
    const mentor = await db.collection('Mentors').deleteMany({})
    connection.close()
    res.send(mentor)
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createMentors, getAllMentors, getMentorById, editMentorById, deleteMentorById, deleteAllMentor }
