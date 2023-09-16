import PropTypes from 'prop-types';

function InfoCard({ fallacyName }) {
    return (
        <>
            <div className="border-2 border-gray-300 rounded-md p-2">
                <p>{fallacyName}</p>
                <p>*explanation for fallacy*</p>
            </div>
        </>
    );
}

InfoCard.propTypes = {
    fallacyName: PropTypes.string.isRequired,
};

export default InfoCard;