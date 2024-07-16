import axios from "axios";
import { apiKey, apiUrl } from '../config.js';

class MegaventoryService {
  async addProduct(product) { 
    const url = this.buildUrl(apiUrl, '/Product/ProductUpdate');
    const payload = {
      APIKEY: apiKey,
      ...product
    };
    return await axios.post(url, payload);
  }

  async addSupplierClient(supplierClient) {
    const url = this.buildUrl(apiUrl, '/SupplierClient/SupplierClientUpdate');
    const payload = {
      APIKEY: apiKey,
      ...supplierClient
    };
    return await axios.post(url, payload);
  }

  async addInventoryLocation(inventoryLocation) {
    const url = this.buildUrl(apiUrl, '/InventoryLocation/InventoryLocationUpdate');
    const payload = {
      APIKEY: apiKey,
      ...inventoryLocation
    };
    return await axios.post(url, payload);
  }

  async addPurchaseOrder(purchaseOrder) {
    const url = this.buildUrl(apiUrl, '/PurchaseOrder/PurchaseOrderUpdate');
    const payload = {
      APIKEY: apiKey,
      ...purchaseOrder
    };
    return await axios.post(url, payload);
  }

  async addSalesOrder(salesOrder) {
    const url = this.buildUrl(apiUrl, '/SalesOrder/SalesOrderUpdate');
    const payload = {
      APIKEY: apiKey,
      ...salesOrder
    };
    return await axios.post(url, payload);
  }

  async updateAvailability(availability) {
    const url = this.buildUrl(apiUrl, '/InventoryLocationStock/ProductStockUpdate');
    const payload = {
      APIKEY: apiKey,
      ...availability
    };
    return await axios.post(url, payload);
  }

  buildUrl(baseUrl, endpoint) {
    return `${baseUrl}${endpoint}`;
  }
}

export default new MegaventoryService();
