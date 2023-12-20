// import PropTypes from 'prop-types'
import './Drowpdown.scss'
import SearchbarDropdown from './SearchbarDropdown'
import ClassicDropdown from './ClassicDropdown';

function Dropdown(
  {
    id,
    title,
    options,
    accessibility,
    placeholder,
    multipleSelection,
    initialValue,
    style,
    // useOption
  }: DropdownPropsI) {

  return (
    <>
      {style === "classic" ?
        (<ClassicDropdown
          id={id}
          title={title}
          accessibility={accessibility}
          options={options}
          placeholder={placeholder}
          multipleSelection={multipleSelection}
          initialValue={initialValue}
        />)
        :
        style === "searchbar" ?
          (<SearchbarDropdown
            id={id}
            title={title}
            options={options}
            placeholder={placeholder}
            multipleSelection={multipleSelection}
            initialValue={initialValue}
          />) : null}
    </>
  )
}

export default Dropdown