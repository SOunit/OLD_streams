import React from 'react';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Header!</h1>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={StreamList}></Route>
          <Route path='/streams/create' component={StreamCreate}></Route>
          <Route path='/streams/edit' component={StreamEdit}></Route>
          <Route path='/streams/delete' component={StreamDelete}></Route>
          <Route path='/streams/show' component={StreamShow}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
