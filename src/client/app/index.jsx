import React,{ Component } from 'react';
import DocumentEditor from '../../components/DocumentEditor';
import { render } from 'react-dom';
import '../../index.css'


class App extends Component {
  render () {
    return(
      <div className="App">
       <div>
        <DocumentEditor/>
        </div>
         </div>) 
    }
}

render(<App/>, document.getElementById('app'));