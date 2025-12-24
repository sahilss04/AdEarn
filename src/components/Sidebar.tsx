
type NavItem = {
    label: string;
    icon: React.ReactNode;
    href?: string;
    active?: boolean;
};

export default function Sidebar() {
    const navItems: NavItem[] = [
        { label: "Dashboard", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 6v6m0-6h6" /></svg>), active: true },
        { label: "Wallet", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a4 4 0 00-8 0v2m-2 4h12v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" /></svg>) },
        { label: "Invite Friends", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20v-2a4 4 0 00-3-3.87M16 4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>) },
        { label: "Leaderboard", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6h6v13M5 13h14" /></svg>) },
        { label: "My Profile", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" /></svg>) },
    ];

    return (
        <aside className="w-56 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
            <div>
                <div className="flex items-center text-2xl font-bold mb-10">
                    <span className="text-blue-600">Ad</span><span className="text-orange-500">Earn</span>
                </div>
                <nav className="flex flex-col space-y-4">
                    {navItems.map(({ label, icon, active }) => (
                        <button
                            key={label}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium w-full ${active ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {icon}
                            {label}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg shadow flex flex-col items-center gap-2">
                <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80"
                    alt="avatar"
                    className="rounded-full w-16 h-16"
                />
                <p className="font-semibold">Sahil Sharma</p>
                <p className="text-xs text-gray-500">sahil@gmail.com</p>
                <button className="bg-red-600 hover:bg-red-700 text-white text-sm rounded-md px-4 py-1 mt-2 w-full">Logout</button>
            </div>
        </aside>
    );
};