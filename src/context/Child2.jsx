import React, { useContext } from 'react'
import { ParentContext } from './Parent'

function Child2() {
    const a = useContext(ParentContext);
    return (
        <div>Child2 {a}</div>
    )
}

export default Child2