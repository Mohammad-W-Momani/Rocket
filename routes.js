const express = require('express');
const { register, login, getUsers , addTrip, allTrip ,putTrip,deleteTrip} = require('./controller');

const middleware = require('./middlewares');

const authRouter = express.Router();

authRouter.get('/', async (req, res) => {
  res.json(await getUsers());
});

authRouter.get('/protected', middleware, (req, res) => {
  res.json('all Information');
});

authRouter.post('/register', async (req, res) => {
  try {
    res.json(await register(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    res.json(await login(req.body));
  } catch (err) {
    throw err;
  }
});
 
authRouter.post('/add',async(req,res) => {
    try {
     const email = req.body.owner
     const place= req.body.place
     const numOfPeople= req.body.numOfPeople
     const price= req.body.price
        res.json(await addTrip(email,place,numOfPeople,price));
      } catch (err) {
        throw err;
      }
})        
authRouter.get('/all',async(req,res) => {
    try {
        res.json(await allTrip(req.body));
      } catch (err) {
        throw err;
      }
})
authRouter.put("/put",async (req,res)=>{
    try {
    //  const id = req.params.id
     const place= req.body.place
     const numOfPeople= req.body.numOfPeople
     const price= req.body.price
        res.json(await putTrip(place,numOfPeople,price));
      } catch (err) {
        throw err;
      }
})
authRouter.delete("/delete", async(req, res) => {
  try {
    res.json(await deleteTrip(req.body));
  } catch (err) {
    throw err;
  }
  });
module.exports =authRouter
