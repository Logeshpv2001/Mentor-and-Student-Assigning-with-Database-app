const express = require('express')
const {
  createMentors,
  deleteAllMentor,
  deleteMentorById,
  editMentorById,
  getAllMentors,
  getMentorById,
} = require('../Controllers/mentorController.js')
const router = express.Router()

router.get('/', getAllMentors)
router.get('/:id', getMentorById)
router.post('/', createMentors)
router.put('/:id', editMentorById)
router.delete('/:id', deleteMentorById)
router.delete('/', deleteAllMentor)

module.exports = router
