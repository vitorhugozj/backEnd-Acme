var filmesACME = require ('../Model/filmes')

const filmes = () => {
    let filmes = filmesAcme.filmes
    let filmesArray = []

    filmes.filmes.forEach((filmes1) => {
        
       let filmesInfo = {
            id: filmes1.id,
            nome: filmes1.nome,
            sinopse: filmes1.sinopse,
            duracao: filmes1.duracao,
            data_lancamento: filmes1.data_lancamento,
            data_relancamento: filmes1.data_relancamento,
            foto_capa: filmes1.foto_capa,
            valor_unitario: filmes1.valor_unitario
        }

       filmesArray.push(filmesInfo)
    });

    let filmesJSON = {filmesArray}
    return filmesJSON
}


    const filme = (id) => {
        let filmesA = filmesAcme.filmes
        let filmesArray = filmesA.filmes
        let Arraymovie = []
        let idFilmes = id
        let status = false

    
        filmesArray.forEach((filme) => {
            if (filme.id == idFilmes) {
                let filmesJSON = {
                    id: filme.id,
                    nome: filme.nome,
                    sinopse: filme.sinopse,
                    data_lancamento: filme.data_relancamento,
                    data_relancamento: filme.data_relancamento,
                    duracao: filme.duracao,
                    foto_capa: filme.foto_capa,
                    valor_unitario: filme.valor_unitario
                }

                status = true
                Arraymovie.push(filmesJSON)
            }
        })

        let filmesJSON = {filmesArray}

        if (status) {
            return filmesJSON
        } else {
            return false       
     }
}

console.log(filme(1));
console.log(filmes());

module.exports ={
    filmes,
    filme
}

