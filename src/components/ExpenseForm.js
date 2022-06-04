import { useReducer} from "react";
import { useDispatch} from "react-redux";
import { addExpense } from "../redux/actions/actions";
import Input from "./Input";
import styled from 'styled-components'

const Form = styled.form`
    box-sizing: border-box;
    width: 360px;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px black;
    >p{
        text-align: left;
        color: #93291E;
        font-size: 14px;
    }
    `
const Button = styled.button`
    width: 300px;
    background-color: #16222A;
    border: none;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 10px;
    &:disabled{
        cursor: not-allowed;
        opacity: 0.7;
    }
    `
const initState = {
    title: '',
    price: '',
    date: '',
    titleIsValid: true,
    priceIsValid: true,
    dateIsValid: true
}

const date_regex = /^\d{2}[./-]\d{2}[./-]\d{4}$/


const formReducer = (prevState, action) => {
    switch (action.type) {
        case 'TITLE':
            return {
                ...prevState,
                title: action.title,
                titleIsValid: /^[a-zA-Z]+$/.test(action.title)
            }
        case 'PRICE':
            return {
                ...prevState,
                price: action.price,
                priceIsValid: /^[0-9]+$/.test(action.price)
            }
        case 'DATE':
            return {
                ...prevState,
                date: action.date,
                dateIsValid: date_regex.test(action.date)
            }
        case 'CLEAR':
            return initState
        default:
            return prevState
    }
}

const ExpenseForm = () => {
    const dispatch = useDispatch()
    const [state, dispatchForm] = useReducer(formReducer, initState)

    const titleChangeHandler = (event) => {
        dispatchForm({ type: 'TITLE', title: event.target.value })
    }

    const priceChangeHandler = (event) => {
        dispatchForm({ type: 'PRICE', price: event.target.value })
    }

    const dateChangeHandler = (event) => {
        dispatchForm({ type: 'DATE', date: event.target.value })
    }

    let formIsValid = /^[a-zA-Z]+$/.test(state.title) && /^[0-9]+$/.test(state.price) && date_regex.test(state.date)

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(addExpense(state))
        dispatchForm({ type: 'CLEAR' })
    }

    return (
        <Form onSubmit={submitHandler}>
            <Input
                type='text'
                value={state.title}
                name='title'
                label='Title'
                placeholder='Title'
                onChange={titleChangeHandler}
            />
            {!state.titleIsValid && <p>Warn: Write only letters</p>}
            <Input
                type='text'
                value={state.price}
                name='price'
                label='Price'
                placeholder='Price'
                onChange={priceChangeHandler}
            />
            {!state.priceIsValid && <p>Warn: Write only numbers</p>}
            <Input
                type='text'
                value={state.date}
                name='date'
                label='Date'
                placeholder='Date'
                onChange={dateChangeHandler}
            />
            {!state.dateIsValid && <p>Warn: Write true format(dd.mm.yyyy)</p>}
            <Button disabled={!formIsValid}>Add</Button>
        </Form>
    )
}

export default ExpenseForm