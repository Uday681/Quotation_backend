import express from 'express';
import {
          createCustomer,
          getAllCustomers,
          updateCustomer,
          deleteCustomer,
          searchCustomer
} from '../controllers/CustomerController.js';

const router = express.Router();

router.post('/createCustomer', createCustomer)
router.get('/', getAllCustomers);
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)
router.get('/search', searchCustomer);

export default router;
