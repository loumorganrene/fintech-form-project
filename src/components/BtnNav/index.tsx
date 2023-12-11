import './BtnNav.scss'
import PropTypes from 'prop-types'

/**
 * Button Navigation component.
 * @param {object} props - The props object.
 * @param {Function} props.changePage - Function to change the page. Can be a function taking no arguments or a function taking an event.
 * @param {(string|boolean)} props.action - Action to be performed or boolean value for conditional rendering.
 * @returns {JSX.Element} Button Navigation component.
 */

function BtnNav({ changePage, action }: BtnNavParam) {

    if (action === '' || action === false) {
        return (<></>)
    }
    
    return (
        <button
            onClick={changePage}
            className={`btn-form-page ${action}`}>
            {action}
        </button>
    )
}

BtnNav.propTypes = {
    changePage: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.func.isRequired,
    ]).isRequired,
    action: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]).isRequired,
};

export default BtnNav