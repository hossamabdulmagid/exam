import {useState} from "react";

const ChallengeC = () => {

    let [number, setNumber] = useState();

    const palindromeNumber = number => {

        let result = [];

        for (let i = 1; i <= number; i++) {
            result.push(i);
        }
        return result.join("")

    }

    console.log(palindromeNumber(number))

    return (
        <div>
            <h1>
                Challenge C
            </h1>
            <p>
                a function that takes a digits count as input. And return a palindrome
                <p>
                    number as output. The output’s digits count should equal the given input.
                </p>
            </p>
            <input
                className={'input'}
                type={'text'}
                placeholder={`enter number int`}
                onChange={e => setNumber(e.target.value)}/>
            <br/>
            <div>
                {isNaN(number) ? null : palindromeNumber(number)}
            </div>
            <hr/>
        </div>
    )
}

export default ChallengeC;