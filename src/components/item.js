import React from 'react'
import styled from 'styled-components'


const CardStl = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 10px 20px;
  width: 220px;
  padding: 10px;
`

const ImgStl = styled.img`
  width: 200px;
  height: 200px;
`

const CardTitleStl = styled.div`
  font-size: 16px;
  font-weight: 600;
`

const PriceStl = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #777;
  margin: 10px 0;
`

const ColorStl = styled.div`
  font-size: 14px;
  font-weight: 600;
`

export const Item = ({link, title, price, colors}) => {


    return (
        <CardStl>
            <ImgStl src={link}/>
            <CardTitleStl>{title}</CardTitleStl>
            <PriceStl>{price} ₽</PriceStl>
            {colors.map(i => <ColorStl style={{color: i.code}}>{i.title}</ColorStl>)}
        </CardStl>
    )
}
