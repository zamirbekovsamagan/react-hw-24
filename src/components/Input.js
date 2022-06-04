import styled from 'styled-components'

const Div = styled.div`
width: 300px;
height: 70px;
margin-bottom: 10px;
> label{
    color: #191654;
    font-size: 20px;
}
`
const InputField = styled.input`
width: 300px;
padding: 10px;
border: 1px solid grey;
outline: none;
margin-top: 8px;
border-radius: 5px;
font-size: 17px;
`

const Input = ({ value, label, name, placeholder,type, onChange }) => {
    return (
        <Div>
            {label && <label htmlFor="input-field">{label}</label>}
            <InputField
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />

        </Div>
    )
}

export default Input;