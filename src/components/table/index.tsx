import React from 'react'
import './index.scss'
interface TableProps {
   head?: React.ReactNode[];
   body: any[];
   type?: 'normal' | 'stripped'
}
function Table({ head, body, type = 'normal' }: TableProps) {
   return (
      <div id='table' className={`table ${type}`}>
         <table>
            {
               head &&
               <thead>
                  <tr>
                     {
                        head?.map((item: React.ReactNode, idx: number) => (
                           <th>{item}</th>
                        ))
                     }
                  </tr>
               </thead>
            }
            {
               body &&
               <tbody>
                  {
                     body?.map((item: any, idx: number) => (
                        <tr key={idx}>
                           {
                              Object.entries(item)?.map(([key, value]: any, indx) => (
                                 <td key={indx}>{value}</td>
                              ))
                           }
                        </tr>
                     ))
                  }
               </tbody>
            }
         </table>
      </div>
   )
}

export default Table