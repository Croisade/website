import { NextSeo } from 'next-seo'
import { PERSONAL_INFORMATION, WEBSITE_INFORMATION } from '@constants'

type SEOInput = {
    title: string
    description: string
    image: string
    url: string
    date?: string
}

export const SEO = ({ title, description, image, url, date }: SEOInput) => {
    return (
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                site_name: WEBSITE_INFORMATION.siteName,
                title: title,
                description: description,
                images: [{ url: image }],
                type: WEBSITE_INFORMATION.type,
                url: url,
                profile: {
                    firstName: PERSONAL_INFORMATION.firstName,
                    lastName: PERSONAL_INFORMATION.lastName,
                    gender: PERSONAL_INFORMATION.gender
                },
                ...(date && {
                    article: {
                        publishedTime: new Date(date).toString(),
                        authors: [
                            `${PERSONAL_INFORMATION.firstName} ${PERSONAL_INFORMATION.lastName}`
                        ]
                    }
                })
            }}
            twitter={{
                handle: PERSONAL_INFORMATION.handle,
                site: WEBSITE_INFORMATION.siteNameLowerCase,
                cardType: 'summary_large_image'
            }}
        />
    )
}
