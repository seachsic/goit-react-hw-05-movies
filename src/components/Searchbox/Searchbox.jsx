import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./SearchBox.styled";
import { useState } from 'react';

export const SearchBox = ({ onSubmit }) => {

  const [inputName, setInputName] = useState('');

  const hangleNameOnChange = event => {
    setInputName(event.currentTarget.value.toLowerCase());
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (inputName.trim() === '') {
      alert('Type something in search input');
      return
    }
    onSubmit(inputName);
    setInputName('');
  }
  
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

          <SearchFormInput
            type="text"
            name="input"
            value={inputName}
            onChange={hangleNameOnChange}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
      </SearchForm>
    </SearchbarHeader>    
  );
};
