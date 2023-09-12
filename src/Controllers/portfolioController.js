exports.create = async (req, res) => {
    res.status(200).json({status: "success", data: "Create Protfolio API"})
    // res.send("Create Protfolio API");
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({status: "success", data: "Read Protfolio API"})
    // res.send("Read Protfolio API");
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({status: "success", data: "Delete Message API"})
    // res.send("Delete Protfolio API");
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({status: "success", data: "Update Protfolio API"})
    // res.send("Update Protfolio API");
  };