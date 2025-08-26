import './Card.css'
function Card({children,onSubmit}){
    return(
        <div id="Card" onSubmit={onSubmit} >
            {children}



        </div>
    )

}
export default Card;