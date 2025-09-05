import './globals.css'

export const metadata = {
  title: 'Ther-AI',
  description: 'Healthcare AI Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}