

const CommentData=[
    {
        name:"Ranjeet Singh",
        comment:"Jai Mata Di",
        reply:[
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
        
                ]
            },
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
        
                ]
            }
        ]
    },
    {
        name:"Ranjeet Singh",
        comment:"Jai Mata Di",
        reply:[
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
                    {
                        name:"Ranjeet Singh",
                        comment:"Jai Mata Di",
                        reply:[
                            
                        ]
                    },
                    {
                        name:"Ranjeet Singh",
                        comment:"Jai Mata Di",
                        reply:[
                            
                        ]
                    },
                ]
            },
        ]
    },  
    {
        name:"Ranjeet Singh",
        comment:"Jai Mata Di",
        reply:[
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
                    
                ]
            },
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
                    
                ]
            },
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
                    
                ]
            },
        ]
    },
    {
        name:"Ranjeet Singh",
        comment:"Jai Mata Di",
        reply:[

        ]
    },
    {
        name:"Ranjeet Singh",
        comment:"Jai Mata Di",
        reply:[
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
                    
                ]
            },
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
                    
                ]
            },
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
                    
                ]
            },
        ]
    },
    {
        name:"Ranjeet Singh",
        comment:"Jai Mata Di",
        reply:[
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
                    
                ]
            },
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
                    
                ]
            },
            {
                name:"Ranjeet Singh",
                comment:"Jai Mata Di",
                reply:[
                    
                ]
            },
        ]
    },
];

const Comment=({data})=>{
  
    return(
        <div className="flex gap-8 m-4 hover:bg-zinc-800 hover:rounded-xl duration-100 p-2">
            <div>
                <img className="w-12 rounded-3xl" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"/>
            </div>
            <div>
                <p className="font-semibold text-lg">@{data.name}</p>
                <p>{data.comment}</p>
            </div>
            {/* <p>{data.reply}</p> */}
        </div>
    )
}

const CommentList=({comment})=>{
    return comment.map((comments,index)=>(
        <div key={index} >
            <Comment data={comments}/>
            <div className="ml-20  border-l-2 border-l-zinc-700 p-2">
                <CommentList comment={comments.reply}/>
            </div>
        </div>
    ))
}

const CommmentBox=()=>{
    return(
        <div className="w-[50rem] m-4 bg-zinc-900 p-4 rounded-xl ">
            <p className="text-2xl">Comments :</p>
            <CommentList comment={CommentData}/>
        </div>
    );
}
export default CommmentBox;