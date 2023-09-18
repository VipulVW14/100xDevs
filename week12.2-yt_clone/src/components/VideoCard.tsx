export function VideoCard(){
    return(
        <div>
             <img src="https://picsum.photos/400/200" className="rounded-md" />
             <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className={"rounded-full w-12 h-12"} src="https://picsum.photos/30/30" alt="" />
                </div>

                <div className="col-span-11 ">
                    <div>
                        Jawan: Chaleya (Hindi) | Shahrukh Khan
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        Harkirat Singh
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        46M views | 5 months ago
                    </div>
                </div>
             </div>
        </div>
    )
}