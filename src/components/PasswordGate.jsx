import React, { useState, useEffect } from 'react'

// Client-side password gate (not secure). Change DEFAULT_PASSWORD before deploying public.
const DEFAULT_PASSWORD = 'devpass'

export default function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('site_unlocked') === '1') {
      onUnlock?.()
    }
  }, [])

  function submit(e) {
    e.preventDefault()
    const expected = window.__SITE_PASSWORD || DEFAULT_PASSWORD
    if (password === expected) {
      sessionStorage.setItem('site_unlocked', '1')
      onUnlock?.()
    } else {
      setError('Incorrect password')
    }
  }

  return (
    <div className="pw-overlay">
      <div className="pw-modal">
        <h2>Site is Private</h2>
        <p>Enter password to continue.</p>
        <form onSubmit={submit}>
          <input
            aria-label="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="pw-actions">
            <button type="submit" className="cta">Enter</button>
          </div>
        </form>
        {error && <p className="pw-error">{error}</p>}
        <p className="pw-note">Note: This is client-side protection only. Remove before making public.</p>
      </div>
    </div>
  )
}
