const express=require("express")

//router object
const event_router=express.Router();







const {
    testController,
    add_event,
    get_all_events,
    get_single_event,
    delete_event,
    delete_all_events
}=require("../Controllers/eventController")










// test || GET 
event_router.get("/event-test", testController);

// Add event
event_router.post("/add-event",  add_event);

// get all_event
event_router.get("/get-all-event", get_all_events);

// // get single event
event_router.get("/get-event/:event_id", get_single_event);

// // delete event
event_router.delete("/delete-event/:event_id", delete_event);

// delete all events
event_router.delete("/delete-all-events", delete_all_events);





module.exports=event_router;