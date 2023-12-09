import './InputForm.scss'
import PropTypes from 'prop-types'

/**
 * InputForm Component - Renders different input elements based on the provided type.
 * @param {object} props - The props object.
 * @param {string} props.name - The unique identifier for the input.
 * @param {string} props.type - The type of input: 'radio' or 'checkbox'.
 * @param {ReactNode} [props.title] - The label for the input.
 * @param {boolean} [props.noHeader] - Indicates whether to style the label as a header or not.
 * @param {string} [props.accessibility] - Accessibility description for the input (aria-label).
 * @param {string[]} [props.radioChoices] - Array of choices for radio inputs.
 * @param {string[]} [props.checkboxChoices] - Array of choices for checkbox inputs.
 * @param {string} [props.placeholder] - Placeholder text for the input field.
 * @param {string} [props.className] - Custom class for the input container.
 * @param {ChangeEventHandler} [props.onChange] - Event handler for change events on checked input.
 * @param {ReactNode} [props.children] - Additional children to be rendered.
 * @returns {JSX.Element} JSX Element representing the input form.
 */

function InputForm({ name, type, title, noHeader, accessibility, radioChoices, checkboxChoices, placeholder, className, onChange, children }: InputPropType) {
    const isRadio = type === "radio"
    const isCheckbox = type === "checkbox"
    const isSimple = noHeader === true

    return (
        <>
            {!isRadio
                ?
                (isCheckbox
                    ?
                    (<>
                        {checkboxChoices?.map((choice) =>
                            <label
                                key={choice + type}
                                htmlFor={name + "Checkbox"}
                                id={name + "Label"}
                                className="choice__container"
                            >
                                {choice}
                                <input
                                    key={name + type}
                                    type={type}
                                    id={name + "Checkbox"}
                                    name={name}
                                />
                            </label>
                        )}
                    </>
                    )
                    :
                    (
                        <label
                            htmlFor={name + "Input"}
                            id={name + "Label"}
                            className={className}>
                            {isSimple ? title : <h3 className="label-heading">{title}</h3>}
                            <input
                                type={type}
                                id={name + "Input"}
                                name={name}
                                aria-label={accessibility}
                                placeholder={placeholder}
                            />
                        </label>
                    )
                )
                :
                (
                    <label id={name}>
                        {isSimple ? title : <h3 className="label-heading">{title}</h3>}
                        {radioChoices?.map(
                            (choice) =>
                                <span key={choice + type} className="choice__container">
                                    <label htmlFor={name + choice}>{choice}</label>
                                    <input
                                        type={type}
                                        id={name + choice}
                                        name={name + "Choice"}
                                        value={choice}
                                        onChange={onChange}
                                    />
                                </span>
                        )}
                        {children}
                    </label>
                )
            }
        </>)
}

InputForm.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.node,
    noHeader: PropTypes.bool,
    accessibility: PropTypes.string,
    radioChoices: PropTypes.arrayOf(PropTypes.string),
    checkboxChoices: PropTypes.arrayOf(PropTypes.string),
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.node,
}

export default InputForm