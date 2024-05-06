import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filters/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search by name or number..."
      value={filter}
      onChange={handleChange}
      className={css.search}
    />
  );
};

export default SearchBox;

// import { useSelector, useDispatch } from 'react-redux';
// import { changeFilter } from '../../redux/filtersSlice';
// import css from './SearchBox.module.css';

// const SearchBox = () => {
//   const value = useSelector(state => state.filters.name);
//   const dispatch = useDispatch();

//   const handleChange = (event) => {
//     dispatch(changeFilter(event.target.value));
//   };

//   return (
//     <input
//       type="text"
//       placeholder="Search contacts..."
//       value={value}
//       onChange={handleChange}
//       className={css.search}
//     />
//   );
// };

// export default SearchBox;
