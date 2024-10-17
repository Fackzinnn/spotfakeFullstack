import { createServer } from 'node:http'


const servidor = createServer((request, res) => {
    console.log('qualquer coisa')
    res.write('ta funcionando')
    
    return res.end()
})

servidor.listen(8000)
