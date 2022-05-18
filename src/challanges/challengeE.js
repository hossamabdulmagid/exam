const ChallengeE = () => {
    let bucket = [10, 10, 10, 5, 10, 4, 10, 10, 10, 8];

    const FindTheMissingWeightBucket = (bucket) => {
        let result = []
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] <= 10) {
                if (bucket.indexOf(i) !== -1) {
                    result.push(bucket.indexOf(i) + 1 + ` less than 100g \n\n`)
                }
            }
        }
        return result.sort().join('');
    }


    console.log(FindTheMissingWeightBucket(bucket));


    return (
        <div>
            <h1>
                Challenge F

            </h1>
            <p>
                Write an algorithm to find the faulty bucket using a one-time scale for the ( n ) buckets
            </p>
            <p>
                in logs
            </p>
        </div>

    )
}

export default ChallengeE;