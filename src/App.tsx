
import Container from '@mui/material/Container';
import { SampleForm, SampleFormType } from './SampleForm';

function App() {
  const defaultValues: SampleFormType = {
    age: 1,
    iceCreamType: "",
    todaysDate: new Date(),
    volume: 3,
    days: [],
    todaysDateAndTime: new Date(),
    example: "",
    exampleRequired: "",
  }

  return (
    <Container className="App">
      <h1>MuyForm</h1>

      <SampleForm defaultValues={defaultValues} />

    </Container>
  )
}

export default App
