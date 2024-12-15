import Joke from "./Joke.jsx"
import jokesData from "/jokesData"

export default function App() {
    const jokeElement = jokesData.map((joke)=><Joke key={joke.id} setup={joke.setup} punchline={joke.punchline}/>)
    return (
        <main>
            {jokeElement}
        </main>
    )
}