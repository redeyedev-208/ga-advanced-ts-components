import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
import Container from './components/Container.tsx';
import Form from './components/Form.tsx';

function App() {
  return (
    <main>
      <Form>
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
          <Button>A Button</Button>
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
