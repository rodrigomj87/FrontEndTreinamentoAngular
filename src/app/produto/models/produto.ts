export interface Produto {
  id: string,
  nome: string,
  descricao: string,
  imagem: string,
  imagemUpload: string;
  valor: number,
  dataCadastro: string,
  ativo: true,
  fornecedorId: string,
  nomeFornecedor: string,
  quantidade: number,
  subTotal: number
}

export interface Fornecedor{
  id: string,
  nome: string,
}

export interface ItemPedido{
  id: number,
  pedidoId: number,
  produtoId: string,
  quantidade: number,
  valor: number
}