import './App.css';
import ChallengeA from "./challanges/challengeA";
import ChallengeB from "./challanges/challengeB";
import ChallengeC from "./challanges/challengeC";
import ChallengeD from "./challanges/challengeD";
import ChallengeE from "./challanges/challengeE";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <ChallengeA/>
                <ChallengeB/>
                <ChallengeC/>
                <ChallengeD/>
                <ChallengeE/>
            </header>
        </div>
    );
}

export default App;
