module.exports = function handleMongooseError(error, res) {
  if (error.name === "ValidationError") {
    const errors = {};
    for (let key in error.errors) {
      errors[key] = error.errors[key].message;
    }
    return res.status(400).json({ message: "Validation error", errors });
  }

  if (error.code === 11000) {
    const field = Object.keys(error.keyValue)[0];
    return res.status(400).json({ message: `${field} already exists` });
  }

  return res.status(500).json({ message: "Server error", error });
};
