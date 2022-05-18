const ChallengeC = () => {


    let n = 8;

    const palindromeNumber = (n) => {

        let result = [];

        for (let i = 1; i <= n; i++) {
            result.push(i);
        }
        return result.join("")

    }

    console.log(palindromeNumber(n))

    return (
        <div>
            <h1>
                Challenge C
            </h1>
        </div>
    )
}

export default ChallengeC;