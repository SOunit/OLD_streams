import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    let list = null;
    list = this.props.streams.map(({ id, title, description }) => {
      return (
        <div className='item' key={id}>
          <i className='large middle aligned icon camera'></i>
          <div className='content'>
            {title}
            <div className='description'>{description}</div>
          </div>
        </div>
      );
    });
    return list;
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
