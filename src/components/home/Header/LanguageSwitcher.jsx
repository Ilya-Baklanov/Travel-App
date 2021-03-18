import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import styles from '@/components/home/style.scss';

import { switchLanguageAction } from '../../../redux/actions';

const LanguageSwitcher = ({switchLanguageAction, language}) => {
  return (
    <div className={styles['switcher-lang-control']}>
      <Form.Group>
        <Form.Control
          defaultValue={language}
          size="sm"
          as="select"
          onChange={(e) => {
            switchLanguageAction(e.target.value);
          }}
        >
          <option value='ru-RU'>RU</option>
          <option value='en-US'>EN</option>
          <option value='fr-FR'>FR</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

const mapDispatchToProps = {
  switchLanguageAction,
};

const mapStateToProps = state => ({
  language: state.switchLanguageReducer.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);