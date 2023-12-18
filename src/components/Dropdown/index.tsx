import { useState, useRef, RefObject, ChangeEvent } from 'react'
// import { useOutsideClick } from '../../hooks/useClickOutside'
// import PropTypes from 'prop-types'
import './Drowpdown.scss'


function Dropdown(
  {
    id,
    options,
    accessibility,
    initialValue,
    onUpdateValue,
    placeholder,
    title,
    style,
    multipleSelection
  }: DropdownPropsI) {

  const [isExpanded, setIsExpanded] = useState<boolean | null>(null)
  const [selected, setSelected] = useState<OptionType | null>(initialValue ?? null)
  const [userQuery, setUserQuery] = useState<string>('')

  const ulDropdownContainer: RefObject<HTMLUListElement> = useRef(null)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }
  const handleSelectItem = (option: OptionType) => {
    setSelected(option)
    setUserQuery(option)
    setIsExpanded(!isExpanded)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (value === "") {
      setUserQuery("")
      setIsExpanded(null)
    } else {
      setUserQuery(value)
      setIsExpanded(true)
    }
  }

  return (
    <>
      {style === "classic"
        ? <label htmlFor={id} id={id + "Label"}>
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
        : <>
          {style === "searchbar" &&
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
                        .filter(item => item.toLowerCase().includes(userQuery.toLowerCase()))
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
          }
        </>
      }

    </>
  )
}

export default Dropdown