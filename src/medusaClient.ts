import Medusa from "@medusajs/medusa-js";

const medusa = new Medusa({
  baseUrl: process.env.REACT_APP_MEDUSA_BACKEND_URL || "http://localhost:9000",
  maxRetries: 3,
  publishableApiKey: process.env.REACT_APP_MEDUSA_PUBLISHABLE_KEY || "pk_740c21a07125bbb5eaf9424eb335602add964b8940c6840ea375e20a8448796b",
});

export default medusa;
