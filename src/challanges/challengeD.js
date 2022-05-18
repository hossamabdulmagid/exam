const ChallengeD = () => {

    let Input = [1, 2, 5, 6, 4, 11]

    const findIndexOfMinMax = (Input) => {
        let min = Input[0];
        let max = Input[0];

        for (let i = 0; i < Input.length; i++) {
            if (Input[i] > max) {
                max = Input[i];
            } else if (Input < min) {
                min = Input[i];
            }
        }

        let result = {
            min: [Input.indexOf(min)],
            max: [Input.indexOf(max)],
        }

        return result;

    }

    console.log(findIndexOfMinMax(Input), `find index of Min and Max in Input`)

    return (
        <div>
            <h1>
                Challenge D
            </h1>
            <p>
                find the minimum and maximum sum among the array
                elements,
                <p>
                    and return the index of those elements as a result for both min. And
                    max. Values.
                </p>
            </p>
        </div>
    )
}


export default ChallengeD;