/*******************************************************************************************************************
 *  Objetivo: Criar um arquivo responsável por realizar o CRUD no Banco de Dados MySQL
 * Data: 30/01/2024
 * Autor: Vitor Hugo N. Nascimento
 * Versão: 1.0
 * *****************************************************************************************************************/

/*
    $queryRawUnsafe(sql) = Encaminha uma variável
    $queryRaw('select * from tbl_filme') = Encaminha direto o script
*/

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Função para inserir um filme no Banco de Dados
const insertFilme = async function() {

}


// Função para atualizar um filme no Banco de Dados
const updateFilme = async function() {

}

// Função para excluir um filme no Banco de Dados
const deleteFilme = async function() {

}

// Função para retornar todos os filmes do Banco de Dados
const selectAllFilmes = async function() {
    let sql = 'select * from tbl_filme'
    let rsfilmes = await prisma.$queryRawUnsafe(sql)

    if(rsfilmes.length > 0) {
        return rsfilmes
    }else {
        return false
    }
}


// Função buscar um filme no Banco de Dados filtrando pelo ID
const selectByIDFilme = async function() {

}


module.exports = {
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIDFilme
}