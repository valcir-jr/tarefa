import { Request, Response } from "express";
import query from "./db";

class ProdPrepController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { id, preparacao, energia, proteina, lipidio, carboidrato, fibra, colesterol,
              agsaturado, agmono, agpoli, aglinoleico, aglinolenico, agtranstotal, acucartotal,
              acucaradicao, calcio, magnesio, manganes, fosforo, ferro, sodio, sodioadicao, potassio,
              cobre, zinco, selenio, retinol, vitamina_a, tiamina, riboflavina, niacina, niacina_ne,
              piridoxina, cobalamina, folato, vitamina_d, vitamina_e, vitamina_c } = req.body;

        const r: any = await query(
            `INSERT INTO
           
            prodprep(id,preparacao,energia,proteina,lipidio, carboidrato,fibra,
            colesterol,agsaturado,agmono,agpoli,aglinoleico,aglinolenico,agtranstotal,acucartotal,
            acucaradicao,calcio,magnesio,manganes,fosforo,ferro,sodio,sodioadicao,potassio,cobre,
            zinco,selenio,retinol,vitamina_a,tiamina,riboflavina,niacina,niacina_ne,piridoxina,
            cobalamina,folato,vitamina_d,vitamina_e,vitamina_c)

            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,
                    $20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,
                    $37,$38)`,

            [id, preparacao, energia, proteina, lipidio, carboidrato, fibra, colesterol, agsaturado,
            agmono, agpoli, aglinoleico, aglinolenico, agtranstotal, acucartotal, acucaradicao,
            calcio, magnesio, manganes, fosforo, ferro, sodio, sodioadicao, potassio, cobre, zinco,
            selenio, retinol, vitamina_a, tiamina, riboflavina, niacina, niacina_ne, piridoxina,
            cobalamina, folato, vitamina_d, vitamina_e, vitamina_c]
        );
        return res.json(r);
    }

    public async list(_: Request, res: Response): Promise<Response> {
        const r: any = await query(
            `SELECT id, preparacao, energia, proteina, lipidio, carboidrato, fibra, colesterol,
            agsaturado, agmono, agpoli, aglinoleico, aglinolenico, agtranstotal, acucartotal,
            acucaradicao, calcio, magnesio, manganes, fosforo, ferro, sodio, sodioadicao, potassio,
            cobre, zinco, selenio, retinol, vitamina_a, tiamina, riboflavina, niacina, niacina_ne,
            piridoxina,cobalamina,folato,vitamina_d,vitamina_e,vitamina_c FROM produto ORDER BY id`
        );
        return res.json(r);

    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.body; // id do registro a ser excluído
        const r: any = await query(
            "DELETE FROM prodprep WHERE id = $1", [id]
        );
        return res.json(r);
    }
    public async update(req: Request, res: Response): Promise<Response> {
        const { id, preparacao, energia, proteina, lipidio, carboidrato, fibra, colesterol,
              agsaturado, agmono, agpoli, aglinoleico, aglinolenico, agtranstotal, acucartotal,
              acucaradicao, calcio, magnesio, manganes, fosforo, ferro, sodio, sodioadicao, potassio,
              cobre, zinco, selenio, retinol, vitamina_a, tiamina, riboflavina, niacina, niacina_ne,
              piridoxina, cobalamina, folato, vitamina_d, vitamina_e, vitamina_c } = req.body;

        const r: any = await query(
            `UPDATE prodprep SET
            
            preparacao=$2,
            energia=$3,
            proteina=$4,
            lipidio=$5,
            carboidrato=$6,
            fibra=$7,
            colesterol=$8,
            agsaturado=$9,
            agmono=$10,
            agpoli=$11,
            aglinoleico=$12,
            aglinolenico=$13,
            agtranstotal=$14,
            acucartotal=$15,
            acucaradicao=$16,
            calcio=$17,
            magnesio=$18,
            manganes=$19,
            fosforo=$20,
            ferro=$21,
            sodio=$22,
            sodioadicao=$23,
            potassio=$24,
            cobre=$25,
            zinco=$26,
            selenio=$27,
            retinol=$28,
            vitamina_a=$29,
            tiamina=$30,
            riboflavina=$31,
            niacina=$32,
            niacina_ne=$33,
            piridoxina=$34,
            cobalamina=$35,
            folato=$36,
            vitamina_d=$37,
            vitamina_e=$38,
            vitamina_c=$39

            WHERE id=$1`,
            
            [id, preparacao, energia, proteina, lipidio, carboidrato, fibra, colesterol, agsaturado,
            agmono, agpoli, aglinoleico, aglinolenico, agtranstotal, acucartotal, acucaradicao,
            calcio, magnesio, manganes, fosforo, ferro, sodio, sodioadicao, potassio, cobre, zinco,
            selenio, retinol, vitamina_a, tiamina, riboflavina, niacina, niacina_ne, piridoxina,
            cobalamina, folato, vitamina_d, vitamina_e, vitamina_c]
        );
        return res.json(r);
    }
}

export default new ProdPrepController();