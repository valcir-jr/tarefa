import mongoose, { Schema, Document } from "mongoose";

interface IDiscos extends Document {
  titulo: string,
  artista: string,
  ano: number,
  genero: string,
  formato: string,
  preco: string
}

const discos: Schema = new mongoose.Schema({
  titulo:  { type: String, required: true },
  artista: { type: String, required: true },
  ano:     { type: Number, required: true },
  genero:  { type: String, required: true },
  formato: { type: String, required: true },
  preco:   { type: Number, required: true }
})

const Discos = mongoose.model<IDiscos>("dados", discos);
export default Discos;