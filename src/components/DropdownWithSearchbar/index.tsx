import './DrowpdownWithSearchbar.scss'
import { useState } from 'react'

interface DropdownProps {
  label: string,
  subject: string,
  elementList: string[],
  regex?: string,
}

function DropdownWithSearchbar({ label, subject, elementList, regex }: DropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  // const [state, setState] = useState()

  const handleDropdownOpening= ()=> {
    setIsExpanded(!isExpanded)
  }

  // const handleSearchbar = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
  //   const { value } = e.target


  // }

  return (
    <>
      <div className="dropdown__container">
        <button
          className="dropdown__button--toggle"
          aria-expanded={isExpanded}
          aria-controls={subject + "List"}
          onClick={handleDropdownOpening}
        >
          {label}
        </button>

        <div className={"dropdown__menu" + (isExpanded === false && "hidden")}>
          <input
            id={subject + "Dropdown"}
            name="search"
            type="search"
            role="search"
            className="dropdown__searchbar"
            aria-label={"Search for " + subject}
            placeholder="Search..."
            pattern={regex}
          />

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