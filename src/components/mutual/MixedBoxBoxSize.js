import React from 'react';

const MixedBoxBoxSize = (props) => {

    
    return (
        <li>
            <button onClick={props.toggleBoxSize}>
                {props.boxSize}
            </button>
        </li>
    )
}

export default MixedBoxBoxSize