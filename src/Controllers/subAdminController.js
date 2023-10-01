exports.create = async (req, res) => {
    res.status(200).json({status: "success", data: "Create subAdmin API"})
    res.send("Create Message API");
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({status: "success", data: "Read subAdmin API"})
    res.send("Read Message API");
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({status: "success", data: "Delete subAdmin API"})
    res.send("Delete Message API");
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({status: "success", data: "Update subAdmin API"})
    res.send("Update Message API");
  };