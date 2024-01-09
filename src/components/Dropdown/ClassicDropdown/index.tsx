import { useRef } from 'react'
import useDropdownLogic from '../../../hooks/useDropdownLogic'

function ClassicDropdown({ id, title, options, accessibility, placeholder, multipleSelection, initialValue }: DropdownStylePropsT) {
    const divDropdownContainer = useRef(null)
    const buttonDropdown = useRef(null)
    const ulDropdownMenu = useRef(null)

    const {
        isExpanded,
        selected,
        handleSelectItem,
        handleClick,
        handleKeyNavigation
    } = useDropdownLogic(
        { initialValue },
        { clickRef: divDropdownContainer},
        // { keyBtnRef: buttonDropdown },
        { keyMenuRef: ulDropdownMenu },
        { options },
        { placeholder }
    )

    return (

        <label htmlFor={id} id={id + "Label"}>
            {title && <h3 className="label-heading">{title}</h3>}
            <div className="dropdown__container" ref={divDropdownContainer}>
                <button
                    ref={buttonDropdown}
                    role="button"
                    id={id}
                    className="dropdown__button--toggle"
                    aria-label={accessibility}
                    onClick={e => handleClick(e)}
                    onKeyDown={e => handleKeyNavigation(e)}
                >
                    {selected ? selected : placeholder ?? "Select option"}
                </button>

                {isExpanded &&
                    <ul ref={ulDropdownMenu} id={id + "List"} className="dropdown__menu">
                        {options.map((option: OptionType, index) =>
                            <li
                                key={"item-" + index}
                                className={"dropdown--item" + selected === option ? "focus" : ""}
                                id={"option-" + index + 1}
                                onClick={() => handleSelectItem(option)}
                                tabIndex={isExpanded ? 0 : -1}
                            >
                                {option}
                            </li>
                        )}
                    </ul>}
            </div>
            {multipleSelection &&
                <div className="dropdown-tag__container">
                    {selected &&
                        <span className={selected + "tag"}>
                            {selected}
                        </span>
                    }
                </div>
            }
        </label>
    )
}

export default ClassicDropdown