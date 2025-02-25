import PropTypes from "prop-types";

export default function Places({title,places,fallbackText,onSelectPlace}){
    return (
        <section className="places-category">
            <h2>{title}</h2>
            {places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
            {places.length > 0 && (
                <ul className="places">
                    {places.map((place) => (
                        <li key={place.id} className="place-item">
                            <button onClick={() => onSelectPlace(place.id)}>
                                <img src={place.image.src} alt={place.image.alt} />
                                <h3>{place.title}</h3>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

Places.propTypes = {
    title: PropTypes.func.isRequired,
    places: PropTypes.func.isRequired,
    fallbackText: PropTypes.func.isRequired,
    onSelectPlace: PropTypes.func.isRequired
};