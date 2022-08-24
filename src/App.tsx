
import { lazy } from 'react';

import Container from '@mui/material/Container';
import type { SampleFormType } from './SampleForm';

const SampleForm = lazy(() => import('./SampleForm'));

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
    isVegan: false,
    reasons: [
      {id: "1", description: "reason 1"},
    ]
  }

  return (
    <Container className="App">

      <h1>OctoForm</h1>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>

      <h1>Demo</h1>
      <SampleForm defaultValues={defaultValues} />

    </Container>
  )
}

export default App
