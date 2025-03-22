import { useState } from "react"

/*criando uma lista*/
const ListRender = () => {
    const[lista] = useState(["Mateus", "Marcos", "Lucas", "João", "Peter"])

    //lista com objetos
    const [users] = useState([
        {
           id: 1,
           name:"Jesus", 
           number: 25, 
        },
        {
            id:7,
            name: "Cristiano Ronaldo",
            number: 7,
        },
        {
            id: 10,
            name: "Neymar Jr",
            number: 10
        },
    ])

  return (
    <div>
        {/* // Lista com index de chave */}
        <ul> 
            {lista.map((item, index) => ( /*Item = valor achado o percorrer*/ 
                <li key={index}>{item}</li> /*Consigo identificar os itens*/
            ))}
        </ul>

        {/* // Lista com id de chave */}
        {users.map( (usuario) => (
            // console.log(usuario)
            <h2 key={usuario.id}> O nome é {usuario.name}, e seu número é {usuario.number}</h2>    
        ))}

    </div>
  )
}

export default ListRender