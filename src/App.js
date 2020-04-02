import React, {Component} from 'react';
import Header from "./components/header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main className="main">
                    <section className="main-section portfolio section-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    1 of 3
                                </div>
                                <div className="col-md-4">
                                    2 of 3
                                </div>
                                <div className="col-md-4">
                                    3 of 3
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    1 of 3
                                </div>
                                <div className="col-md-4">
                                    2 of 3
                                </div>
                                <div className="col-md-4">
                                    3 of 3
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
