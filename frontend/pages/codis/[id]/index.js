import React from "react"
import { useRouter } from "next/router"

const Codi = () => {
    const router = useRouter()
    const {id} = router.query

    return(
        <div>This is codi</div>
    )
}

export default Codi