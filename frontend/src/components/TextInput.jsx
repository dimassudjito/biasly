import PropTypes from 'prop-types';

function TextInput({content, editContent}) {

        return (
            <>
                <textarea 
                className="border-black p-2 w-full h-screen bg-purple-300" 
                placeholder="Enter article here..."
                onChange={(e) => editContent(e.target.value)}
                value={content}
                style={{ borderWidth: '3px'}}
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
  