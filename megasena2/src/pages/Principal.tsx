import Megasena from "../components/megasena";
import Lotofacil from "../components/lotofacil";
import { useContext } from "react";
import { Contexto } from "../context";
import "./index.css";

export default function Principal() {
 let {megasena} = useContext(Contexto);

  return (
    <>
      { !megasena ? (
        <div className="principal-carregando">
          <h3>Carregando...</h3>
        </div>
      ) : (
        <div className="principal-bloco">
          <Megasena />
          <Lotofacil />
        </div>
      )}
    </>
  );
}

