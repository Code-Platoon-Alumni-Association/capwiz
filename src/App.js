import React, {useEffect, useState} from 'react';
import CapwizTheVirtual from './CapwizTheVirtual'
import './App.scss';

function App() {
  const [storyShown, setStoryShown] = useState('')
  const [story, setstory] = useState(
    `Long ago, in a time before the ticks of the Unix Epoch, powerful magical beings prepared legendary heroes for great battles.
    The secret of who those mystical magi were and why they arose with such timely aid for heroes' quests had been lost to the quiet cantacerous
    churnings of modern life.
    Yet, even in their deep cosmic slumber, wizards watched and listened; waiting for a true hero's beckon.
    From a bed of quanta roused a wizard's charge, for they hath heard your heart, and its herald hum.
    Capwiz The Virtual, hath come to boil potion and beat drum.`
  )

  useEffect(() => {
    let i = 1
    if (i < story.length) {
      let next = storyShown + story.charAt(i)
      setStoryShown(next);
      i++;
      setTimeout(4, 1);
    }
  })

  return (
    <div className="main">
      <div className="App">
        <div className="App-page">
          <h1 id='story' className='serif drop-cap'>
            {storyShown}
            <div className='butt-group'>
              <button className='space butt'>SKIP INTRO</button>
              <button className='space butt'>JOIN CAPWIZ QUEST</button>
              <button className='space butt'>CREATE NEW QUEST</button>
            </div>
          </h1>
        </div>
      </div>
     </div>
  )
}

export default App;
