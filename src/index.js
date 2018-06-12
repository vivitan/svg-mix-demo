import './css/main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom'
import PageGuide from './pages/PageGuide'
{/*pageImport*/}
const rootEl = document.getElementById('root');

ReactDOM.render(
    <Router>
        <div className={'contest com-mobile-body'} >
            <Route exact path="/" component={PageGuide}/> {/*导航页*/}
            {/*pageRoute*/}
        </div>
    </Router>
    , rootEl);