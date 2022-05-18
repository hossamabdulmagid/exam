import './App.css';
import ChallengeA from "./challanges/challengeA";
import ChallengeB from "./challanges/challengeB";
import ChallengeC from "./challanges/challengeC";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <ChallengeA/>
                <ChallengeB/>
                <ChallengeC/>
            </header>
        </div>
    );
}

export default App;
