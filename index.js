import axios from 'axios';
import cors from 'cors';
import express from 'express';
import { filterDestinations } from "./helperFuncs.js"

const server = express(); // This server is deaf

server.use(cors());

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});

const destinationsDB = {
  123456: {
    destination: "Eiffel Tower",
    location: "Paris",
    photo:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  234567: {
    destination: "Louvre",
    location: "Paris",
    photo:
      "https://media.architecturaldigest.com/photos/5900cc370638dd3b70018b33/3:4/w_1547,h_2063,c_limit/Secrets%20of%20Louvre%201.jpg",
  },
  345678: {
    destination: "Big Ben",
    location: "London",
    photo:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  },
};

// CREATE



// READ

// GET /destinations
server.get('/destinations', (req, res) => {
  const city = req.query.city

  filterDestinations({ city, destinationsDB, res });
})

// GET /destinations/city/:myCity
server.get('/destinations/city/:myCity', (req, res) => {
  const city = req.params.myCity

  filterDestinations({ city, destinationsDB, res });
})

// UPDATE (OPTIONAL)

// DELETE (OPTIONAL)

