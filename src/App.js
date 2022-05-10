import './App.css';
import ChallengeA from "./challange/challengeA";
import ChallengeB from "./challange/ChallengeB";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <ChallengeA/>
                <ChallengeB/>
            </header>
        </div>
    );
}

export default App;
