import { useState } from 'react';

import React from 'react'
import { IconName } from "react-icons/fa";
import { faSearch } from "react-icons/fa";




const SearchBar = () => {



  return (
    <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Rechercher" aria-label="Rechercher" aria-describedby="basic-addon2"/>
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
    </div>
  </div>
  );
};

export default SearchBar





  


