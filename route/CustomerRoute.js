import express from 'express';
import {
          createCustomer,
          getAllCustomers,
          updateCustomer,
          deleteCustomer,
} from '../controllers/CustomerController.js';

const router = express.Router();

router.post('/createCustomer', createCustomer)
router.get('/', getAllCustomers);
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)

export default router;
