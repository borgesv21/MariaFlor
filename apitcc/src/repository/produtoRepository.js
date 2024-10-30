import con from './connection.js'

export async function inserirProduto(produto) {
    const comando = `
    insert into tb_produtos(nomeproduto, categoria, descricao, zeroAcucar, diet, precoKg)
	values (?, ?, ?, ?, ?, ?);
   `
   let resposta = await con.query(comando, [produto.nomeproduto, produto.categoria, produto.descricao, produto.zeroacucar, produto.diet, produto.precoKg ]);

   let info = resposta[0]
   let id = info.insertId

   return id
}

export async function consultarProduto(){
    const comando = `
    
    select id_produto, 
    nomeproduto           nomeproduto,
    categoria             categoria,
    descricao             descricao, 
    zeroacucar            zeroacucar,
    diet,                 diet,
    precoKg               precoKg
    from tb_produtos;


    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}

export async function alterarProduto(produto, idProduto) {
   const comando = `
    update tb_produtos
    set nomeproduto = ?,
        categoria = ?,
        descricao = ?,
        zeroacucar = ?,
        diet = ?,
        precoKg = ?
    where id_produto = ?;
    ` 

    let resposta = await con.query(comando, [produto.nomeproduto,produto.categoria, produto.descricao, produto.zeroacucar, produto.diet, produto.precoKg , idProduto])

    let info = resposta[0]

    return info.affectedRows

}

export async function deletarProduto(id) {
    const comando = `
      delete from tb_produtos
    where id_produto = ?;

    `
    let resposta = await con.query (comando, [id])
    let info = resposta[0]

    return info.affectedRows
}
