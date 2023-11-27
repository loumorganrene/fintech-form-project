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
            <span className="progression-bar__label">
              <a href="#" aria-label="Provide company's details">
                Company details
              </a>
            </span>
          </li>

          <li className="progression-bar__item">
            <span className="progression-bar__dot"></span>
            <span className="progression-bar__label">
              <a href="#" aria-label="Present company's sources">
                Company sources
              </a>
            </span>
          </li>

          <li className="progression-bar__item">
            <span className="progression-bar__dot"></span>
            <span className="progression-bar__label">
              <a href="#" aria-label="Register company's representatives">
                Company representatives
              </a>
            </span>
          </li>

          <li className="progression-bar__item">
            <span className="progression-bar__dot"></span>
            <span className="progression-bar__label">
              <a href="#" aria-label="Upload mandatory company's documents">
                Documents
              </a>
            </span>
          </li>

          <li className="progression-bar__item">
            <span className="progression-bar__dot"></span>
            <span className="progression-bar__label">
              <a href="#" aria-label="Submit company's application form for review">
                Register
              </a>
            </span>
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