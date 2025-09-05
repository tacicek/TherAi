export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          🏥 Ther-AI
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Healthcare AI Solutions
        </p>
        <div style={{
          width: '100px',
          height: '4px',
          background: 'white',
          margin: '0 auto 2rem',
          borderRadius: '2px'
        }}></div>
        <p style={{
          fontSize: '1.1rem',
          maxWidth: '600px',
          lineHeight: '1.6',
          opacity: 0.8
        }}>
          Revolutionary artificial intelligence for medical diagnostics and patient care. 
          Transforming healthcare through cutting-edge AI technology.
        </p>
      </div>
    </div>
  )
}