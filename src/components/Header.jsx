import ThemeToggle from './ThemeToggle'

export default function Header({ onOpenModal }) {
    return (
        <header className="flex items-center justify-between bg-[#FFFFFF] dark:bg-gray-800 h-[130px] w-full gap-8 p-8 transition-colors duration-300">
            <img
                src="/assets/icons/logo-f7862584.svg"
                alt="logo"
                className="w-25 dark:invert"
            />

            <div className="flex items-center gap-4">
                <ThemeToggle />

                <div className="bg-white dark:bg-gray-700 inset-shadow-2xs shadow rounded-xl h-12 w-70 flex transition-colors duration-300">
                    <button
                        onClick={onOpenModal}
                        className="flex inset-shadow-2xs h-full w-full cursor-pointer"
                    >
                        <div id="div-ciudad" className="h-full w-[45%] inset-shadow-2xs shadow-xs rounded-l-xl text-gray-400 dark:text-gray-300 flex items-center justify-center text-sm transition-colors duration-300">
                            Helsinki, Finland
                        </div>
                        <div id="div-huesped" className="h-full w-[39%] flex items-center justify-center text-black/30 dark:text-gray-300 text-sm inset-shadow-2xs shadow transition-colors duration-300">
                            Add Guest
                        </div>
                        <div className="h-full w-[16%] inset-shadow-2xs shadow-xs rounded-r-xl flex items-center justify-center transition-colors duration-300">
                            <img src="/assets/icons/search.svg" alt="search" className="w-6 dark:invert" />
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}