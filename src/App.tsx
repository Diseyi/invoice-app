import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Layout from './layouts';
import InvoiceHome from './page/invoices/index';
import InvoiceDetail from './page/invoices/id';
import ErrorPage from './error-page';
import 'antd/dist/reset.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <InvoiceHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/invoice/:id",
    element: <InvoiceDetail />
  },
])


function App() {
  return (
    <div className='bg-off-white dark:bg-dark-blue'>
      <Layout >
          <RouterProvider router={router} />
      </Layout>
    </div>
  )
}

export default App
