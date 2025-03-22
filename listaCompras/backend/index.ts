import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Lista from "./models/lista";

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

const PORT = 3000;
const MONGODB_URI = "mongodb://localhost:27017/shopping-list";

mongoose.connect(MONGODB_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log("Erro ao conectar:", err))

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.post("/item", async (req, res) => {
    const { nome, preco } = req.body;
    try {
        const novoItem = new Lista({ nome, preco });
        await novoItem.save();
        res.status(201).json(novoItem);
    } catch(error) {
        res.status(400).json({ error: "Erro ao criar"});
    }
})

app.get("/item", async (_, res) => {
    try {
        const itens = await Lista.find();
        res.json(itens);
    } catch(error) {
        res.status(500).json({ error: "Erro ao buscar"});
    }
})

app.put("/item/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    try {
        const itemAtualizado = await Lista.findByIdAndUpdate(id, {nome, preco}, {new: true});
        res.json(itemAtualizado);
    } catch(error) {
        res.status(400).json({ error: "Erro ao atualizar" });
    }
})

app.delete("/item/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Lista.findByIdAndDelete(id);
        res.status(204).send();
    } catch(error) {
        res.status(500).json({ error: "Erro ao deletar" });
    }
})