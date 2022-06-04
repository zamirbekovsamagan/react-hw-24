const initState = {
    expenses: [{ title: 'text', price: 19, date: '2022-12-23', id: 21312434123 }]
}
export const expenseReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    {
                        title: action.title,
                        price: action.price,
                        date: action.date,
                        id: Math.random().toString()
                    }
                ]
            }
        case 'DELETE':
            return{
                ...state,
                expenses:state.expenses.filter(expense=> expense.id !== action.id),
            }
        default:
            return state
    }
}