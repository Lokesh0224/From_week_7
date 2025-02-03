const style= { width: 200, background: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}

export const PostComponent= ({name , subtitle, time, image, description})=>{
    return <div style= {style}>
        <div style={{display: "flex"}}>
            <img src={image} style= {{
                width: 30, 
                height: 30, 
                borderRadius: 20
            }}/>
            <div style= {{fontSize: 10, marginLeft: 10}}>
                <b>
                    {name}
                </b>
                <div> {subtitle}</div>
                {(time!== undefined) ? <div style={{display: 'flex'}}>
                    <div>{time}</div>
                    <img src={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{width: 12, height: 12}}/>
                </div>:null}
            </div>
        </div>
        <div style={{fontSize: 12}}>
            {description}
        </div>
    </div>
}