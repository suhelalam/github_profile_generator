export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Github Profile Generator</title>
        <meta name="description" content="A form to collect user details and skills." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Header */}
        <header style={{ textAlign: 'center', padding: "1px", background: "#333", color: "#fff" }}>
          <nav>
            <h1>Github Read.Me Profile Generator</h1>
          </nav>
        </header>

        {/* Main Content */}
        <main style={{ padding: "20px" }}>{children}</main>

        {/* Footer */}
        <footer style={{ padding: "10px", textAlign: "center", background: "#333", color: "#fff" }}>
          <p>&copy; Developed by Suhel Alam.</p>
          
          {/* Social Media Links */}
          <div style={{ marginTop: '10px' }}>
            <a href="https://github.com/suhelalam" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
              <img src="/icons/github.svg" alt="GitHub" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.linkedin.com/in/suhel-alam/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
              <img src="/icons/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://twitter.com/suhelalam" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
              <img src="/icons/x-twitter.svg" alt="Twitter" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
