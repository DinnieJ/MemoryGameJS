import React from 'react'
import Default from '../layouts/default'

const Page = ({ children, layout, auth }) => {

    const PageLayout = layout ?? Default
    return (
        <PageLayout>
            {children}
        </PageLayout>
    )
}

export default Page
