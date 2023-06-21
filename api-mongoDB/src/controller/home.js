const homeModels = require('../models/home')
const database = require('../config/database')
const { ObjectId } = require('mongodb')

// read data
const readData = async(req, res) => {
    try {
        const collection = await database()
        const {name} = req.query 
        let findResult = []
        if (!name ) {
            findResult = await collection.find({}).toArray();
        } else {findResult = await collection.find({ name: { $regex: name, $options: 'i' }}).toArray();}
            res.json({
                message: 'get all produk',
                findResult
             })  
    } catch (error) {
        res.json({
            message: 'database Error',
            serverMessage: error,
        })
    }
}
// get data 1
const getDataOne = async(req, res) => {
    try {
        const collection = await database()
        const {id} = req.params;
        const findResult = await collection.find({_id: new ObjectId(id)}).toArray();
            res.json({
                message: 'get data produk',
                findResult: findResult[0]
             })  
    } catch (error) {
        res.json({
            message: 'database Error',
            serverMessage: error,
        })
    }
}
// create data 
const createData = async(req, res) => {
    try {
        const collection = await database()
        const {body} = req;
        await collection.insertOne({ name: body.name, price: body.price, stock: body.stock})
            res.json({
                message: 'create produk',
                
             })  
    } catch (error) {
        res.json({
            message: 'database Error',
            serverMessage: error,
        })
    }
}
// delete
const deleteData = async(req, res) => {
    try {
        const collection = await database()
        const {id} = req.params;
        await collection.deleteOne({ _id: new ObjectId(id) } )
            res.json({
                message: 'delete produk',
                
             })  
    } catch (error) {
        res.json({
            message: 'database Error',
            serverMessage: error,
        })
    }
}
// update
const updateData = async(req, res) => {
    try {
        const collection = await database()
        const {id} = req.params;
        const {body} = req;
        await collection.updateOne({ _id: new ObjectId(id) }, {$set:{ name: body.name, price: body.price, stock: body.stock} })
            res.json({
                message: 'update produk',
                
             })  
    } catch (error) {
        console.log(error)
        res.json({
            message: 'database Error',
            serverMessage: error,
        })
    }
}



module.exports = {
    readData,
    createData,
    deleteData,
    updateData,
    getDataOne
}