// var models  = require('../models/index');
var express = require('express');
var router  = express.Router();


// Require our controllers.
var user_controller = require('../controllers/userController'); 


// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/create
router.post('/create', user_controller.create_post); 
router.get('/create', user_controller.create_get); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/destroy
router.get('/:user_id/destroy', user_controller.delete_user_get); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/tasks/create
router.post('/:user_id/tasks/create', user_controller.create_task_post);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/tasks/:task_id/destroy
router.get('/:user_id/tasks/:task_id/destroy', user_controller.delete_user_task_get);


// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/timesheet/create
router.post('/:user_id/timesheets/create', user_controller.create_timesheet_post);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/timesheets/:timesheet_id/destroy
router.get('/:user_id/timesheets/:task_id/destroy', user_controller.delete_user_timesheet_get);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamodinakas/create
router.post('/:user_id/teamodinakas/create', user_controller.create_teamodinaka_post);
router.get('/:user_id/teamodinakas/create', user_controller.create_teamodinaka_get);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/tasks/:teamodinaka_id/destroy
router.get('/:user_id/teamodinakas/:teamodinaka_id/destroy', user_controller.delete_user_teamodinaka_get);



module.exports = router;
