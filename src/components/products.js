import React, {useState} from 'react'
import styled from 'styled-components'
import {Item} from "./item";



const ProductsStl = styled.div`

`


const ButtonStl = styled.button`
  border: none;
  border-radius: 5px;
  background-color: indianred;
  color: #fff;
  text-transform: uppercase;
  padding: 10px;
  width: 200px;
  margin: 50px auto;  
`

const ContainerStl = styled.div`
    display: flex;
  
`




export const Products = ({}) => {

    const [data, setData] = useState([])

    const getData = () => {
        fetch('https://vue-study.skillbox.cc/api/products?categoryId=3')
            .then(res => res.json())
            .then(res => {
                setData(res.items)
            })
            .catch(errorMessage => {
                console.log(errorMessage.error)
            })
            }

    return (
        <ProductsStl>
            <h1>Второе тестовое задание</h1>
            <ButtonStl
                onClick={getData}
            >
                Получить товары
            </ButtonStl>
            <ContainerStl>
                    {
                        data.map(i => <Item title={i.title} price={i.price} link={i.image.file.url} colors={i.colors}/>)
                    }

            </ContainerStl>
        </ProductsStl>
    )
}