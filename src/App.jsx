import React from 'react'
import imagemRestaurante from './assets/hashtaurante.webp'
import  Navegacao  from './navegacao'
import { ItemCardapio } from './ItemCardapio'
import './App.css'
import { pratosPrincipais,sobremesas,bebidas } from './cardapio'



export function App(){
  

  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);

  const secoesMenu = [pratosPrincipais, sobremesas, bebidas];

  return <>
      <img src={imagemRestaurante} alt="" className='capa'/>
      <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada}/>
      <div className='menu'>
       {secoesMenu[paginaSelecionada].map((item,key)=>{
        return <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} key={key}/>
       })}
      
      </div>
  </>
}

