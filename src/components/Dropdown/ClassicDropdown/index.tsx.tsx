import { useRef, RefObject } from 'react'
import useDropdownLogic from '../../../hooks/useDropdownLogic'

function ClassicDropdown({ id, title, options, accessibility, placeholder, multipleSelection, initialValue }: DropdownStylePropsT) {
    const ulDropdownContainer: RefObject<HTMLUListElement> = useRef(null)

    const {
        isExpanded,
        selected,
        handleSelectItem,
        handleClick,
    } = useDropdownLogic({ initialValue }, { ref: ulDropdownContainer })

    return (

        <label htmlFor={id} id={id + "Label"}>
            {title && <h3 className="label-heading">{title}</h3>}
            <ul className="dropdown__container" ref={ulDropdownContainer}>
                <li
                    role="button"
                    id={id}
                    className="dropdown__button--toggle"
                    aria-label={accessibility}
                    onClick={handleClick}
                >
                    {selected ? selected : placeholder ?? "Select option"}
                </li>

                {isExpanded &&
                    <li
                        role="list"
                        className="dropdown__menu"
                    >
                        <ul id={id + "List"} className="dropdown__list">
                            {options.map((option: OptionType, index) =>
                                <li
                                    key={"item-" + index}
                                    className="dropdown--item"
                                    id={"option-" + index + 1}
                                    onClick={() => handleSelectItem(option)}
                                >
                                    {option}
                                </li>
                            )}
                        </ul>
                    </li>}
            </ul>
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