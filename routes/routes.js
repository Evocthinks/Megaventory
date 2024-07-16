import express from 'express'
const router = express.Router();
import service from '../services/api.js'

  router.post('/addProduct', async (req, res) => {
    try {
      const response = await service.addProduct(req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.post('/addSupplierClient', async (req, res) => {
    try {
      const response = await service.addSupplierClient(req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.post('/addInventoryLocation', async (req, res) => {
    try {
      const response = await service.addInventoryLocation(req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post('/addPurchaseOrder', async (req, res) => {
    try {
      const response = await service.addPurchaseOrder(req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post('/addSalesOrder', async (req, res) => {
    try {
      const response = await service.addSalesOrder(req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post('/updateAvailability', async (req, res) => {
    try {
      const response = await service.updateAvailability(req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
export default router;