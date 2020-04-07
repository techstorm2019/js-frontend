import React,{Component} from 'react';
import {Doughnut} from "react-chartjs-2";

const doughnutData = {
    labels: ['Leaf', 'Sky', 'Cobalt', 'Royal'],
    datasets: [{
        data: [150, 120, 100, 75],
        backgroundColor: [
            '#ACD173',
            '#61A5DA',
            '#637CB5',
            '#334D7C'
        ],
        hoverBackgroundColor: [
            '#ACD173',
            '#61A5DA',
            '#637CB5',
            '#334D7C'
        ]
    }]
};

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Doughnut data={doughnutData}
                                  width={512}
                                  height={256}
                                  options={{
                                      maintainAspectRatio: false,
                                      legend: {
                                          labels: {
                                              fontColor: '#000'
                                          },
                                          position: 'bottom'
                                      }
                                  }}
                        />
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span className="badge badge-primary badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span className="badge badge-primary badge-pill">1</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span className="badge badge-primary badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span className="badge badge-primary badge-pill">1</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;