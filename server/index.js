import Express from "express";
import { criarTabelas, User } from "./db.js";
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"

const app = Express()
app.use(Express.json())
//criarTabelas()

app.post('/registro', async (req, res) => {
    const {nome, sobrenome, email, senha, dataNascimento} = req.body
    if (!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('Você deve completar todos os campos.')
        return
    }
    const userExiste = await User.findOne({where: {email: email}})
    if (userExiste){
        res.send('Usuario ja existe!')
        return
    }
    const senhaCriptografada = bcryptjs.hashSync(senha, 10)

    const teste = await User.create({nome, sobrenome, email, senha: senhaCriptografada, dataNascimento})



    res.send('Usuário criado!')
})

app.post('/login', async (req, res) => {
    const {email, senha} = req.body
    if (!email || !senha){
        res.send('Preencha todos os campos.')
        return
    }
    const userExiste = await User.findOne({where: {email: email}})
    if (!userExiste){
        res.send('Usuario não existe!')
        return
    }
    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
    if (!senhaValida){
        res.send('email ou senha invalido!')
        return
    }

         const token = jsonwebtoken.sign(
            {"nomme_completo": `${userExiste.nome} ${userExiste.sobrenome}`,
            "email": userExiste.email,
            "status": userExiste.status,
         },
         'chavecriptografiajwt',
         {expiresIn: 1000*60*5}
      )
         console.log(token)

    res.send({
      msg: "cadastro efetuado com sucesso",
      tokenJWT: token
    })
})

app.listen(8000)