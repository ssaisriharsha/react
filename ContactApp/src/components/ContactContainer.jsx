import Contact from "./Contact";
import felix from "../assets/felix.png"

export default function ContactContainer() {
    return (
        <div className="contact-container">
            <Contact
            name="Felix"
            imgPath={felix}
            phone="+91 93920 93502"
            mail="felix@bigcat.com"
            />
            <Contact
            name="Mr Whikerson"
            imgPath="/src/assets/mr-whiskerson.png"
            phone="+91 98662 17253"
            mail="whikerson@meow.com"
            />
            <Contact
            name="Pumpkin"
            imgPath="/src/assets/pumpkin.png"
            phone="+91 94910 76436"
            mail="pumpkin@mango.com"
            />
            <Contact
            name="Fluffykins"
            imgPath="/src/assets/fluffykins.png"
            phone="+91 79899 86781"
            mail="fluffykins@kitty.com"
            />
        </div>
    );
}