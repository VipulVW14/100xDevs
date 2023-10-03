import { VideoCard } from "./VideoCard"

const Videos=[ 
    {title: "How to learn coding in 30 days",
    thumbnail: "https://picsum.photos/400/200",
    channelIcon: "https://picsum.photos/50/50",
    author: "Vipul Wasnik",
    views: "65M views |",
    timestamp: " 5 months ago"},
    
    {title: "How to learn football in 30 days",
    thumbnail: "https://picsum.photos/400/200",
    channelIcon: "https://picsum.photos/50/50",
    author: "Vipul Wasnik",
    views: "65M views |",
    timestamp: " 5 months ago"},

    {title: "How to learn swimming in 30 days",
    thumbnail: "https://picsum.photos/400/200",
    channelIcon: "https://picsum.photos/50/50",
    author: "Vipul Wasnik",
    views: "65M views | ",
    timestamp: "5 months ago"},

    {title: "How to learn coding in 30 days",
    thumbnail: "https://picsum.photos/400/200",
    channelIcon: "https://picsum.photos/50/50",
    author: "Vipul Wasnik",
    views: "65M views |",
    timestamp: " 5 months ago"},
    
    {title: "How to learn football in 30 days",
    thumbnail: "https://picsum.photos/400/200",
    channelIcon: "https://picsum.photos/50/50",
    author: "Vipul Wasnik",
    views: "65M views |",
    timestamp: " 5 months ago"},

    {title: "How to learn swimming in 30 days",
    thumbnail: "https://picsum.photos/400/200",
    channelIcon: "https://picsum.photos/50/50",
    author: "Vipul Wasnik",
    views: "65M views | ",
    timestamp: "5 months ago"},

    {title: "How to learn coding in 30 days",
    thumbnail: "https://picsum.photos/400/200",
    channelIcon: "https://picsum.photos/50/50",
    author: "Vipul Wasnik",
    views: "65M views |",
    timestamp: " 5 months ago"},
    
    {title: "How to learn football in 30 days",
    thumbnail: "https://picsum.photos/400/200",
    channelIcon: "https://picsum.photos/50/50",
    author: "Vipul Wasnik",
    views: "65M views |",
    timestamp: " 5 months ago"},

    {title: "How to learn swimming in 30 days",
    thumbnail: "https://picsum.photos/400/200",
    channelIcon: "https://picsum.photos/50/50",
    author: "Vipul Wasnik",
    views: "65M views | ",
    timestamp: "5 months ago"},
]


export const VideoGrid=() =>{
    return <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {Videos.map(video => 
        <div>
            <VideoCard
                title={video.title}
                thumbnail={video.thumbnail}
                channelIcon={video.channelIcon}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
            /> 
        </div>)}

    </div>
}