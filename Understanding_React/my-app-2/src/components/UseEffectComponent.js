import React, { useEffect, useState } from 'react'


const suggesionMaster = [
    "laptop", "mobile", "phone"
];

export default function UseEffectComponent() {

    const [recommendation, setRecommendation] = useState(suggesionMaster);
    const [search, setSearch] = useState("");

    // useEffect(action function, [dependency array])
    useEffect(() => {
        console.log("Inside useEffect !");
        setRecommendation(suggesionMaster.filter((item) => item.includes(search)))
    }, [search]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <input value={search} onChange={handleSearchChange} />
            {
                recommendation.map((item, index) => <div key={index}>{index}.{item}</div>)
            }
        </div>
    )
}
