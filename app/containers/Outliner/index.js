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
import Node from '../../components/outline/Node';
import CommandInput from '../CommandInput/index';

export class Outliner extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const outlineRoot = this.props.Outliner.outline;

    return (
      <div>
        <Helmet
          title="Outliner"
          meta={[
            { name: 'description', content: 'Description of Outliner' },
          ]}
        />
        Outline
        <Node {...outlineRoot} />
        <CommandInput />
      </div>
    );
  }
}

Outliner.propTypes = {
  Outliner: {
    outline: PropTypes.object,
  },
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
