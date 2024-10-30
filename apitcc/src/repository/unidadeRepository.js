import con from './connection.js';

export async function inserirUnidade(unidade) {
    const comando = `
    insert into tb_unidade (endereco, hr_funcionamento, url_maps)
    values (?, ?, ?);
    `
    let info = await con.query(comando, [unidade.endereco, unidade.hr_funcionamento, unidade.url_maps])
    
    let respostas = info[0]

    return respostas.inserirId
}

export async function consultarUnidade() {
    const comando = `
        
    select unidade unidade, 
    endereco       endereco, 
    hr_funcionamento hr_funcionamento,
    url_maps        url_maps
    from tb_unidade;    
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta

}

export async function alterarUnidade(unidade, idunidade) {
    const comando = `
        update tb_unidade
        set endereco = ?, 
        hr_funcionamento = ?,
        url_maps = ?
        where unidade = ?;
    `  
    let resposta = await con.query(comando, [unidade.endereco, unidade.hr_funcionamento, unidade.url_maps, idunidade])
    let info = resposta[0]

    return info.affectedRows
}

export async function deletarUnidade(id) {
    const comando = `
    delete from tb_unidade
    where unidade = ?;
    `
    let resposta = await con.query (comando, [id])
    let info = resposta[0]

    return info.affectedRows
}