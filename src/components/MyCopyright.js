const myName = "Aviv Taori";
const courrentDate = new Date();


function MyCopyright (){
    return (
        <div>
            <p>Created by {myName}</p>
            <p>Copyright {courrentDate.getFullYear()}</p>
        </div>

    )
}

export default MyCopyright