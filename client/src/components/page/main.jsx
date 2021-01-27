import React, { useState, useEffect } from 'react'
 import {checkMaster} from '../../Socket'
import '../../App.css';
const Main = ()=>{
    useEffect(() => {
        checkMaster()
    }, []);
    return(
        <div className="App">
        <header className="App-header">
          <p>main
          </p>
        </header>
      </div>
    )
}
export default Main