import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from 'reduxTodo/todoSlice';

export const Form = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      text: query,
    };
    // console.log(todo, 'todo add');

    dispatch(addTodo(todo));
    setQuery('');
  };
  // console.log(query, 'guery form');

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};
