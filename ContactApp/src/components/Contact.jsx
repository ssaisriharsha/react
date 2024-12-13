import PropTypes from "prop-types"

export default function Contact(props) {
    const {name, imgPath, phone, mail} = props;
    return (
        <article className="contact">
            <img className="profile-pic" src={imgPath} />
            <h2 className="name">{name}</h2>
            <div className="phone">
                <img src="/src/assets/phone-icon.png" className="contact-icon" />
                <span className="phone-number">{phone}</span>
            </div>
            <div className="mail">
                <img src="/src/assets/mail-icon.png" className="contact-icon" />
                <span className="mail-id">{mail}</span>
            </div>
        </article>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired
}