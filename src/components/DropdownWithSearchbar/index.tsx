import './DrowpdownWithSearchbar.scss'
import { useState } from 'react'

interface DropdownProps {
  label: string,
  subject: string,
  elementList: string[],
  regex?: string,
  searchbar?: boolean,
  accessibility: string,
}

function DropdownWithSearchbar({ label, subject, elementList, regex, accessibility, searchbar }: DropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const withSearchbar = searchbar === true
  // const [state, setState] = useState()

  const handleDropdownOpening = () => {
    setIsExpanded(!isExpanded)
  }

  // const handleSearchbar = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
  //   const { value } = e.target


  // }

  return (
    <>
      <div className="dropdown__container">
        <div
          id={subject + "List"}
          className="dropdown__button--toggle"
          aria-expanded={isExpanded}
          aria-controls={subject + "List"}
          aria-label={accessibility}
          onClick={handleDropdownOpening}
        >
          {label}
        </div>

        <div className={(isExpanded === false ? "hidden" : "dropdown__menu")}>
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
            />}

          <ul id={subject + "List"} className="dropdown__list">
            {elementList.map((element: string, index) =>
              <li key={"item-" + index} className="dropdown--item">
                {element}
              </li>
            )}
          </ul>

        </div>
      </div>
    </>
  )
}

export default DropdownWithSearchbar