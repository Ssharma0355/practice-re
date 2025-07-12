// import React from 'react'

// const Child11 = ({btnName}) => {
//     console.log("Re-render here ")
//   return (
//     <div>
//         <button>{btnName}</button>
//     </div>
//   )
// }

// export default Child11
//  it gets re-render when ever we make any changes in parent component

// import React from 'react'

// const Child11 = React.memo(({ btnName }) => {
//     console.log("Re-render here ")
//     return (
//         <div>
//             <button>{btnName}</button>
//         </div>
//     )
// })

// export default Child11

// this React.Memo will save us for faltu ka re-render but limitation is there should not be any event onclick and all passes thorugh parent



import React from 'react'

const Child11 = React.memo(({ btnName, handleClick }) => {
    console.log("Re-render here ")
    return (
        <div>
            <button>{btnName}</button>
        </div>
    )
})

export default Child11