import PropTypes from 'prop-types';

import philosopher from '../assets/philosopher.png'
import checkmark from '../assets/checkmark.png'
import draw from '../assets/draw.png'

function Header({evaluateContent, mode}) {

  return (
    <header className="flex justify-between">
      <div className="flex items-center">
        <img src={philosopher} alt="logo of biasly" width="50"/>
        <span className="ml-3 font-custom text-3xl">Biasly</span>
      </div>
      <div>
        <button 
        className={`${mode == 'write' ? 'bg-green-700' : 'bg-yellow-500'} hover:opacity-75 mb-4 w-28 h-10 border-black flex items-center justify-center`}
        onClick={() => evaluateContent()}
        style={{ borderWidth: '3px'}}
        >
          {mode == 'write' ? 
          <img src={checkmark} alt="evaluate" width="23"/>
          : <img src={draw} alt="evaluate" width="23"/>}
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  evaluateContent: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};


export default Header
