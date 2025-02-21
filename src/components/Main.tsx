interface MainProps {
    children: React.ReactNode
}

export default function Main({children}: MainProps){
    return (
        <main className="p-2 md:p-10 top-20"><div className="mt-20"></div>{children}</main>
    );
}
