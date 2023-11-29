import ProgressionBar from '../ProgressionBar'
import './Sidebar.scss'

function Sidebar() {

  console.log(document.querySelector(".active .progression-bar__step"))
  return (
    <aside>
      <ProgressionBar />
    </aside>
  )
}

export default Sidebar