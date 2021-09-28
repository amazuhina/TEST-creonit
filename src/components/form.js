import React, {useState} from 'react'
import styled from 'styled-components'


const FormStl = styled.div`

`

const ContainerStl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 600px;
`

const ItemStl = styled.div`

`

const InputStl = styled.input`
  padding: 10px 5px;
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid #ccc;
  outline: none;  
`

const ButtonStl = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  text-transform: uppercase;
  padding: 10px;
  width: 200px;
  margin: 15px auto;

`

const ErrorMsgStl = styled.div`
  color: red;
  font-size: 12px;
  text-align: left;
  margin-top: 5px;
`

const LabelStl = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
`



export const Form = ({}) => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [msg, setMsg] = useState('')


    const [nameError, setNameError] = useState('')
    const [addressError, setAddressError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [mailError, setMailError] = useState('')


    const PostMessage = () => {
        const data = {
            name: name,
            address: address,
            phone: phone,
            email: mail,
            comment: msg
        }

        const options = {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data),
        }

        const url = 'https://vue-study.skillbox.cc/api/orders'

        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                if (res.error.request === undefined) {
                    setNameError('')
                    setAddressError('')
                    setMailError('')
                    setPhoneError('')
                    return
                }
                setNameError(res.error.request.name)
                setAddressError(res.error.request.address)
                setMailError(res.error.request.email)
                setPhoneError(res.error.request.phone)
            })
            .catch(errorMessage => {
                console.log(errorMessage.error.request)
            })
    }

    const onSend = (e) => {
        e.preventDefault()
        PostMessage()
    }

    return (

        <FormStl>
            <h1>Первое тестовое задание</h1>
            <form>
                <ContainerStl>
                    <h3>Форма заказа</h3>
                    <ItemStl>
                        <LabelStl> Представьтесь
                            <InputStl value={name} onChange={e => setName(e.target.value)} type="text"/>
                        </LabelStl>
                        {
                            nameError ? <ErrorMsgStl>Ошибка</ErrorMsgStl> : ''
                        }
                    </ItemStl>
                    <ItemStl>
                        <LabelStl> Адрес доставки
                            <InputStl value={address} onChange={e => setAddress(e.target.value)} type="text"/>
                        </LabelStl>
                        {
                            addressError ? <ErrorMsgStl>Ошибка</ErrorMsgStl> : null
                        }
                    </ItemStl>
                    <ItemStl>
                        <LabelStl> Телефон
                            <InputStl value={phone} onChange={e => setPhone(e.target.value)} type="text"/>
                        </LabelStl>
                        {
                            phoneError ? <ErrorMsgStl>Ошибка</ErrorMsgStl> : null
                        }
                    </ItemStl>
                    <ItemStl>
                        <LabelStl> Эл. почта
                            <InputStl value={mail} onChange={e => setMail(e.target.value)} type="text"/>
                        </LabelStl>
                        {
                            mailError ? <ErrorMsgStl>Ошибка</ErrorMsgStl> : null
                        }
                    </ItemStl>
                    <ItemStl>
                        <LabelStl> Комментарий
                            <InputStl value={msg} onChange={e => setMsg(e.target.value)} type="textarea"/>
                        </LabelStl>
                    </ItemStl>
                    <ButtonStl
                        onClick={(e) => onSend(e)}
                    >
                        Отправить
                    </ButtonStl>
                </ContainerStl>
            </form>
        </FormStl>
    )
}