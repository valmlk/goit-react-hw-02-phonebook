import css from './Filter.module.css';

export const Filter = ({ onFilterChange, filter }) => {
  return (
    <div >
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        className={css.filterInput}
      />
    </div>
  );
};