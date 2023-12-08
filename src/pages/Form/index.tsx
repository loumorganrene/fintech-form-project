import BtnNav from '../../components/BtnNav'
import Details from './DetailsStep'
import Sources from './SourcesStep'
import Representatives from './RepresentativesStep'
import Documents from './DocumentsStep'
import Register from './SubmitStep'
import { useState } from 'react'
import './Form.scss'

function Form() {
  const conditionalStepComponent = () => {
    switch (formPageIndex) {
      case 0:
        return <Details />;
      case 1:
        return <Sources />;
      case 2:
        return <Documents />;
      case 3:
        return <Representatives />;
      case 4:
        return <Register />;
      default:
        return <Details />;
    }
  }

  const [formPageIndex, setFormPageIndex] = useState(0)

  const nextPage = () => {
    if (formPageIndex >= 0) {
      setFormPageIndex(formPageIndex + 1)
    }
  }

  const prevPage = () => {
    if (formPageIndex >= 0) {
      setFormPageIndex(formPageIndex - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <main>
      {conditionalStepComponent()}
      <div className="form-nav__container">
        {formPageIndex !== 4 ? (
          <>
            <BtnNav changePage={prevPage} action={formPageIndex !== 0 && 'previous'} />
            <BtnNav changePage={nextPage} action={formPageIndex !== 4 && 'next'} />
          </>
        ) : (
          <>
            <BtnNav changePage={prevPage} action='previous' />
            <BtnNav changePage={handleSubmit} action={formPageIndex === 4 && 'submit'} />
          </>
        )
        }
      </div>

    </main>
  )
}

export default Form