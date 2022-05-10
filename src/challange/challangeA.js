import {useState} from 'react';


const ChallengeA = () => {
    let [needle, updateNeedle] = useState('');
    
    let haystack = 'hello world from hossam Challenge A';

    const findNeedle = (haystack, needle) => {
        let result = haystack && haystack.indexOf(needle);
        return result;
    }

    console.log(findNeedle(haystack, needle), `findNeedle`)

    const HandleChange = async e => {
        await updateNeedle(e.target.value);
    }

    return (
        <div>
            <h1>Challenge A</h1>
            <input
                type={'text'}
                onChange={HandleChange}
                style={{
                    padding: '9px',
                    borderRadius: '5px',
                    border: '1px solid darkblue'
                }}
            />
            <p>
                {findNeedle(haystack, needle)}
            </p>
        </div>
    )


}

export default ChallengeA;