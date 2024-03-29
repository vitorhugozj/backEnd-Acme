/*******************************************************************************************************************
 *  Objetivo: Criar um arquivo responsável por realizar validações, consistencias e regra de negócio para os filmes
 * Data: 30/01/2024
 * Autor: Vitor Hugo N. Nascimento
 * Versão: 1.0
 * *****************************************************************************************************************/


const filmesDAO = require('../Model/DAO/filme.js');

// Função para inserir um novo filme
const setNovoFilme = async function(){
    
}

// Função para atualizar um filme existente
const setAtualizarFilme = async function(){

}

// Função para excluir um filme ja existente
const setExcluirFilme = async function(){

}

//Função para retornar todos os filmes do banco de dados
const getListarFilmes = async function(){

    let filmesJSON = {};
    let dadosFilmes = await filmesDAO.selectAllFilmes();

    if(dadosFilmes){
        filmesJSON.filmes = dadosFilmes;
        filmesJSON.quantidade = dadosFilmes.lenght;
        filmesJSON.status_code = 200;
        return filmesJSON;
    }else {
        return false
        
    }
}

// Função para retorna filtro de um filme pelo ID
const getBuscarFilmes = async function(){

}


module.exports = {
    setNovoFilme,
    setAtualizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilmes
}