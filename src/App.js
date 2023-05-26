import "./App.css";
// import FireBondAssignment from "./component/FireBondAssignment";
// import Test from "./components/Test.js";
// import BooleanState from "./components/BooleanState";
import InputArg from "./components/InputArg.js";

function App() {
    return (
        <div className="App bg-zinc-200 pl-8">
            <h1 className="text-3xl font-bold underline bg-red-500 w-fit">
                Jai Shree Ram
            </h1>
            <div className="py-2">
                {" "}
                <InputArg />
            </div>
        </div>
    );
}

export default App;
