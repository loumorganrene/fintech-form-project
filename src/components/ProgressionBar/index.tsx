import './ProgressionBar.scss'

function ProgressionBar() {
  return (
      <section className="progression-bar">
          <h2 className="sidebar__title">
              Progression 1/5
          </h2>

          <ul className='progression-bar__list'>
              <li className="progression-bar__item active">
                  <span className="progression-bar__dot"></span>
                  <span className='progression-bar__step'></span>
                  <a className="progression-bar__label" href="#" aria-label="Provide company's details">
                      Details
                  </a>
              </li>

              <li className="progression-bar__item">
                  <span className="progression-bar__dot"></span>
                  <span className='progression-bar__step'></span>
                  <a className="progression-bar__label" href="#" aria-label="Present company's sources">
                      Sources
                  </a>
              </li>

              <li className="progression-bar__item">
                  <span className="progression-bar__dot"></span>
                  <span className='progression-bar__step'></span>
                  <a className="progression-bar__label" href="#" aria-label="Register company's representatives">
                      Representatives
                  </a>
              </li>

              <li className="progression-bar__item">
                  <span className="progression-bar__dot"></span>
                  <span className='progression-bar__step'></span>
                  <a className="progression-bar__label" href="#" aria-label="Upload mandatory company's documents">
                      Documents
                  </a>
              </li>

              <li className="progression-bar__item">
                  <span className="progression-bar__dot"></span>
                  <span className='progression-bar__step'></span>
                  <a className="progression-bar__label" href="#" aria-label="Submit company's application form for review">
                      Register
                  </a>
              </li>

          </ul>
      </section>
  )
}

export default ProgressionBar