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

  const dropdownContainer = useRef<HTMLDivElement>(null)
  const handleClickOutside = () => {
    setIsExpanded(false)
  }
  useOutsideClick({ ref: dropdownContainer, onClickOut: handleClickOutside })

  // const handleTagCreation = () => {

  // }

  return (
    <>
      <div className="dropdown__container" ref={dropdownContainer}>
        <div
          id={subject + "List"}
          className="dropdown__button--toggle"
          aria-expanded={isExpanded}
          aria-controls={subject + "List"}
          aria-label={accessibility}
          onClick={handleDropdownToggle}
        >
          {label}
        </div>

        {isExpanded && <div className="dropdown__menu">
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
                <li key={"item-" + index} className="dropdown--item">
                  {element}
                </li>
              )}
          </ul>

        </div>}
      </div>
    </>
  )
}

export default DropdownWithSearchbar