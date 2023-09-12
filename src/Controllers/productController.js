exports.create = async (req, res) => {
    res.status(200).json({status: "success", data: "Create Product API"})
    res.send("Create Product API");
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({status: "success", data: "Read Product API"})
    // res.send("Read Product API");
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({status: "success", data: "Delete Product API"})
    // res.send("Delete Product API");
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({status: "success", data: "Update Product API"})
    // res.send("Update Product API");
  };