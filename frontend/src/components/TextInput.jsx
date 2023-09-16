import PropTypes from 'prop-types';

function TextInput({content, editContent}) {

        return (
            <>
                <textarea 
                className="border-2 border-gray-300 rounded-md p-2" 
                placeholder="Enter text here..."
                onChange={(e) => editContent(e.target.value)}
                value={content}
                >
                </textarea> 
            </>
        )
    }

TextInput.propTypes = {
    editContent: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired
};

export default TextInput;
  