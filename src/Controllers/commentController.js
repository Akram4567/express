exports.create = async (req, res) => {
  res.status(200).json({status: "success", data: "Create Comment API"})
    // res.send("Create Comment API");
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({status: "success", data: "Read Comment API"})
    // res.send("Read Comment API");
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({status: "success", data: "Delete Comment API"})
    // res.send("Delete Comment API");
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({status: "success", data: "Update Comment API"})
    // res.send("Update Comment API");
  };