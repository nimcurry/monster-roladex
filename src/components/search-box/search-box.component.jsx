import React from 'react';

import './search-box.style.css';

const SearchBox = ({placeholder, handleChange})=>(
    <input 
    className="search"
    type="search" 
    placeholder={placeholder} 
    onChange={handleChange
    //setState's 2nd argument is callback function to log any output we wish to. it works well
    //within the asynchronous concept
    /* this.setState({searchFiled:e.target.value}, ()=>console.log(this.state));*/}></input>
    );

export default SearchBox;