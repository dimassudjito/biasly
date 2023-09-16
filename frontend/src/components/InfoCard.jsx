import PropTypes from 'prop-types';

function InfoCard({ fallacyName, fallacyExplanation }) {
    return (
        <>
            <div className="border-2 border-gray-300 rounded-md p-2">
                <p>{fallacyName}</p>
                <p>{fallacyExplanation}</p>
            </div>
        </>
    );
}

InfoCard.propTypes = {
    fallacyName: PropTypes.string.isRequired,
    fallacyExplanation: PropTypes.string
};

export default InfoCard;