import {Router} from 'express';
const router = Router();

import { getDepartment, getDepartmentById, addDepartment, updateDepartment, removeDepartment } from '../controllers/department';

router.get('/departments', getDepartment);
router.get('/department/:id', getDepartmentById);
router.post('/department/add', addDepartment);
router.put('/department/update/:id', updateDepartment)
router.delete('/department/remove/:id', removeDepartment);

export default router;