export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Eddy Xu',
  description: 'Personal website of Eddy Xu',
}