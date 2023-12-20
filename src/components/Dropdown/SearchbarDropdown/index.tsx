import { useRef, RefObject } from 'react'
import useDropdownLogic from '../../../hooks/useDropdownLogic'

function SearchbarDropdown({ id, title, options, placeholder, multipleSelection, initialValue }: DropdownStylePropsT) {
    const ulDropdownContainer: RefObject<HTMLUListElement> = useRef(null)
    const {
        isExpanded,
        selected,
        userQuery,
        handleChange,
        handleSelectItem
    } = useDropdownLogic({ initialValue }, { ref: ulDropdownContainer })

    return (
        <label htmlFor={id} id={id + "Label"}>
            {title && <h3 className="label-heading">{title}</h3>}
            <ul className="dropdown__container" ref={ulDropdownContainer}>
                <li className="dropdown__button--toggle">
                    <input
                        role="button"
                        type="search"
                        id={id + "Dropdown"}
                        placeholder={placeholder}
                        value={userQuery}
                        onChange={handleChange}
                    />
                </li>

                {isExpanded &&
                    <div className="dropdown__menu">
                        <ul id={id + "List"} className="dropdown__list">
                            {options
                                .filter(item => item.toLowerCase().startsWith(userQuery.toLowerCase()))
                                .map((option: OptionType, index) =>
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
                    </div>}
                {multipleSelection &&
                    <div className="dropdown-tag__container">
                        {selected &&
                            <span className={selected + "tag"}>
                                {selected}
                            </span>
                        }
                    </div>
                }
            </ul>
        </label>
    )
}

export default SearchbarDropdown