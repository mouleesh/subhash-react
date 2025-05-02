import React, { useContext } from 'react'
import { ParentContext } from './Parent'

function GrandChild() {
    const a = useContext(ParentContext);

    return (
        <div> to GrandChild {a}</div>
    )
}

export default GrandChild