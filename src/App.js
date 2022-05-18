import './App.css';
import ChallengeA from "./challange/challengeA";
import ChallengeB from "./challange/challengeB";
import ChallengeC from "./challange/challengeC";

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
