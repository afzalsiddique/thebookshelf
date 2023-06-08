const Book = require("../model/Book")
const mongoose = require("mongoose");

const getAllBooks = async(req,res,next)=>{
    let books
    try{
        books = await Book.find()
    }catch (err){
        console.log(err)
    }
    if (!books){
        return res.status(404).json({message:"No products found"})
    }
    return res.status(200).json({books})
}

const getById = async (req,res,next)=>{
    const id = req.params.id
    let book
    try {
        book = await Book.findById(id)
    } catch (err) {
        consolde.log(err)
    }
    if (!book){
        return res.status(404).json({message:"No book found"})
    }
    return res.status(200).json({book})
}

const addBook = async(req,res,next)=>{
    let book
    try{
        const {name,author,description,price,available} = req.body
        book = new Book({
            name,author,description,price,available
        })
        await book.save()
    }catch (err){
        console.log(err)
    }
    if (!book){
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(201).json({book})
}
exports.getAllBooks = getAllBooks
exports.addBook = addBook
exports.getById = getById
