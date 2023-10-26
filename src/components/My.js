const fName = "Aviv"
const lName = "Taori"
let myAge = 26
const myNumPhone = "054-9833292"

function My() {
    return (
        <div>
            <h1 className="is-block">Welcome</h1>
            <div className="div-detils">
                
                <ul>my details:
                    <li>My name is {`${fName} ${lName}`}</li>
                    <li>I am {myAge} years age</li>
                    <li>My phone number is {myNumPhone}</li>
                </ul>

            </div>
        </div>
    ) 
}

export default My