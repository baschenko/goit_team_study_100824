import { Text } from 'components';
import { useDispatch } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';
import s from './Todo.module.css';
import { delTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ id, counter, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(delTodo(id));
  };
  return (
    <div className={s.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{counter}
      </Text>
      <Text>{text}</Text>
      <button onClick={handleDelete} type="button" className={s.deleteButton}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
