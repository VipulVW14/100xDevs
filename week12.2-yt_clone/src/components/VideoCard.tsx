export function VideoCard(){
    return(
        <div>
             <img src="https://picsum.photos/400/200" alt="" />
             <div className="grid grid-cols-12">
                <div className="col-span-1">
                    <img className={"rounded-full w-20 h-20"} src="https://picsum.photos/30/30" alt="" />
                </div>
                <div className="col-span-10">
                    Jawan: Chaleya(Hindi) | Shahrukh Khan
                </div>
                <div className="col-span-10">
                    Jawan: Chaleya(Hindi) | Shahrukh Khan
                </div>
             </div>
        </div>
    )
}