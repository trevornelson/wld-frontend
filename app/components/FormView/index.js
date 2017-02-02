/**
*
* FormView
*
*/

import React from 'react';

import FormWrapper from './FormWrapper';


class FormView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FormWrapper>
      	{ this.props.children }
      </FormWrapper>
    );
  }
}

FormView.propTypes = {

};

export default FormView;
