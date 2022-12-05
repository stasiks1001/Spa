import React from 'react'

function PersonForm() {
    return (
        <div>
            <form>
                <div> 
                    <label> Name :</label>
                    <input type="text" name="name" />
                </div>
                <div> 
                    <label> Email :</label>
                    <input type="email" name="email" />
                </div>
                <div> 
                    <label> Phone :</label>
                    <input type="text" name="phone" />
                </div>
                <div>
                    <button type ="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
