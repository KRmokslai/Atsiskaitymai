import React from "react"

const Joke = (props)=>{
        
    return(
        <div className="col-sm-6">
            <div className="card bg-dark text-light">
                <div className="card-body text-center">
                    <div className="h1 mb-3">
                        <img src={props.origin} alt="#" className="img-fluid" />
                    </div>
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-text">{props.joke}</p>
                    <a href="http://www.jokes.one" className="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
    
}
export default Joke
 