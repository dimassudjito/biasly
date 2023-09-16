import PropTypes from 'prop-types';

function TextHighlight({content}) {

        return (
            <>
                <h1 className="border-2 border-gray-300 rounded-md p-2">{content}</h1> 
            </>
        )
    }

TextHighlight.propTypes = {
    content: PropTypes.string.isRequired,
};

export default TextHighlight;
  