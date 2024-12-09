import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://lebahmadu.id',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://lebahmadu.id/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://lebahmadu.id/galery',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        }
    ]
}