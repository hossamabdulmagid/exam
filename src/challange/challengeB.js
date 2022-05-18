const ChallengeB = () => {

    const checkerAnagram = (str1, str2) => {

        let string1 = str1.replaceAll(' ', '').toLowerCase().split('').sort().join('')
        let string2 = str2.replaceAll(' ', '').toLowerCase().split('').sort().join('')


        if (string1 === string2) {
            return true;
        } else {
            return false;
        }
    }

    let word1 = "PaRt    "
    let word2 = "trAp"

    console.log(checkerAnagram(word1, word2))

    return (
        <div>
            <h1>
                Challenge B
            </h1>
            <hr/>
        </div>
    )
}

export default ChallengeB;