
const express=require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongooese = require("mongoose");


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const ProductModel = new mongooese.model(
  "Product",
  new mongooese.Schema({
    name: String,
    Title: String,
    Price: Number
  })
);

//PRODUCT CRUD

app.get("/products", async (req, res) => {
    const products = await ProductModel.find();
    res.status(200).send(products);
  });
  
  
  //GET PRODUCT BY ID
  app.get("/api/products/:id", async (req, res) => {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    res.status(200).send(product);
  });
  
  //GET POST PRODUCT
  
  app.post("/api/products", async(req,res)=>{
      const newProduct = new ProductModel({
        name:req.body.name,
        Title:req.body.Title,
        Price:req.body.Price
      })
      await newProduct.save()
      res.status(200).send(`${newProduct.name} posted succesfully`)
  })
  
  
  //GET DELETE PRODUCT
  
  app.delete("/api/products/:id", (req,res)=>{
  
      const id=req.params.id
      const productDeleted=ProductModel.findByIdAndDelete(id).then(()=>{
          res.status(200).send(`${productDeleted.name} deleted succesfully`)
      })
      
  })
  
  app.put("/api/products/:id", async (req,res)=>{
  
  const id=req.params.id
  const updated=await ProductModel.findByIdAndUpdate(id,{
      name:req.body.name,
      Title:req.body.Title,
      Price:req.body.Price 
  })
  
  res.status(200).send(`${newProduct.name} updated succesfully`)
  
  
  })
  
  
  
  const DB_KEY = process.env.DB_KEY;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  
  mongooese.connect(DB_KEY.replace("<password>", DB_PASSWORD)).then(() => {
    console.log("MONGO DB Connected");
  });
  
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });