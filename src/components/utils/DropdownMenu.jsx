import React from 'react';

function DropdownMenu({name , options}) {
  return (
    <div>
      <select className='px-5 py-2 text-gray-600 border-2 border-gray-300 rounded-md outline-0' name={name} >
        {options.map((option) => (
            <option value={option}>
                {option}
            </option>
        ))}
      </select>
    </div>
  )
}

export default DropdownMenu;
