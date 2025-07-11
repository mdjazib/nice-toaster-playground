"use client"
import React, { useState } from 'react'
import toast, { SetupNiceToaster } from 'nice-toaster'
import { atomOneLight, CodeBlock, hybrid, ocean } from 'react-code-blocks';

const page = () => {
  // Toast options state
  const [message, setMessage] = useState('Saved successfully!');
  const [description, setDescription] = useState('');
  const [toastType, setToastType] = useState('success');
  const [vibration, setVibration] = useState(false);
  const [notification, setNotification] = useState(false);
  const [hold, setHold] = useState(false);
  const [timer, setTimer] = useState(false);
  const [time, setTime] = useState(5000);

  // Toaster settings state
  const [theme, setTheme] = useState('light');
  const [template, setTemplate] = useState('default');
  const [position, setPosition] = useState('top-center');

  const playgroundTheme = {
    light: {
      "--background-color": "#fff",
      "--layer-1": "#f5f5f5",
      "--text-color": "#222",
      "--btn-bg": "#e0e0e0"
    },
    dark: {
      "--background-color": "#1f1f1f",
      "--layer-1": "#242424",
      "--text-color": "#cbcbcb",
      "--btn-bg": "#303030"
    }
  }
  const createToast = () => {
    toast[toastType](message, {
      description,
      hold,
      vibration,
      time,
      timer,
      notification,
    })
  }
  return (
    <div className='playground-port' style={playgroundTheme[theme] || playgroundTheme.light}>
      <SetupNiceToaster settings={{
        theme,
        position,
        template
      }} />
      <div className="heading">
        <h3>Playground</h3>
        <h2>Nice Toaster</h2>
      </div>
      <div className="playground">
        <div className="col">
          <div className="toast-options-ui-panel block-constant">
            <CodeBlock
              text={`<button\n  onClick={() =>\n    toast.${toastType}('${message}', {\n      description: '${description}',\n      hold: ${hold},\n      vibration: ${vibration},\n      time: ${time},\n      timer: ${timer},\n      notification: ${notification},\n    })\n  }\n>\n  Show Advanced Toast\n</button>`}
              language={"jsx"}
              theme={theme === "dark" ? ocean : atomOneLight}
            />
            <div className="bblock">
              <p>Message</p>
              <input type="text" placeholder='Toaster Message' value={message} onChange={e => setMessage(e.target.value)} />
            </div>
            <div className="bblock">
              <p>Description</p>
              <textarea placeholder="Optional short description for toaster message." value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div className="bblock">
              <p>Toast</p>
              <div className="ctagrp">
                <button className={toastType === 'success' ? 'active' : 'inactive'} onClick={() => setToastType('success')}>Success</button>
                <button className={toastType === 'error' ? 'active' : 'inactive'} onClick={() => setToastType('error')}>Error</button>
                <button className={toastType === 'warn' ? 'active' : 'inactive'} onClick={() => setToastType('warn')}>Warn</button>
                <button className={toastType === 'info' ? 'active' : 'inactive'} onClick={() => setToastType('info')}>Info</button>
              </div>
            </div>
            <div className="switchs">
              <p>Options</p>
              <div className="btns">
                <div className="switch" onClick={() => setVibration(v => !v)}>
                  <p>Vibration (Only for mobiles)</p>
                  <div className="button" aria-checked={vibration}>
                    <div className="rad"></div>
                  </div>
                </div>
                <div className="switch" onClick={() => setNotification(n => !n)}>
                  <p>Notification (Only for desktop)</p>
                  <div className="button" aria-checked={notification}>
                    <div className="rad"></div>
                  </div>
                </div>
                <div className="switch" onClick={() => setHold(h => !h)}>
                  <p>Hold (Prevent timeout)</p>
                  <div className="button" aria-checked={hold}>
                    <div className="rad"></div>
                  </div>
                </div>
                <div className="switch" onClick={() => setTimer(t => !t)}>
                  <p>Timer (Timeout progress bar)</p>
                  <div className="button" aria-checked={timer}>
                    <div className="rad"></div>
                  </div>
                </div>
                <div className="switch">
                  <p>Time in (Milliseconds)</p>
                  <input type="number" value={time} onChange={e => setTime(Number(e.target.value))} />
                </div>
              </div>
            </div>
          </div>
          <div className="toaster-settings-ui-panel block-constant">
            <CodeBlock
              text={`<SetupNiceToaster settings={{\n        theme: "${theme}",\n        position: "${position}",\n        template: "${template}"\n}} />`}
              language={"jsx"}
              theme={theme === "dark" ? ocean : atomOneLight}
            />
            <div className="bblock">
              <p>Theme</p>
              <div className="ctagrp">
                <button className={theme === 'dark' ? 'active' : 'inactive'} onClick={() => setTheme('dark')}>Dark</button>
                <button className={theme === 'light' ? 'active' : 'inactive'} onClick={() => setTheme('light')}>Light</button>
              </div>
            </div>
            <div className="bblock">
              <p>Templates</p>
              <div className="ctagrp">
                <button className={template === 'default' ? 'active' : 'inactive'} onClick={() => setTemplate('default')}>Default</button>
                <button className={template === 'fuzzy' ? 'active' : 'inactive'} onClick={() => setTemplate('fuzzy')}>Fuzzy</button>
                <button className={template === 'cyber' ? 'active' : 'inactive'} onClick={() => setTemplate('cyber')}>Cyber</button>
                <button className={template === 'classic' ? 'active' : 'inactive'} onClick={() => setTemplate('classic')}>Classic</button>
              </div>
            </div>
            <div className="bblock">
              <p>Positions</p>
              <div className="ctagrp">
                <button className={position === 'top-center' ? 'active' : 'inactive'} onClick={() => setPosition('top-center')}>Top Center</button>
                <button className={position === 'top-right' ? 'active' : 'inactive'} onClick={() => setPosition('top-right')}>Top Right</button>
                <button className={position === 'top-left' ? 'active' : 'inactive'} onClick={() => setPosition('top-left')}>Top Left</button>
                <button className={position === 'bottom-center' ? 'active' : 'inactive'} onClick={() => setPosition('bottom-center')}>Bottom Center</button>
                <button className={position === 'bottom-right' ? 'active' : 'inactive'} onClick={() => setPosition('bottom-right')}>Bottom Right</button>
                <button className={position === 'bottom-left' ? 'active' : 'inactive'} onClick={() => setPosition('bottom-left')}>Bottom Left</button>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="btn-fixed">
        <button className='makeToast' onClick={createToast}>Create Toast</button>
      </div>
    </div >
  )
}

export default page