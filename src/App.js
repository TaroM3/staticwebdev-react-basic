import React from 'react';
import React, { useState } from 'react';


function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleImageAnalysis = () => {
    // Add your logic to trigger image analysis using the imageUrl
    console.log('Image analysis triggered');
  };

  const handleImageGeneration = () => {
    // Add your logic to trigger image generation using the prompt
    console.log('Image generation triggered');
  };

  return (
    <main>
      <section>
        <label>Image URL:</label>
        <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
      </section>
      <section>
        <label>Prompt:</label>
        <input type="text" value={prompt} onChange={handlePromptChange} />
      </section>
      <button onClick={handleImageAnalysis}>Analyze Image</button>
      <button onClick={handleImageGeneration}>Generate Image</button>
    </main>
  );
}

export default App;
