import { useEffect, useState } from "react"
import supabase from "./supabase"
import { Technologies } from "../Projects/ProjectsList"

const TechonolgiesHook = () => {

    const [technologies, setTechnologies] = useState<Technologies[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getTechnologies = async(): Promise<void> =>{
            try{
                const {data, error} = await supabase
                .from('Technologies')
                .select('*')
                if (error) {
                  console.error('Error fetching technologies:', error)      
                  setError(error.message)
                }
                setTechnologies(data!)
            }            
            catch (err) {
                console.error('Error in TechonolgiesHook:', err)            
            }finally {
                setIsLoading(false)
            }
        }
    getTechnologies()
    }, [])

    return {technologies, isLoading, error}

}

export default TechonolgiesHook
