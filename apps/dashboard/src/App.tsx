import { useState } from 'react'
import { Upload } from './pages/Upload'
import { Results } from './pages/Results'

type Page = 'upload' | 'results'

function App() {
  const [page, setPage] = useState<Page>('upload')

  if (page === 'results') {
    return <Results onNewUpload={() => setPage('upload')} />
  }

  return <Upload onComplete={() => setPage('results')} />
}

export default App
