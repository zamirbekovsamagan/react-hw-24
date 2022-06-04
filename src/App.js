import ExpenseItem from "./components/ExpenseItem";
import ExpenseForm from "./components/ExpenseForm";
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #485563;
  > h1{
    font-weight: lighter;
    color: white;
  }
  `

function App() {

  return (
    <Container>
      <h1>Redux Practice</h1>
      <ExpenseForm/>
      <ExpenseItem />
    </Container>
  );
}

export default App;
