import mongoose from "mongoose";

const listaSchema = new mongoose.Schema({
    nome: { type: String },
    preco: { type: String }
})

const Lista = mongoose.model("shoppingitems", listaSchema);
export default Lista;