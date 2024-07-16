import express from 'express'
const router = express.Router();
import service from '../services/api.js'

router.post('/updateProduct', async (req, res) => {
try {
    const response = await service.updateProduct
(req.body);
res.json(response.data);
} catch (error) {
  res.status(500).json({ error: error.message });
}
});
  
  router.post('/updateSupplierClient', async (req, res) => {
  try {
  const response = await service.updateSupplierClient(req.body);
  res.json(response.data);
  } catch (error) {
  res.status(500).json({ error: error.message });
  }
  });
  
  router.post('/updateInventoryLocation', async (req, res) => {
  try {
  const response = await service.updateInventoryLocation(req.body);
  res.json(response.data);
  } catch (error) {
  res.status(500).json({ error: error.message });
  }
  });
  
export default router;