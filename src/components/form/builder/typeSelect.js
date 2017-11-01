import React from 'react';
import * as FieldTypes from '../fields';


const TypeSelect = ({ value = false, onChange }) => {
  const fieldTypeNames = Object.keys(FieldTypes);
  
  return (
    <select value={value} onChange={e=>onChange(e.target.value)}>
      { fieldTypeNames.map((ft,i) => <option key={i}>{FieldTypes[ft].fieldName}</option>)}
    </select>
  )
}

export default TypeSelect;