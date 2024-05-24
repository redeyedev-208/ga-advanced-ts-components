import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
import Container from './components/Container.tsx';
import Form from './components/Form.tsx';

function App() {
  function handleSave(data: unknown) {
    // now we address not knowing what the data will be in the form
    // we do know the shape of the data in this component
    // we need to extract and convince Typescript of the type
    // so we can then use the as to do so
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }
  return (
    <main>
      <Form onSave={handleSave}>
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
