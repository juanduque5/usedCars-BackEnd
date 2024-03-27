const handleCars = (req, res, db) => {
  const cars = req.body; // Obtener el arreglo de objetos desde el cuerpo de la solicitud

  //Verificar que se haya enviado un arreglo válido
  if (!Array.isArray(cars)) {
    return res.status(400).json('Invalid request body. Expected an array of cars.');
  }

  const newCars = cars.map(car => {
    const { make, year, color, price, mileage, description, image } = car;

   
    return {
      make: make,
      year: year,
      color: color,
      price: price,
      mileage: mileage,
      description: description,
      image: image
    };
  });
   
  // Insertar los nuevos registros en la base de datos
  db('cars')
    .insert(newCars)
    .then(() => {
      res.json('Created successfully');
      console.log('Created successfully');
    })
    .catch(err => {
      console.log('Error creating cars:', err);
      res.status(400).json('Unable to create cars');
    });
};

module.exports = {
  handleCars: handleCars
};

// JSON Format
// [
//   {
//     "make": "Audi",
//     "year": "2019",
//     "color": "Red",
//     "price": "25000",
//     "mileage": "40000",   
//     "description": "A3",
//     "image": "/car-images/A-a3-red.jpg"
//   },
//   {
//     "make": "Audi",
//     "year": "2019",
//     "color": "Black",
//     "price": "28000",
//     "mileage": "30000",
//     "description": "A4",
//     "image": "/car-images/A-a4-black.jpg"
//   },  
//   {
//       "make": "Audi",
//       "year": "2019",
//       "color": "White",
//       "price": "28000",
//       "mileage": "30000",
//       "description": "A5",
//       "image": "/car-images/A-a5-white.jpg"
//     },
//     {
//       "make": "Audi",
//       "year": "2020",
//       "color": "Black",
//       "price": "28000",
//       "mileage": "30000",
//       "description": "Q3",
//       "image": "/car-images/A-q3-black.jpg"
//     },
//     {
//       "make": "Audi",
//       "year": "2021",
//       "color": "Gray",
//       "price": "28000",
//       "mileage": "30000",
//       "description": "Q5",
//       "image": "/car-images/A-q5-gray.jpg"
//     },
//     {
//       "make": "BMW",
//       "year": "2020",
//       "color": "Black",
//       "price": "28000",
//       "mileage": "30000",
//       "description": "Series3",
//       "image": "/car-images/B-series3-black.jpg"
//     },
//     {
//       "make": "BMW",
//       "year": "2021",
//       "color": "Blue",
//       "price": "54000",
//       "mileage": "23000",
//       "description": "Series3",
//       "image": "/car-images/B-series3-blue.jpg"
//     },
//     {
//       "make": "BMW",
//       "year": "2018",
//       "color": "white",
//       "price": "17000",
//       "mileage": "630000",
//       "description": "Series3",
//       "image": "/car-images/B-series3-white.jpg"
//     },
//     {
//       "make": "BMW",
//       "year": "2022",
//       "color": "Black",
//       "price": "28000",
//       "mileage": "30000",
//       "description": "X3",
//       "image": "/car-images/B-x3-black.jpg"
//     },
//     {
//       "make": "BMW",
//       "year": "2021",
//       "color": "Blue",
//       "price": "58000",
//       "mileage": "20000",
//       "description": "X6",
//       "image": "/car-images/B-x6-blue.jpg"
//     },
//      {
//       "make": "Mercedes Benz",
//       "year": "2022",
//       "color": "Gray",
//       "price": "58000",
//       "mileage": "20000",
//       "description": "amg g63",
//       "image": "/car-images/M-amg g63-gray.jpg"
//     },
//  {
//       "make": "Merdeces Benz",
//       "year": "2019",
//       "color": "Gray",
//       "price": "58000",
//       "mileage": "20000",
//       "description": "Cla 35",
//       "image": "/car-images/M-Cla35-gray.jpg"
//     },
//  {
//       "make": "Mercedes Benz",
//       "year": "2021",
//       "color": "Black",
//       "price": "58000",
//       "mileage": "20000",
//       "description": "Class E",
//       "image": "/car-images/M-classE-black.jpg"
//     },
//  {
//       "make": "Mercedes Benz",
//       "year": "2018",
//       "color": "Gray",
//       "price": "58000",
//       "mileage": "20000",
//       "description": "EG3s",
//       "image": "/car-images/M-E63s-gray.jpg"
//     },
//  {
//       "make": "Nissan",
//       "year": "2020",
//       "color": "Blue",
//       "price": "58000",
//       "mileage": "20000",
//       "description": "Altima",
//       "image": "/car-images/N-altima-blue.jpg"
//     },

//     {
//       "make": "Nissan",
//       "year": "2021",
//       "color": "Orange",
//       "price": "25000",
//       "mileage": "40000",
//       "description": "Gtr",
//       "image": "/car-images/N-gtr-orange.jpg"
//     },
//     {
//       "make": "Nissan",
//       "year": "2023",
//       "color": "Gray",
//       "price": "28000",
//       "mileage": "30000",
//       "description": "Navara",
//       "image": "/car-images/N-navara-gray.jpg"
//     },  
//     {
//         "make": "Nissan",
//         "year": "2023",
//         "color": "White",
//         "price": "28000",
//         "mileage": "30000",
//         "description": "Pathfinder",
//         "image": "/car-images/N-pathfinder-black.jpg"
//       },
//       {
//         "make": "Toyota",
//         "year": "2021",
//         "color": "Blue",
//         "price": "28000",
//         "mileage": "30000",
//         "description": "Camry",
//         "image": "/car-images/T-corolla-blue.jpg"
//       },
//       {
//         "make": "Toyota",
//         "year": "2022",
//         "color": "White",
//         "price": "28000",
//         "mileage": "30000",
//         "description": "Corolla",
//         "image": "/car-images/T-corolla-white.jpg"
//       },
//       {
//         "make": "Toyota",
//         "year": "2020",
//         "color": "White",
//         "price": "28000",
//         "mileage": "30000",
//         "description": "Rav4",
//         "image": "/car-images/T-rav4-white.jpg"
//       },
//       {
//         "make": "Toyota",
//         "year": "2021",
//         "color": "Gray",
//         "price": "54000",
//         "mileage": "23000",
//         "description": "Tacoma",
//         "image": "/car-images/T-tacoma-gray.jpg"
//       },
      
//     ]
   
