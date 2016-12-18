import React, {Component} from 'react';
import Header from '../../containers/Header';
import FilterStories from '../../containers/FilterStories';
import StoryList from '../../containers/StoryList';
import './_app.css';

class App extends Component {
    render() {
        return (<div>
        		<Header />
        		<div className="body">
					<FilterStories />
					<StoryList />
        		</div>
        		</div>);
    }
};

export default App;
