exports.create = async (req, res) => {
    res.status(200).json({status: "success", data: "Create user API"})
    // res.send("Create Blog API");
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({status: "success", data: "Read user API"})
    // res.send("Read Blog API");
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({status: "success", data: "Delete user API"})
    // res.send("Delete Blog API");
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({status: "success", data: "Update user API"})
    // res.send("Update Blog API");
  };