import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  onSubmit = (formValues) => {
    console.log(formValues, 'on submit');
  };

  render = () => {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          // to limit property to change, to excluding id, userId
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
