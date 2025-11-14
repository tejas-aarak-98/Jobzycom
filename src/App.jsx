import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';
import Jobs from './components/jobs/jobs';
import NotFound from './components/notFound';
import ProtectedRoute from './components/protectedRoute';
import JobsItemDetails from './components/jobsItemDetails';
import './App.css';
const App =() => {


  return (
    
    <Routes>

     <Route path = '/' element = {<ProtectedRoute Component = {Home}/> }> </Route>

     <Route path = '/jobs' element = {<ProtectedRoute Component = {Jobs}/>}></Route>

     <Route path = '/jobs/:id' element = {<ProtectedRoute Component = {JobsItemDetails}/>}></Route>

     <Route path = '/login' element ={<Login/>}></Route>

     <Route path = '/*' element ={<NotFound/>}></Route>

    </Routes>

  )


}

export default App
