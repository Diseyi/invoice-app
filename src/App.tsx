import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Layout from './layouts';
import InvoiceHome from './page/invoices/index';
import InvoiceID from './page/invoices/id';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <InvoiceHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/invoice/:id",
    element: <InvoiceID />
  },
])


function App() {
  return (
    <div className='bg-off-white dark:bg-dark-blue '>
      <Layout >
          <RouterProvider router={router} />
      </Layout>
    </div>
  )
}

export default App
