import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/header";
import Dashboard from "./views/Dashboard";
import Project from "./views/Project";
import Team from "./views/Team";
import Profile from "./views/Profile";
import Task from "./views/Task";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <main className="main">
                        <section className="main-section portfolio section-bg">
                            <Route exact path="/" render={() => <Dashboard/>} />
                            <Route path="/inbox" render={() => <Task/>} />
                            <Route path="/outbox" render={() => <Task/>} />
                            <Route path="/projects" render={() => <Project/>} />
                            <Route path="/teams" render={() => <Team/>} />
                            <Route path="/profile" render={() => <Profile/>} />
                        </section>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
