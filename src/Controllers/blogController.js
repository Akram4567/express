exports.create = async (req, res) => {
    res.status(200).json({status: "success", data: "Create Blog API"})
    // res.send("Create Blog API");
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({status: "success", data: "Read Blog API"})
    // res.send("Read Blog API");
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({status: "success", data: "Delete Blog API"})
    // res.send("Delete Blog API");
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({status: "success", data: "Update Blog API"})
    // res.send("Update Blog API");
  };