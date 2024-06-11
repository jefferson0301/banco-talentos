import {db} from "../connect.js"

export const addTalento = (req, res) => {
    const idPolicial = req.params.idPolicial

    const q = "SELECT * FROM policial WHERE policial.id = "+idPolicial

    db.query(q, (err,data) => {
        if(err) return res.status(500).send(err)
        
        if(data.length === 0) return res.status(400).send("Não há policial com esse id")
        
        //nesse caso há um policial para adicionar o talento
        if(0 < data.length){
            const queryAddTalento = `INSERT INTO talento(talento,descricao_talento,policial_id) VALUES (?) `
            
            const values = [
                req.body.talento,
                req.body.descricao_talento,
                req.body.policial_id,
            ]

            db.query(queryAddTalento, [values], (err,data) => {
                if(err) return res.status(500).send(err)
                
                if(data) return res.status(200).send("Usuario incluido com sucesso")
            } )
        
        }
    })
}

export const removeTalento = (req,res) => {
    const idTalento = req.params.idTalento
    const q = "DELETE FROM talento WHERE talento.id =  "+idTalento

    db.query(q, [idTalento], (err) => {
        if(err) return res.status(500).send(err)
        
        if(!err) return res.status(200).send("Talento removido com sucesso")
    })
}

export const updateTalento = (req,res) => {
    const idTalento = req.params.idTalento
    const q = "UPDATE talento SET `talento` = ?, `descricao_talento` = ? WHERE `id` = "+idTalento

    const values = [
        req.body.talento,
        req.body.descricao_talento,
        //req.body.policial_id,
    ]

    db.query(q, [...values, req.params.idTalento], (err, data) => {
        if(err) res.status(500).send(err)
        
        return res.status(200).send("Talento atualizado com sucesso")
    } )
}