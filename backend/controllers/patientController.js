// Mock database for patients (replace with database integration)
let patients = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 }
  ];
  
  // Controller to get all patients
  exports.getPatients = (req, res) => {
    res.json(patients);
  };
  
  // Controller to add a new patient
  exports.addPatient = (req, res) => {
    const { name, age } = req.body;
    const newPatient = { id: patients.length + 1, name, age };
    patients.push(newPatient);
    res.status(201).json(newPatient);
  };
  