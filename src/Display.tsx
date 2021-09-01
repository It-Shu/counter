import React from 'react';

type DisplayType = {
    state: number
}

const Display = (props: DisplayType) => {

    return (
        <div>
            <div>{props.state}</div>
        </div>
    );
};

export default Display;