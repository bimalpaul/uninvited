import {useState} from 'react';

export default initialValue => {
    const [val, setVal] = useState(initialValue);
    const eventHandler = () => setVal(!val);
    return [val, eventHandler];
}

