const handleInfoCars = (req, res, db) => {
  // Get all cars from database and return it to Front-end
  db("public.cars")
    .select("*")
    .then((cars) => {
      res.json(cars);
      console.log("Send successfully to Front-end");
    })
    .catch((err) => {
      console.log("Error creating cars:", err);
      res.status(400).json("Unable to send to Front-end");
    });
};

module.exports = {
  handleInfoCars: handleInfoCars,
};
