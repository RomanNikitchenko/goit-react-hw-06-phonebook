import React from 'react';
import s from './contactList.module.css';

import { connect } from 'react-redux';
import todosActions from '../redux/phonebook/todos-actions';

import PropTypes from 'prop-types';

const ContactList = ({ visibleFilter, deleteContact }) => {
  return (
    <ul>
      {visibleFilter.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <span>
              {name}: {number}
            </span>
            <button type="button" onClick={() => deleteContact(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  const { contacts, filter } = state.phonebook;

  const normalizedFilter = filter.toLowerCase();

  const visibleTodos = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return {
    visibleFilter: visibleTodos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(todosActions.deleteContact(id)),
  };
};

ContactList.propTypes = {
  visibleFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
