const express = require('express')
const {
  createStudents,
  deleteAllStudent,
  deleteStudentById,
  editStudentById,
  getAllStudents,
  getStudentById,
} = require('../Controllers/studentController')
const router = express.Router()

router.get('/', getAllStudents)
router.get('/:id', getStudentById)
router.post('/', createStudents)
router.put('/:id', editStudentById)
router.delete('/:id', deleteStudentById)
router.delete('/', deleteAllStudent)

module.exports = router
