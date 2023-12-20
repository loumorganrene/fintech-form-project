import { useRef } from 'react'
import useDropdownLogic from '../../../hooks/useDropdownLogic'

function SearchbarDropdown({ id, title, options, placeholder, multipleSelection, initialValue }: DropdownStylePropsT) {
    const ulDropdownContainer = useRef(null)
    const {
        isExpanded,
        selected,
        userQuery,
        handleClick,
        handleChange,
        handleSelectItem,
        handleKeyNavigation
    } = useDropdownLogic(
        { initialValue },
        { ref: ulDropdownContainer },
        { options },
        { placeholder }
    )

    return (
        <label htmlFor={id} id={id + "Label"}>
            {title && <h3 className="label-heading">{title}</h3>}
            <div className="dropdown__container" ref={ulDropdownContainer}>
                <button
                    className="dropdown__button--toggle"
                    onClick={handleClick}
                    onKeyDown={handleKeyNavigation}
                >
                    <input
                        type="search"
                        id={id + "Dropdown"}
                        placeholder={placeholder}
                        value={userQuery}
                        onChange={handleChange}
                    />
                </button>

                {isExpanded &&
                    <ul id={id + "List"} className="dropdown__menu">
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
                    </ul>}
                {multipleSelection &&
                    <div className="dropdown-tag__container">
                        {selected &&
                            <span className={selected + "tag"}>
                                {selected}
                            </span>
                        }
                    </div>
                }
            </div>
        </label>
    )
}

export default SearchbarDropdown