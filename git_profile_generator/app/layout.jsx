export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Software Engineering Skills Form</title>
          <meta name="description" content="A form to collect user details and skills." />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          {/* Header */}
          <header style={{ padding: "1px", background: "#333", color: "#fff" }}>
            <nav>
              <h1>Github Read.Me Profile Generator</h1>
            </nav>
          </header>
  
          {/* Main Content */}
          <main style={{ padding: "20px" }}>{children}</main>
  
          {/* Footer */}
          <footer style={{ padding: "1px", textAlign: "center", background: "#333", color: "#fff" }}>
            <p>&copy; 2024 My App. All rights reserved.</p>
          </footer>
        </body>
      </html>
    );
  }
  