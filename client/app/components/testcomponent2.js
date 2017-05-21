import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom';
const TestComponent2 = ({match}) =>  (
  <div>
    {console.log('Match', match)}  
    <h2>TestComponent2</h2>
    {/*<Link to={`${match.url}/more`} >More</Link>
    <Link to={`${match.url}/more2`} >More</Link>*/}
 
  </div>
)


export default TestComponent2;