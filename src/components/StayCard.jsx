export default function StayCard({ stay }) {
    const beds = stay.beds || 0

    return (
        <div className="flex flex-col w-full mb-8 dark:text-white">
            <img
                className="object-cover w-full rounded-3xl h-60 sm:h-64 mb-4"
                src={stay.photo}
                alt={stay.title}
            />
            <div className="flex flex-col space-y-2 px-2">
                <div className="flex justify-between items-center w-full dark:text-white">
                    <div className="flex items-center space-x-2">
                        {stay.superHost && (
                            <span className="border border-gray-800 rounded-xl px-3 py-1 text-xs font-bold text-gray-800 uppercase dark:text-white dark:border-white">
                                Super Host
                            </span>
                        )}
                        <span className="text-sm text-gray-500 font-medium dark:text-gray-300">
                            {stay.type} · {beds} {beds === 1 ? 'bed' : 'beds'}
                        </span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <img className="h-4" src="/assets/icons/star.svg" alt="Rating" />
                        <span className="text-sm font-medium dark:text-white">{stay.rating}</span>
                    </div>
                </div>
                <h3 className="font-semibold text-base text-gray-800 leading-tight dark:text-white">
                    {stay.title}
                </h3>
            </div>
        </div>
    )
}