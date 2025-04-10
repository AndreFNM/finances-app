import DateSelector from "@/components/DateSelector"

export default function Dashboard(){
    return(
        <div className="min-h-screen bg-gray-600">
            <header className="py-4 bg-gray-700 shadow-md">
                <DateSelector />
            </header>
        </div>
    )
}
