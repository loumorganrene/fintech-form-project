import { useState, useRef } from 'react'
import { useOutsideClick } from '../../hooks/useClickOutside'
import './DrowpdownWithSearchbar.scss'

interface DropdownProps {
  label: string,
  subject: string,
  elementList: string[],
  regex?: string,
  searchbar?: boolean,
  multiSelection?: boolean,
  accessibility: string,
}

function DropdownWithSearchbar({ label, subject, elementList, regex, accessibility, searchbar }: DropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [userQuery, setUserQuery] = useState("")

  const withSearchbar = searchbar === true
  // const withMultiSelection = multiSelection === true

  const handleDropdownToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const dropdownContainer = useRef<HTMLUListElement>(null)
  const handleClickOutside = () => {
    setIsExpanded(false)
  }
  useOutsideClick({ ref: dropdownContainer, onClickOut: handleClickOutside })

  // const handleTagCreation = () => {

  // }

  return (
    <>
      <ul className="dropdown__container" ref={dropdownContainer}>
        <li
          role="button"
          id={subject + "List"}
          className="dropdown__button--toggle"
          aria-controls={subject + "List"}
          aria-label={accessibility}
          tabIndex={0}
          onClick={handleDropdownToggle}
        >
          {label}
        </li>

        {isExpanded &&
          <li
            role="list"
            className="dropdown__menu"
            aria-expanded={isExpanded}
          >
            {withSearchbar &&
              <input
                id={subject + "Dropdown"}
                name="search"
                type="search"
                role="search"
                className="dropdown__searchbar"
                aria-label={"Search for " + subject}
                placeholder="Search..."
                pattern={regex}
                onChange={(e) => setUserQuery(e.target.value)}
              />}

            <ul id={subject + "List"} className="dropdown__list">
              {elementList
                .filter(element => element.includes(userQuery))
                .map((element: string, index) =>
                  <li
                    key={"item-" + index}
                    className="dropdown--item"
                    id={"option-" + index + 1}
                    tabIndex={0}
                  >
                    {element}
                  </li>
                )}
            </ul>

          </li>}
      </ul>
    </>
  )
}

export default DropdownWithSearchbar