import {useState} from 'react';


const ChallengeA = () => {
    
    let [needle, updateNeedle] = useState('');

    let haystack = 'hello world from hossam Challenge A';

    let flag = false;

    const findNeedle = (haystack, needle) => {
        let result = haystack && haystack.indexOf(needle);
        if (result === 0) {
            flag = true;
        }
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
                {!flag ? findNeedle(haystack, needle) : null}
            </p>
        </div>
    )


}

export default ChallengeA;