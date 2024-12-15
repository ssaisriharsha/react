import jokesData from "/jokesData.js"

export default function Entry(props) {
    // const testArr=[1, 2, 3, 4, 5, 6, 7];
    console.log(jokesData[0].punchline)
    return (
        <main>

            {/* <article className="japan">
                <div className="place-image-container">
                    <img className="place-image" src={props.imgLink} alt={props.country} />
                </div>
                <div className="entry-text-container">
                    <img src="/src/assets/marker.png" className="marker" alt="marker" />
                    <span className="place">{props.country}</span>
                    <a href="https://maps.google.com">View on google maps</a>
                    <h2>{props.place}</h2>
                    <span><b>{props.interval}</b></span>
                    <p>{props.desc}</p>
                </div>
                <h1>{testArr[0]}</h1>
                <h1>{testArr[1]}</h1>
                <h1>{testArr[2]}</h1>
                <h1>{testArr[3]}</h1>
                <h1>{testArr[4]}</h1>
                <h1>{testArr[5]}</h1>
            </article> */}
        </main>
    );
}

