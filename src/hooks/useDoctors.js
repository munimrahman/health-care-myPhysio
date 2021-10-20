import { useEffect, useState } from "react"

const useDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/doctor-data.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return doctors;
}

export default useDoctors;