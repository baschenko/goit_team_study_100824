import {
  Section,
  Container,
  Header,
  Text,
  Form,
  Filter,
  TodoList,
} from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/selectors';

export const App = () => {
  const todos = useSelector(selectTodos);
  // console.log(todos, 'App');

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {!todos.length ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ) : (
            <>
              <Filter />
              <TodoList />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};
