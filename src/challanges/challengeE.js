const ChallengeE = () => {
    let bucket = [100, 100, 100, 100, 100, 100, 70, 100, 100, 100, 100, 100, 90, 100,];


    const FindTheMissingWeightBucket = (bucket) => {
        let result = [];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] <= 90) {
                result.push(`  bucket  ${i + 1} less than 100 g`);
            }
        }
        return result;
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
            {FindTheMissingWeightBucket(bucket)
            }
        </div>
    )
}

export default ChallengeE;