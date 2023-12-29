import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Search.styled';
import { Notify } from 'notiflix';

export const Searchbar = ({ onSubmitSearchBar, value }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.search.value.trim().toLowerCase();

    if (searchValue === '') {
      Notify.info('Enter your request, please!');

      return;
    }
    onSubmitSearchBar(searchValue);
  };
  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="button">
          <span>Search</span>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          defaultValue={value}
          placeholder="Search movies"
        />
      </SearchForm>
    </SearchBar>
  );
};
export default Searchbar;
