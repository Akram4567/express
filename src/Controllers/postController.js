exports.create = async (req, res) => {
    res.status(200).json({status: "success", data: "Create post API"})
    // res.send("Create Protfolio API");
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({status: "success", data: "Read post API"})
    // res.send("Read Protfolio API");
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({status: "success", data: "Delete post API"})
    // res.send("Delete Protfolio API");
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({status: "success", data: "Update post API"})
    // res.send("Update Protfolio API");
  };