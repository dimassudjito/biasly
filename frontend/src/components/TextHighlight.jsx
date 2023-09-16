import PropTypes from 'prop-types';

function TextHighlight({content, toggleInfo}) {
    const fullText = content.split('.')
    const highText = "Happy Birthday"

    return (
        <>
            <p className="border-2 border-gray-300 rounded-md p-2">
                {fullText.map(element => {
                    if (element.includes(highText)) {
                        return (
                        <span 
                        key={element} 
                        className='bg-blue-500'
                        onClick={() => toggleInfo()}
                        >
                            {element}.
                        </span>
                        )
                    }
                    return <span key={element}>{element}.</span>
                })}
            </p> 
        </>
    )
}

TextHighlight.propTypes = {
    content: PropTypes.string.isRequired,
    toggleInfo: PropTypes.func.isRequired
};

export default TextHighlight;
  