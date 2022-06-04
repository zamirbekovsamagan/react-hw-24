import { useSelector, useDispatch } from "react-redux"
import { deleteExpense } from '../redux/actions/actions'
import styled from 'styled-components'

const Ul = styled.ul`
    width: 600px;
    background-color: white;
    padding:20px;
    border-radius: 10px;
    margin-top: 30px;
    >li{
        width: 560px;
        display: flex;
        padding: 10px;
        border-radius: 5px;
        justify-content:space-between ;
        margin-bottom: 5px;
        &:nth-child(odd){
            background-color: #26D0CE;
        }
        &:nth-child(even){
            background-color: #3A6073;
            color: white;
        }
        > .x{
        cursor: pointer;
        }
        > div{
            width: 400px;
            display: flex;
            justify-content: space-between;
        }
        
    }

    `

const ExpenseItem = () => {

    const dispatch = useDispatch()
    const expenses = useSelector(state => state.expenses)

    const deleteHandler = (id) => {
        dispatch(deleteExpense(id))
    }
    return (
        <Ul>{expenses.map(item => {
            return <li key={item.id}>
                <div>
                    <span >{item.title}</span>
                    <span >{item.price}</span>
                    <span >{item.date}</span>
                </div>
                <span className="x" onClick={() => deleteHandler(item.id)}>❌</span>
            </li>
        })}</Ul>
    )
}

export default ExpenseItem