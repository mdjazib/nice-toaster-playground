"use client"
import React, { useState } from 'react'
import toast, { SetupNiceToaster } from 'nice-toaster'

const page = () => {
  const [theme, setTheme] = useState("light");
  const notify = () => { toast.success("Cool", { vibration: true, notification: true, timer: true }) }
  return (
    <>
      <SetupNiceToaster settings={{ theme }} />
      <br />
      <br /><br /><br />
      <br /><br /><br /><br /><br />
      <button onClick={notify}>Click me</button>
      <button onClick={() => { setTheme("light") }}>light</button>
      <button onClick={() => { setTheme("dark") }}>dark</button>
      okkkkkk
    </>
  )
}

export default page