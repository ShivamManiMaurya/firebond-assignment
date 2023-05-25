import "./App.css";
import FireBondAssignment from "./component/FireBondAssignment";

function App() {
    return (
        <div className="App bg-zinc-200 pl-8">
            <h1 className="text-3xl font-bold underline bg-red-500 w-fit">
                Jai Shree Ram
            </h1>
            <div className="py-2">
                <FireBondAssignment />
            </div>
        </div>
    );
}

export default App;
