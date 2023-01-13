//jshint esversion:6

const generateSolarData = require("./real-simulated.js");
//import { generateSolarData } from "./real-simulated";
const express = require("express");
//import express from "express";

const app = express();


//import admin from "firebase-admin"
var admin = require("firebase-admin");

//import serviceAccount from "./config/serviceAccountKey.json"
var serviceAccount = require("./config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();




// db.collection('users').doc('johndoe').set(data)
//   .then(() => {
//     console.log('Data written successfully');
//   })
//   .catch((error) => {
//     console.error('Error writing data: ', error);
//   });



app.route("/all")

.get(function(req, res){
  console.log('get is working');
  const energyRef = db.collection('produced-energy');

energyRef.get()
  .then(snapshot => {
    let energy_data = [];
    snapshot.forEach(doc => {
      energy_data.push(doc.data());
    });
    res.json(energy_data);
  })
  .catch(err => {
    console.log('Error getting documents', err);
    res.status(500).send({ message: 'Error getting documents', error: err });
  });

})

.post( async (req, res) => {
  
  for(let i = 0; i<10; i++){
    const randomNumID = Math.floor(Math.random() * 1000000000);
    const solarData =  generateSolarData();
    
    try {
      await db.collection('produced-energy').doc(`${randomNumID}`).set(solarData);
      res.status(200).send({ message: 'Data written successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Error writing data', error });
    }
  }

 
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

/*
////////////////////////////////Requests Targetting A Specific Article////////////////////////

app.route("/articles/:articleTitle")

.get(function(req, res){

  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if (foundArticle) {
      res.send(foundArticle);
    } else {
      res.send("No articles matching that title was found.");
    }
  });
})
 */