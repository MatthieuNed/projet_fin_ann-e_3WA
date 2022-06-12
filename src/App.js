import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './search';
import Announcer from './announcer';
import './App.css';
import posts from './posts';
import Header from './header';
import Navbar from './navbar';
import Comment from './comment';
import './comment.css';
import Webcam from './webcam';
import Panopticon from './Panopticon';
import 'bulma/css/bulma.min.css';


const filterPosts = (posts, query) => {

    if (!query) {
        return posts.filter(post=>post.level<2);
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query.toLowerCase()) || post.level === query || post.id === query
        
    });
};

const App = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return (  

        <Router>
            <div id='scroll'/>
            <Switch>
                <Route exact path="/">                
                    <Navbar/>
    <br/>
    <br/>
<div className="App" id ="testlist">
    <h1 id ="title">Centre d'aide WEBRTC - 3WA</h1>
    <br/>
                    <Header/> 
    <br/>
                    <Announcer
        message={`${filteredPosts.length} posts`}
    />
    <div class='block'>
                    <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
    />

    <br/>
    
    <div id='listPost'>
    <ul>
        <div class="block"></div>
        <div class="box">
            {filteredPosts.map((post) => (
                <li id='listMargin'>
                    <a target='blank' href={post.url}>{post.name}{post.tag}</a> 
                    <hr class='dashed'/>   
                </li>
            ))}
        </div>
    </ul>
    
    </div>
    
    </div>
</div>
<footer/>

                </Route>
                <Route exact path="/comment">
                    <Comment/>
                </Route>
                <Route exact path="/webcam">
                  <Webcam/>
                </Route>
                <Route exact path="/Panopticon">
                    <Panopticon/>
                </Route>
                <Route exact path="/App">
                    <App/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
