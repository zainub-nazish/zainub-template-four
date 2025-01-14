
---

# **Template 4 Product API - GET /api/product**

### **Base URL:**
```
https://next-ecommerce-template-4.vercel.app/api/products
```

### **Description:**
This endpoint retrieves a list of products available in the store. Each product includes detailed information such as the product's name, description, price, category, discount percentage, stock level, and an image URL. The response provides an array of products in JSON format.

### **Example Response:**
```json
[
 {
      "id": "16",
      "name": "Matilda Velvet Chair – Pink",
      "imagePath": "Chair (18).png",
      "price": "$600",
      "description": "A vibrant pink velvet chair with a retro-inspired design.",
      "discountPercentage": 15,
      "isFeaturedProduct": true,
      "stockLevel": 12,
      "category": "Chair"
    },
]
```

### **Response Fields:**
- **id** (string): The unique identifier for the product.
- **name** (string): The name of the product.
- **description** (string): A detailed description of the product, including key features.
- **price** (number): The price of the product (in the store's currency).
- **category** (string): The category to which the product belongs (e.g., chair or sofa).
- **image** (string): A URL to an image of the product.
- **discountPercentange** (number): The discount percentage applied to the product, if any (e.g., 20 for 20% off).
- **isFeaturedProduct** (boolean): Indicates whether the product is featured (true/false).
- **stockLevel** (number): Indicates the available quantity of the item in stock

---

## **Importing API Data into Your Sanity Project**

To import the data from the `/api/product` endpoint into your Sanity project, you can follow these steps:

### 1. Create `import-data.mjs` (or any name you prefer):

Here’s the code to fetch data from the API and import it into Sanity:

```javascript
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'your-project-id', // YOUR PROJECT ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-15',
  token: 'your-auth-token', // YOUR API TOKEN
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading Image : ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image Uploaded Successfully : ${asset._id}`);
    return asset._id;
  } 
  catch (error) {
    console.error('Failed to Upload Image:', imageUrl, error);
    return null;
  }
}

async function importData() {
  try {
    console.log('Fetching Product Data From API ...');

    const response = await axios.get("https://next-ecommerce-template-4.vercel.app/api/product")
    const products = response.data;

    for (const item of products) {
      console.log(`Processing Item: ${item.name}`);

      let imageRef = null;
      if (item.image) {
        imageRef = await uploadImageToSanity(item.imagePath);
      }

      const sanityItem = {
        _type: 'product',
        name: item.name,
        category: item.category || null,
        price: item.price,
        description: item.description || '',
        discountPercentage: item.discountPercentage || 0,
        stockLevel: item.stockLevel || 0,
        isFeaturedProduct: item.isFeaturedProduct,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      console.log(`Uploading ${sanityItem.category} - ${sanityItem.name} to Sanity !`);
      const result = await client.create(sanityItem);
      console.log(`Uploaded Successfully: ${result._id}`);
      console.log("----------------------------------------------------------")
      console.log("\n\n")
    }

    console.log('Data Import Completed Successfully !');
  } catch (error) {
    console.error('Error Importing Data : ', error);
  }
}

importData();
```

### 2. Replace with your credentials:

- **projectId**: Your Sanity project ID.
- **dataset**: Your Sanity dataset name.
- **token**: Your Sanity token (if required).

### 3. Run the Script:

Once you have created the `import-data.mjs` file and replaced the credentials, run the script using Node.js:

```
node importData.js
```

This will fetch the data from the API and import it into your Sanity project.

---