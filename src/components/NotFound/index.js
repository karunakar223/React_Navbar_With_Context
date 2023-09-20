// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDartTheme} = value
      const notFoundBgClassName = isDartTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'

      const notFoundHeadingTextClassName = isDartTheme
        ? 'not-found-heading-text-light'
        : 'not-found-heading-text-dark'

      const notFoundContentTextClassName = isDartTheme
        ? 'not-found-content-text-light'
        : 'not-found-content-text-dark'

      return (
        <div className={`not-found-app-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="not-found-responsive-container">
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1
                className={`not-found-heading ${notFoundHeadingTextClassName}`}
              >
                Lost Your Way?
              </h1>
              <p
                className={`not-found-content ${notFoundContentTextClassName}`}
              >
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
