import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import FlowChart from './Components/FlowChart.jsx';

const App: React.FC = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/flowchart/:flowchartId" component={FlowChart} />
            <Route
                exact
                path="/flowchart/:flowchartId/node/:nodeId"
                component={FlowChart}
            />
        </Switch>
    </Router>
);

export default App;
