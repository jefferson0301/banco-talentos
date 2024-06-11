import {db} from "../connect.js"

export const getPoliciais = (req,res) => {
    const q = "SELECT policial.*, talento.talento, talento.descricao_talento,talento.id AS id_talento FROM policial LEFT JOIN talento ON policial.id = talento.policial_id"

    db.query(q, (err,data) => {
        if(err) res.status(500).send(err)
        
        return res.status(200).json(data)
    })
}

export const getQueryPoliciais = (req,res) => {
   
    const formado = req.params.formado
   
    const talento = req.params.talento

   const q = 
   `SELECT policial.*,talento.talento,talento.descricao_talento,talento.id AS id_talento
   FROM policial
   LEFT JOIN talento ON policial.id = talento.policial_id 
   WHERE policial.formado ="${formado}" AND talento.talento = "${talento}" `

    

    db.query(q, (err,data) => {
        if(err) res.status(500).send(err)
        
        return res.status(200).json(data)
    })
}

export const getQueryPoliciaisTalento = (req,res) => {
    const talento = req.params.talento

    const q = 
        `SELECT policial.*,talento.talento,talento.descricao_talento,talento.id AS id_talento
        FROM policial
        LEFT JOIN talento ON policial.id = talento.policial_id 
        WHERE talento.talento ="${talento}"`

    db.query(q, (err,data) => {
        if(err) res.status(500).send(err)
        
        return res.status(200).json(data)
    })
}

export const getQueryPoliciaisFormado = (req,res) => {
    const formado = req.params.formado

    const q = 
        `SELECT policial.*,talento.talento,talento.descricao_talento,talento.id AS id_talento
        FROM policial
        LEFT JOIN talento ON policial.id = talento.policial_id 
        WHERE policial.formado ="${formado}"`

    db.query(q, (err,data) => {
        if(err) res.status(500).send(err)
        
        return res.status(200).json(data)
    })
}

export const addPolicial = (req, res) => {
    const matricula =  req.body.matricula
    const qverify = `SELECT * FROM policial WHERE matricula = ${matricula}`
    db.query(qverify, (err,data) => {
        if(err) res.status(500).send(err)
        
        console.log(data)
        if(data.length === 0){
            const q = "INSERT INTO policial(`nome`, `numeral`, `graduacao`, `telefone`, `formado`, `batalhao`,`matricula`) VALUES(?)"
   
            const values = [
                req.body.nome,
                req.body.numeral,
                req.body.graduacao,
                req.body.telefone,
                req.body.formado,
                req.body.batalhao,
                req.body.matricula,
            ]

            db.query(q, [values], (err) => {
                if(err) res.status(500).json(err)

                res.status(200).send("Usuário adicionado com sucesso")
            })
        }else{
            return res.status(401).send("Esse usuário já esta incluido no sistema")
        }
    })
    
}


export const deletePolicial = (req,res) => {
    const q1 = "DELETE  FROM talento WHERE `policial_id` = ?"
    const q2 = "DELETE  FROM policial WHERE `id` = ?"

    db.query(q1, [req.params.id], (err) => {
        if(err) return res.status(400).send(err)
        
            db.query(q2, [req.params.id], (err) => {
                if(err) return res.status(400).send(err)
                res.status(200).send("Usuário removido com sucesso")
            })
        
        
    } )
}

export const editPolicial = (req, res) => {
    const id = req.params.id
    const q = "UPDATE policial SET `nome` = ?, `numeral` = ?, `graduacao` = ?, `telefone` = ?, `formado` = ?, `batalhao`= ?, `matricula`= ? WHERE `id` = "+id

    const values = [
        req.body.nome,
        req.body.numeral,
        req.body.graduacao,
        req.body.telefone,
        req.body.formado,
        req.body.batalhao,
        req.body.matricula,
    ]

    db.query(q, [...values, req.params.id], (err, data) => {
        if(err) res.status(500).send(err)
        
        return res.status(200).send("Usuário atualizado com sucesso")
    } )
}

