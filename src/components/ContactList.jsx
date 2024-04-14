import { useState } from "react"
import ContactCard from "./ContactCard"

export default () => {
    const contactListOriginal = [
        {
            name: "Vision Care",
            email: "samnfjdiunjhh@gmail.cpom",
            phone: "909034990",
            region: "test"
        },
        {
            name: "Surgeon Care",
            email: "jkdfb26dnfdbf@gmail.cpom",
            phone: "909034990",
            region: "test"
        }

    ]

    const [contactList, setContactList] = useState(contactListOriginal);

    const [appliedFilter, setFilter] = useState([]);

    const filterOptions = ["Vision Care", "Surgeon Care"]

    const applyFilter = (filterItem) => {
        let filters = [...appliedFilter];
        if(!filters.includes(filterItem)){
            filters.push(filterItem) 
        }else{
           let newfilters =  filters.filter(item => item != filterItem);
            // console.log(newfilters);
            filters = newfilters
        }
        setFilter(filters)

        //filter the contact list accordingly only when any filter is applied
        if(filters.length >0){
            let newContactList = contactListOriginal.filter(item=> filters.includes(item.name) );
            console.log(newContactList);
            setContactList(newContactList)
        }else{
            setContactList(contactListOriginal)
        }
        

    }

    const [showFilter, setShowFilter] = useState(false);

    const [count, setCount] = useState(0)

    return (<>
        <div className="px-12">
            <div className="text-5xl font-light text-gray-700 uppercase font-serif mb-8">Contact</div>
            <div>
                <div className="flex text-gray-600 mb-2">
                    <div className="cursor-pointer "
                        onClick={() => {
                            setShowFilter(!showFilter)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>

                    </div>

                    {/* show the selected filter */}
                    {
                        appliedFilter.map((filter, id) => {
                            return (
                                <span key={id} className="filter-button-sm">
                                    {filter}
                                </span>
                            )
                        })
                    }
                </div>
                {
                    showFilter &&
                    <div className="flex border p-3 me-11 rounded-xl my-2 pb-4 bg-gray-50">
                        {
                            filterOptions.map((filterItem, id) => {
                                return (
                                    <span key={id} className={
                                        appliedFilter.includes(filterItem) ? "filter-button active-filter" : "filter-button"
                                    }
                                        onClick={() => {
                                            applyFilter(filterItem)
                                            setCount(count + 1)
                                        }}
                                    >
                                        {filterItem}
                                    </span>
                                )
                            })
                        }
                    </div>
                }

            </div>
            <div>
                {
                    contactList.map((contact, id) => {
                        return (
                            <div key={id}>
                                <ContactCard contact={contact} />
                            </div>
                        )
                    })
                }


            </div>

        </div>
    </>)
}