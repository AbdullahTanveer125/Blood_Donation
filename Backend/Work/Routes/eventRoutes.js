const express=require("express")

//router object
const event_router=express.Router();


const express_formidable=require("express-formidable")





const {
    testController,
    add_event,
    get_all_events,
    get_specific_event,
    get_single_event,
    delete_event,
    delete_all_events
}=require("../Controllers/eventController")










// test || GET 
event_router.get("/event-test", testController);

// Add event
event_router.post("/add-new/:organization_id", express_formidable(), add_event);

// get events of specific / particular organization
event_router.get("/get-specific-event/:organization_id", get_specific_event);

// get all_event
event_router.get("/get-all", get_all_events);

// // get single event
event_router.get("/get-single-event/:event_id", get_single_event);

// // delete event
event_router.delete("/delete-single-event/:event_id", delete_event);

// delete all events
event_router.delete("/delete-all-events", delete_all_events);





module.exports=event_router;