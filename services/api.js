import axios from "axios";
import { apiKey, apiUrl } from '../config.js';

class MegaventoryService {
  async updateProduct(product) {
    const url = apiUtil.buildUrl(apiUrl, '/json/reply/ProductUpdate');
    const payload = {
      APIKEY: apiKey,
      mvProduct: product
    };
    return await axios.post(url, payload);
  }

  async updateSupplierClient(supplierClient) {
    const url = apiUtil.buildUrl(apiUrl, '/json/reply/SupplierClientUpdate');
    const payload = {
      APIKEY: apiKey,
      mvSupplierClient: supplierClient
    };
    return await axios.post(url, payload);
  }

  async updateInventoryLocation(inventoryLocation) {
    const url = apiUtil.buildUrl(apiUrl, '/json/reply/InventoryLocationUpdate');
    const payload = {
      APIKEY: apiKey,
      mvInventoryLocation: inventoryLocation
    };
    return await axios.post(url, payload);
  }
}

export default new MegaventoryService();
