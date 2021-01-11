import './App.css';
import DisplayPosts from './components/DisplayPosts';
import CreatePosts from './components/CreatePosts';
import { withAuthenticator } from 'aws-amplify-react';

function App() {
  return (
    <div className="App">
     <CreatePosts />
     <DisplayPosts />
    </div>
  );
}

export default withAuthenticator(App);
