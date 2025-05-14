import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="trident-loader">
          <div className="trident-head"></div>
          <div className="trident-shaft"></div>
        </div>
        <h2>Neptune's Divine Car Wash</h2>
        <div className="loading-progress">
          <div className="loading-progress-bar"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen