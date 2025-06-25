// import React, { useEffect, useState } from 'react'
// // import Event_card from '../../Event_card/Event_card'
// import axios from 'axios';
// import Event_Card from '../Event_card/Event_card';
// // import Event_Card_2 from '../Event_Card/Event_Card';
// // import Event_Card from '../Event_Card/Event_Card.jsx';

// function Event_Section() {


//     const [events, setEvents] = useState([]); // Store events from MongoDB
//     const [currentIndex, setCurrentIndex] = useState(0); // Track which events are displayed


//     // Fetch events from MongoDB
//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const response = await axios.get("http://localhost:5000/event/get-all"); // Your API route

//                 // console.log("All Events=", response)
//                 setEvents(response.data.All_Events);
//             } catch (error) {
//                 console.error("Error fetching events:", error);
//             }
//         };
//         fetchEvents();
//     }, []);

//     // Handle Next Slide
//     const nextSlide = () => {
//         if (currentIndex + number_of_event_display < events.length) {
//             setCurrentIndex(currentIndex + number_of_event_display);
//         }
//     };

//     // Handle Previous Slide
//     const prevSlide = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(currentIndex - number_of_event_display);
//         }
//     };
// // console.log("KKKKKKKKKK=======",events)


//     // Your time formatter
//     function formatTime(timeString) {
//         const [hours, minutes] = timeString.split(':');
//         const date = new Date();
//         date.setHours(hours);
//         date.setMinutes(minutes);

//         return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
//     }

//     // Your date formatter
//     function formatDate(dateString) {
//         const date = new Date(dateString);
//         return date.toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//         });
//     }


//     // Now apply to all events
//     const formattedEvents = events.map(event => {
//         return {
//             ...event,
//             display_time: formatTime(event.time),
//             display_date: formatDate(event.date),
//         };
//     });

//     console.log(formattedEvents);




//     return (
//         <div className='font-nunito px-40'>
//             <h1 className="text-4xl mt-24 mb-10 font-extrabold text-center">
//                 <span className="text-our_red">Upcoming</span> Events
//             </h1>

//             <div className="carousel w-full mb-16">



//                 {formattedEvents.map((event, index) => (
//                     <div
//                         key={index}
//                         id={`slide${index}`}
//                         className=" carousel-item relative w-full flex items-center  pt-10"
//                     >
//                         {/* Left Button */}
//                         <a
//                             href={`#slide${index === 0 ? events.length - 1 : index - 1}`}
//                             className="btn btn-circle absolute left-2 z-10"
//                         >
//                             ❮
//                         </a>

//                         {/* Image */}
//                         {/* <div className="w-full flex justify-center">
//                         <img src={image.url} alt={`Slide ${index}`} className="w-3/4" />
//                     </div> */}
//                         <div className='px-16'>
//                             <Event_Card event={event} />
//                         </div>

//                         {/* Right Button */}
//                         <a
//                             href={`#slide${(index + 1) % events.length}`}
//                             className="btn btn-circle absolute right-2 z-10"
//                         >
//                             ❯
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Event_Section


































import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Event_Card from '../Event_card/Event_card';

function Event_Section() {
    const [events, setEvents] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3); // Default number of cards to show

    // Determine number of cards to display based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fetch events from MongoDB
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/event/get-all");
                setEvents(response.data.All_Events);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
        fetchEvents();
    }, []);

    // Handle Next Slide
    const nextSlide = () => {
        if (currentIndex + visibleCards < events.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Handle Previous Slide
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Format time
    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
    }

    // Format date
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    // Apply formatting to all events
    const formattedEvents = events.map(event => ({
        ...event,
        display_time: formatTime(event.time),
        display_date: formatDate(event.date),
    }));

    // Get currently visible events
    const visibleEvents = formattedEvents.slice(currentIndex, currentIndex + visibleCards);

    return (
        <div className='font-nunito px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12'>
            <h1 className="text-3xl sm:text-4xl mt-12 mb-8 sm:mb-10 font-extrabold text-center">
                <span className="text-our_red">Upcoming</span> Events
            </h1>

            <div className="relative w-full overflow-hidden">
                {/* Carousel container */}
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                >
                    {formattedEvents.map((event, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                            style={{ width: `${100 / visibleCards}%` }}
                        >
                            <Event_Card event={event} />
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                {events.length > visibleCards && (
                    <>
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 btn btn-circle ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            ❮
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex + visibleCards >= events.length}
                            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 btn btn-circle ${currentIndex + visibleCards >= events.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            ❯
                        </button>
                    </>
                )}
            </div>

            {/* Indicator dots */}
            {events.length > visibleCards && (
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: Math.ceil(events.length / visibleCards) }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i * visibleCards)}
                            className={`w-3 h-3 rounded-full ${currentIndex >= i * visibleCards && currentIndex < (i + 1) * visibleCards ? 'bg-our_red' : 'bg-gray-300'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Event_Section;