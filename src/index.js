import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Basic_component/App';
import StateMange from"./State_Manage/Statemanage"
import ConditionalRender from "./Conditional_render'/Conditional"
import Form from "./Form&Control/Form"
import Router from "./Router/Router"
import { DataProvider } from './UseContext/Create';
import Usecontextt from "./UseContext/UseContext"
import Props from './Props/Props'
import Effect from "./useEffect/useEffect"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
  <App/>
  </>
);

