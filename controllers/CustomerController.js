import Customer from "../model/CustomerModel.js"; // Adjust the import to your Customer model

export const createCustomer = async (req, res) => {
          try {
                    const newCustomer = new Customer(req.body);
                    await newCustomer.save();
                    res.status(201).json({
                              message: "Customer created successfully",
                              customer: newCustomer
                    });
          } catch (error) {
                    res.status(400).json({
                              message: error.message
                    });
          }
};

export const getAllCustomers = async (req, res) => {
          try {
                    const customers = await Customer.find();
                    res.status(200).json({
                              message: "All Customer data",
                              customers: customers
                    });
          } catch (error) {
                    res.status(400).json({
                              message: error.message
                    });
          }
}

export const updateCustomer = async (req, res) => {
          try {
                    const id = req.params.id;
                    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, { new: true });
                    if (!updatedCustomer) {
                              res.status(404).json({
                                        message: "Customer not found"
                              });
                    } else {
                              res.status(200).json(updatedCustomer);
                    }
          } catch (error) {
                    res.status(400).json({
                              message: error.message
                    });
          }
}

export const deleteCustomer = async (req, res) => {
          try {
                    const id = req.params.id;
                    const deletedCustomer = await Customer.findByIdAndDelete(id);
                    if (!deletedCustomer) {
                              res.status(404).json({
                                        message: "Customer not found"
                              });
                    } else {
                              res.status(200).json({
                                        message: "Customer deleted successfully"
                              });
                    }
          } catch (error) {
                    res.status(400).json({
                              message: error.message
                    });
          }
}




















