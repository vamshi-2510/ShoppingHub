import React from 'react'
import { useSelector } from 'react-redux'
const MyOrder = () => {

  const ordersData = useSelector(state => state.orders.ordersData)
  const username = useSelector(state => state.users.userData.username)

  return (
    <div className='mx-auto'>
      <h1 className="code text-center m-2">My Orders</h1>
      {
        ordersData.map(x =>
          <div className="text-center">
            <table className="table m-5 ordersTable">
              <thead>
                <th>Product Name</th>
                <th>Price</th>
              </thead>
              <tbody>
                {
                  x.orders.map(y =>
                    <tr>
                      <td>{y.name}</td>
                      <td>{y.price}</td>
                    </tr>
                  )
                }
              </tbody>
              <div className="mt-3">
                <h6 className="text-center">Total Price : {x.amount}</h6>
                <h6 className="text-center">Order Date  : {x.date}</h6>
              </div>
            </table>

          </div>
        )
      }
    </div>

  )
}

export default MyOrder