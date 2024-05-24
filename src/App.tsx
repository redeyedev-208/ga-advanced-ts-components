import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
import Container from './components/Container.tsx';
import Form, { type FormHandle } from './components/Form.tsx';
import { useRef } from 'react';

function App() {
  // we now need to create a ref to handle our custom component
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    // this is not clear that this will be connected to an object
    // it is initially null and we need to give Typescript more info
    // so when we enter information, then click the save button
    // once it is saved the form will clear due to the type of FormHandle which is imported
    customForm.current?.clear();
  }
  return (
    <main>
      <Form
        onSave={handleSave}
        ref={customForm}
      >
        <Input
          id='name'
          label='Your name'
          type='text'
        />
        <Input
          id='age'
          label='Your age'
          type='number'
        />
        <Input
          label='poly input'
          id='test'
        />
        <p>
          <Button>Save Button</Button>
        </p>
        <p>
          <Button
            href='https://www.lacolombe.com/'
            target='_blank'
          >
            {' '}
            My Favorite Coffee Roaster
          </Button>
        </p>
        <Container
          as={Button}
          onClick={() => {}}
          type='button'
        >
          Polymophic Click Me Button
        </Container>
      </Form>
    </main>
  );
}

export default App;
