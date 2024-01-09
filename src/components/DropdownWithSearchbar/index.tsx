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
  const handleDropdownClose = () => {
    setIsExpanded(false)
  }
  useOutsideClick({ ref: dropdownContainer, onClickOut: handleDropdownClose })

  // const handleKeyboardAccess = () => {
  //   const SPACEBAR_KEY_CODE = 32 || 'Space'
  //   const ENTER_KEY_CODE = 13 || 'Enter'
  //   const DOWN_ARROW_KEY_CODE = 40 || 'ArrowDown'
  //   const UP_ARROW_KEY_CODE = 38 || 'ArrowUp'
  //   const ESCAPE_KEY_CODE = 27 || 'Escape'

  //   useEffect(()=>{
      
  //   })
  // }

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
                .filter(element => element.toLowerCase().includes(userQuery.toLowerCase()))
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