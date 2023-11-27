import './Sidebar.scss'

function Sidebar() {
  return (
    <aside>
      <section className="progression-bar">
        <h2 className="sidebar__title">
          Progression 1/5
        </h2>
        <ul className='progression-bar__list'>

          <li className="progression-bar__item">
            <span className="progression-bar__dot"></span>
            <a className="progression-bar__label" href="#" aria-label="Provide company's details">
              Company details
            </a>
          </li>

          <li className="progression-bar__item">
            <span className="progression-bar__dot"></span>
            <a className="progression-bar__label" href="#" aria-label="Present company's sources">
              Company sources
            </a>
          </li>

          <li className="progression-bar__item">
            <span className="progression-bar__dot"></span>
            <a className="progression-bar__label" href="#" aria-label="Register company's representatives">
              Company representatives
            </a>
          </li>

          <li className="progression-bar__item">
            <span className="progression-bar__dot"></span>
            <a className="progression-bar__label" href="#" aria-label="Upload mandatory company's documents">
              Documents
            </a>
          </li>

          <li className="progression-bar__item">
            <span className="progression-bar__dot"></span>
            <a className="progression-bar__label" href="#" aria-label="Submit company's application form for review">
              Register
            </a>
          </li>

        </ul>
      </section>
    </aside>
  )
}

export default Sidebar

// < li > Company details</li >
//         <li>Company address</li>
//         <li>Company sources</li>
//         <li>Company representatives</li>
//         <li>Documents</li>
//         <li>Submit</li>