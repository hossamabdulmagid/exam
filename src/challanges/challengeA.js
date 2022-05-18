import {useState} from 'react';


const ChallengeA = () => {

    let [needle, updateNeedle] = useState('');

    let [haystack, updateHayStack] = useState('');

    let flag = false;

    const findNeedle = (haystack, needle) => {
        let result = haystack && haystack.indexOf(needle);
        if (result === -1) {
            return 'your filter does not match result and return -1'
        }
        return result;
    }

    console.log(findNeedle(haystack, needle), `findNeedle`)

    const HandleChange = async e => {
        await updateNeedle(e.target.value);
    }

    const HandleChangeTextArea = async e => {
        await updateHayStack(e.target.value)
    }

    return (
        <div>
            <h1>Challenge A</h1>

            <p>
                a function that returns the index of the first
                occurrence of needle in a haystack,
            </p>
            <p>
                or -1 if the needle is not part of the haystack

            </p>
            <textarea
                type={"text"}
                onChange={HandleChangeTextArea}
                rows="4"
                cols="50"
                placeholder={'type your haystack'}
                autoFocus
            />
            <br/>
            <input
                type={'text'}
                onChange={HandleChange}
                className={'input'}
                placeholder={'type character to filter it'}
            />
            <p>
                {!flag ? findNeedle(haystack, needle) : null}
            </p>
            <hr/>
        </div>
    )


}

export default ChallengeA;