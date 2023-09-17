import PropTypes from 'prop-types';

function InfoCard({ fallacyName, fallacyExplanation }) {
    return (
        <>
            <div className="border-black p-2 w-full h-screen bg-yellow-500 text-left h-fit" style={{ borderWidth: '3px', minHeight:"200px"}}>
                <p className='font-custom text-2xl mb-4'>{fallacyName}</p>
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