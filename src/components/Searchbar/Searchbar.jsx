import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';

import { Component } from 'react';

import css from './search-bar.module.css';

class Searchbar extends Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.button__label}>
              <CiSearch />
            </span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
