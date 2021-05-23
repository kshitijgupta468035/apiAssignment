import {Router} from 'express';
const router = Router();

import { getEmployee, getEmployeeById, addEmployee, updateEmployee, removeEmployee } from '../controllers/employee';

router.get('/employees', getEmployee);
router.get('/employee/:id', getEmployeeById);
router.post('/employee/add', addEmployee);
router.put('/employee/update/:id', updateEmployee)
router.delete('/employee/remove/:id', removeEmployee);

export default router;