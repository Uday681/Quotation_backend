import Product from "../model/ProductModel.js";

export const createProduct = async (req, res) => {
          try {
                    const newProduct = new Product(req.body);
                    await newProduct.save();
                    res.status(201).json({
                              message: "Product created successfully",
                              product: newProduct
                    });
          } catch (error) {
                    res.status(400).json({
                              message: error.message  
                    });
          }
};

export const getAllProduct = async (req, res) => {
          try {
                    const products = await Product.find();
                    res.status(200).json({
                              message: "All Product data",
                              product: products
                    });
          } catch (error) {
                    res.status(400).json({
                              message: error.message
                    });
          }
}

export const updateProduct = async (req, res) => {
          try{
                    const id = req.params.id;
                    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
                    if(!updatedProduct){
                              res.status(404).json({
                                        message: "Product not found"
                              });
                    }else{
                              res.status(200).json(updatedProduct);
                    }
          }
          catch(error){
                    res.status(400).json({
                              message: error.message
                    });
          }
}

export const deleteProduct = async (req, res) => {
          try{
                    const id = req.params.id;
                    const deletedProduct = await Product.findByIdAndDelete(id);
                    if(!deletedProduct){
                              res.status(404).json({
                                        message: "Product not found"
                              });
                    }else{
                              res.status(200).json({
                                        message: "Product deleted successfully"
                              });
                    }
          }
          catch(error){
                    res.status(400).json({
                              message: error.message
                    });
          }
}




export const searchProduct = async (req, res) => {
          try {
            const { query } = req.query;

            // Ensure query is a string
            const searchQuery = String(query);

            // Perform a case-insensitive search in `name` and `description`
            const results = await Product.find({
              $or: [
                { name: { $regex: searchQuery, $options: 'i' } },
                { description: { $regex: searchQuery, $options: 'i' } },
          //       { cost: { $regex: query, $options: 'i' } },
          //       { discount: { $regex: query, $options: 'i' } },
              ],
            });

            res.json(results);
          } catch (error) {
                    console.log(error)
          //   res.status(500).json({ error: error.message }); // Ensure 'res' is defined in this context
          }
}
