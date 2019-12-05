import React, { useState } from 'react'

const Example = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>The current value of Counter is {count}</div>
            <button onClick={() => setCount(count + 1)}> Increment Counter </button>
        </div>
    );
}

export default Example;