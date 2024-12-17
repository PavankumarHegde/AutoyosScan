const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Get all patients
router.get('/', patientController.getPatients);

// Add a new patient
router.post('/', patientController.addPatient);

module.exports = router;
