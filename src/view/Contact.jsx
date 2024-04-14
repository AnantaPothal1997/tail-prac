import ContactList from "../components/ContactList"
import MapContainer from "../components/MapContainer"

export default()=>{
    return (
        <>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 ">
            <div className="text-start">
                <ContactList/>
            </div>

            <div className="text-end">
                <MapContainer/>
            </div>
            
          </div>
        </>
    )
}


// md:px-48 md:py-20