export const addExpense = ({title,price,date}) => ({
    type:'ADD',
    price,
    title,
    date
})

export const deleteExpense = (id)=>({
    type:'DELETE',
    id
})