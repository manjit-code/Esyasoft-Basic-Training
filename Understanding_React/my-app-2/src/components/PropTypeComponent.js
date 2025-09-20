import React from 'react'

export default function PropTypeComponent({name, age}) {
  return (
    <div>
      <p>{name} : {age}</p>
    </div>
  )
}

// It ensures a fixed data type for {name, usn} for above function
PropTypeComponent.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number
};

