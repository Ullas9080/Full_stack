import { memo } from "react"

export const Child =memo(({onclick})=>{
console.log("Child renders")

return <button onClick={onclick}>Click child</button>
})
