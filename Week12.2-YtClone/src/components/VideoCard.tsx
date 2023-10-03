export function VideoCard(props: any){
    return(
        <div className="p-3">
             <img src={props.thumbnail} className="rounded-md" />
             
             <div className="grid grid-cols-12 pt-2">

                <div className="col-span-2">
                    <img className={"rounded-full"} src={props.channelIcon} alt="" />
                </div>

                <div className="col-span-10 ">
                    <div>
                        {props.title}
                    </div>

                    <div className="text-gray-400 text-base">
                        {props.author}
                    </div>

                    <div className="text-gray-400 text-base">
                        {props.views}{props.timestamp}
                    </div>
                </div>

             </div>

        </div>
    )
}