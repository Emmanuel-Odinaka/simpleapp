var express = require('express');
var router = express.Router();


// Require our controllers.
var teamodinaka_controller = require('../controllers/teamodinakaController'); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/create
router.post('/create', teamodinaka_controller.create_post); 
router.get('/create', teamodinaka_controller.create_get); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/destroy
router.get('/:user_id/destroy', teamodinaka_controller.delete_user_get); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamodinakas/create
router.post('/:user_id/teamodinakas/create', teamodinaka_controller.create_teamodinaka_post);
router.get('/:user_id/teamodinakas/create', teamodinaka_controller.create_teamodinaka_get);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamodinakas/:teamodinaka_id/destroy
router.get('/:user_id/teamodinakas/:timesheet_id/destroy', teamodinaka_controller.delete_user_teamodinaka_get);

module.exports = router;