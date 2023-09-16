import PropTypes from 'prop-types';

function TextHighlight({fallacy, toggleInfo}) {
    return (
        <>
            <p className="border-2 border-gray-300 rounded-md p-2">
                {fallacy.map(obj => {
                    if (obj.label != "No Fallacy") {
                        return (
                        <span 
                        key={obj.text} 
                        className='bg-blue-500'
                        onClick={() => toggleInfo()}
                        >
                            {obj.text}.
                        </span>
                        )
                    }
                    return <span key={obj.text}>{obj.text}.</span>
                })}
            </p> 
        </>
    )
}

TextHighlight.propTypes = {
    fallacy: PropTypes.array.isRequired,
    toggleInfo: PropTypes.func.isRequired
};

export default TextHighlight;
  