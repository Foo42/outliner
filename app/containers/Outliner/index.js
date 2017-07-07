/*
 *
 * Outliner
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectOutliner from './selectors';

export class Outliner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Outliner"
          meta={[
            { name: 'description', content: 'Description of Outliner' },
          ]}
        />
        Outline
      </div>
    );
  }
}

Outliner.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Outliner: makeSelectOutliner(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Outliner);
