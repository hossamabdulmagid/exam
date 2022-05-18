import {useState} from "react";

const ChallengeB = () => {

    const checkerAnagram = (str1, str2) => {

        let string1 = str1.replaceAll(' ', '').toLowerCase().split('').sort().join('')
        let string2 = str2.replaceAll(' ', '').toLowerCase().split('').sort().join('')


        if (string1 === string2) {
            return "true";
        } else {
            return "false";
        }
    }

    const [anagram, setAnagram] = useState({anagramOne: '', anagramTwo: ''})

    const {anagramOne, anagramTwo} = anagram;

    const handleChange = e => {
        const {name, value} = e.target;
        setAnagram({...anagram, [name]: value});
        console.log(anagram);
    }

    console.log(checkerAnagram(anagramOne, anagramTwo));
    return (
        <div>
            <h1>
                Challenge B
            </h1>
            <p>
                function that takes two input and return a boolean value
                <span>
                    depending on
                    the given first input is an Anagram or no
                </span>

            </p>
            <input
                type={'text'}
                placeholder={'first anagram'}
                name={'anagramOne'}
                onChange={handleChange}
                className={'input'}

            />
            <br/>
            <input
                type={'text'}
                name={'anagramTwo'}
                placeholder={'second anagram'}
                className={'input'}

                onChange={handleChange}/>
            <hr/>
            {anagramOne.length === 0 && anagramTwo.length === 0 ? null : checkerAnagram(anagramOne, anagramTwo)}
        </div>
    )
}

export default ChallengeB;