import mongoose, { Schema } from "mongoose";

const animal: Schema = new mongoose.Schema({
  nome:    { type: String, required: true },
  especie: { type: String, required: true },
  idade:   { type: Number, required: true },
  tutor:   { type: String, required: true },
  contato: { type: String }
})

const Animal = mongoose.model("animais", animal);
export default Animal;