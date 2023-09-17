import PropTypes from 'prop-types';

function TextHighlight({fallacy, toggleInfo, setSelectedFallacy}) {
    return (
        <>
            <p className="border-black p-2 w-full h-screen bg-purple-300 text-left" style={{ borderWidth: '3px'}}>
                {fallacy.map(obj => {
                    if (obj.label != "No Fallacy") {
                        return (
                        <span 
                        key={obj.text} 
                        className='bg-yellow-500 hover:opacity-50'
                        onMouseEnter={() => {
                            toggleInfo()
                            setSelectedFallacy(obj)
                        }}
                        onMouseLeave={() => {
                            toggleInfo()
                        }}
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
    toggleInfo: PropTypes.func.isRequired,
    setSelectedFallacy: PropTypes.func.isRequired
};

export default TextHighlight;
  