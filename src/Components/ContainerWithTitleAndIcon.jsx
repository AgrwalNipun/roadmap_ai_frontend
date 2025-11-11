export const ContainerWithTitleAndIcon = ({title, icon, children}) => {
    return <div className="border-2 border-gray-800 justify-center items-center rounded-xl p-6 flex flex-col gap-4">
        
            <div className="    text-[hsl(var(--card))]">{icon}</div>
            <div className="text-2xl font-bold">{title}</div>
            

        <div>
            {children}
        </div>
    </div>
            
            }