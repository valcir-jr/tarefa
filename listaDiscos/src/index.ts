import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Discos from "./models/vinilcd";

const app = express();
const PORT = 3000;
const MONGODB_URI = "mongodb://localhost:27017/vinilcd-crud";

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

mongoose.connect(MONGODB_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log("Erro ao conectar:", err))

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// -----------------------------------------------------------

app.post("/cadastro", async (req, res) => {
  try {
    const novoDisco = new Discos({
      titulo:  req.body.titulo,
      artista: req.body.artista,
      ano:     req.body.ano,
      genero:  req.body.genero,
      formato: req.body.formato,
      preco:   req.body.preco
    })
    const salvarDisco = await novoDisco.save();
    res.status(201).json(salvarDisco);
  } catch(error) {
    res.status(500).json({ message: "Erro ao cadastrar", error });
  }
});

app.get("/cadastro", async (_, res) => {
  try {
    const discos = await Discos.find();
    res.json(discos);
  } catch(error) {
    res.status(500).json({ message: "Erro ao buscar a lista" });
  }
});

app.put("/cadastro/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, artista, ano, genero, formato, preco } = req.body;  
  try {
    const discoAtualizado = await Discos.findByIdAndUpdate(
      id,
      {titulo, artista, ano, genero, formato, preco},
      {new: true}
    );
    if(!discoAtualizado) {
      return res.status(400).json({ message: "Erro ao atualizar" });
    }
    res.json(discoAtualizado);
  } catch(error) {
    res.status(400).json({ message: "Erro ao atualizar" });
  }
});

app.delete("/cadastro/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cdVinilDeletado = await Discos.findByIdAndDelete(id);
    if (!cdVinilDeletado) {
      return res.status(404).json({ message: "Item não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar" });
  }
});

