import React, { createContext, useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

export const ParentContext = createContext();

function Parent() {
 
  return (
    <>
      <ParentContext value="Message from Parent Component">
        <div>Parent</div>
        <Child1 />
        <Child2 />
      </ParentContext>
    </>
  )
}

export default Parent