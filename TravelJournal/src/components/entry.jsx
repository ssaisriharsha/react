export default function Entry() {
    const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    return (
        <main>
            <article className="japan">
                <div className="place-image-container">
                    <img className="place-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="japan" />
                </div>
                <div className="entry-text-container">
                    <img src="/src/assets/marker.png" className="marker" alt="marker" />
                    <span className="place">JAPAN</span>
                    <a href="https://maps.google.com">View on google maps</a>
                    <h2>Mount Fuji</h2>
                    <span><b>12 jan 2021 - 24 jan 2021 {time}</b></span>
                    <p>Mount fuji is the tallest mountain in japan, standing at 3776ft. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam harum fugiat blanditiis nam non nemo, quasi repudiandae numquam recusandae qui saepe asperiores tenetur, aut quas. Libero ad minus molestiae magnam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis! Nihil ducimus ratione praesentium rem culpa, voluptates alias possimus tenetur ab voluptatibus architecto laborum libero aspernatur. Nulla vel necessitatibus laborum.</p>
                </div>
            </article>
        </main>
    );
}