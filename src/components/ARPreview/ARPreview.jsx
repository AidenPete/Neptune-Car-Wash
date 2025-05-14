import { useState, useRef } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import './ARPreview.css'

const ARPreview = () => {
  const [originalImage, setOriginalImage] = useState('')
  const [processedImage, setProcessedImage] = useState('')
  const [showComparison, setShowComparison] = useState(false)
  const fileInputRef = useRef(null)

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files[0]
    if (file && file.type.match('image.*')) {
      processImage(file)
    }
  }

  const handleFileInput = (e) => {
    const file = e.target.files[0]
    if (file && file.type.match('image.*')) {
      processImage(file)
    }
  }

  const processImage = (file) => {
    const reader = new FileReader()
    
    reader.onload = (event) => {
      setOriginalImage(event.target.result)
      
      // Create processed image (simulated effect)
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        
        // Apply simple "shine" effect
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data
        
        for (let i = 0; i < data.length; i += 4) {
          // Increase brightness
          data[i] = Math.min(255, data[i] * 1.1)     // R
          data[i+1] = Math.min(255, data[i+1] * 1.1) // G
          data[i+2] = Math.min(255, data[i+2] * 1.1) // B
        }
        
        ctx.putImageData(imageData, 0, 0)
        setProcessedImage(canvas.toDataURL())
        setShowComparison(true)
        
        // Simulate processing delay
        setTimeout(() => {
          if ('vibrate' in navigator) {
            navigator.vibrate(200)
          }
        }, 1500)
      }
      img.src = event.target.result
    }
    
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <section id="preview" className="ar-preview">
      <div className="container">
        <h3 className="text-center">See Your Divine Transformation</h3>
        <div 
          className={`ar-container ${showComparison ? 'active' : ''}`} 
          id="drop-zone"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => !showComparison && fileInputRef.current.click()}
        >
          {!showComparison ? (
            <div className="ar-prompt">
              <FaCloudUploadAlt className="ar-icon" />
              <p>Drag & drop your car photo</p>
              <p><small>or click to select</small></p>
              <input 
                type="file" 
                id="ar-upload" 
                ref={fileInputRef}
                accept="image/*" 
                onChange={handleFileInput}
                style={{ display: 'none' }}
              />
            </div>
          ) : (
            <div className="ar-comparison">
              <div className="ar-image-container">
                <h4>Before</h4>
                <img src={originalImage} alt="Original car" />
              </div>
              <div className="ar-image-container">
                <h4>After</h4>
                <img src={processedImage} alt="Divine wash" className="processed-image" />
                <div className="ar-overlay">
                  <span className="shine-effect"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ARPreview