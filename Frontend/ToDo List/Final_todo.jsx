import "./Final_todo.css";
import { useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import {RiDeleteBinLine} from "react-icons/ri"
import {TiTick} from "react-icons/ti"
import {AiFillCaretDown} from "react-icons/ai"
import {GoTriangleUp} from "react-icons/go"



function Final_todo() {
    const [input_data, set_input_data]=useState("");
    const [list, set_list]=useState([]);
    const [show_krwany_wali_list, set_show_krwany_wali_list]=useState([]);
    const [current_option, set_current_option]=useState("All");


    const [filter_hide_class, set_filter_hide_class]=useState("filter_hide");
    const [filter_icon, set_filter_icon]=useState(false);
    

    
    function add_data(e){
      set_input_data(e.target.value);
    }
  
    function add_item(){
      if(!input_data){
        alert("Please Enter Value...")
      }else{
        set_list([...list, {text: input_data, complete: false, id: Math.random()*1000}]);
        set_show_krwany_wali_list([...list, {text: input_data, complete: false, id: Math.random()*1000}])
        set_input_data("");
      } 
    }
  
    function delete_item(id){
      console.log(id);
  
      let update_data = list.filter(function (element, index){
        return index !== id;
      });
  
      set_list(update_data);
      set_show_krwany_wali_list(update_data);
    }
  
    function complete_item(idx){
      const update=list.map(function(ele, index){
        if(idx===index){
          return { ...ele, complete: true };
        }else{return ele;}
      })
      set_list(update);
      set_show_krwany_wali_list(update);
    }

    function complete_items_list(){
      const update=list.filter(function(ele, index){
        if(ele.complete===true){
          return ele;
        }
      })
      set_show_krwany_wali_list(update);
      set_filter_icon(false);
      set_filter_hide_class("filter_hide");
      set_current_option("Complete");
    }

    function uncomplete_items_list(){
      const update=list.filter(function(ele, index){
        if(ele.complete===false){
          return ele;
        }
      })
      set_show_krwany_wali_list(update);
      set_filter_icon(false);
      set_filter_hide_class("filter_hide");
      set_current_option("Uncomplete");
    }

    function all_items_list(){
      const update=list;
      set_show_krwany_wali_list(update);
      set_filter_icon(false);
      set_filter_hide_class("filter_hide");
      set_current_option("All");
    }
    // function complete(idx){
    //   const update=list.map(function(ele, index){
    //     if(idx===index){
    //       return { ...ele, complete: true };
    //     }else{return ele;}
    //   })
    //   set_list(update);
  
    // }
    
    function remove_all(){
      set_list([]);
      set_show_krwany_wali_list([]);
    }
  
    function show_filter(){
      set_filter_hide_class("filter_option_show");
  
      if(filter_icon){
        set_filter_icon(false);
        set_filter_hide_class("filter_hide");
      }else{
        set_filter_icon(true);
      }
    }
  
    return (
      <div className="todo_parent">
  
          <div className="todo_section">
            
            <section>
              <img src="./IMAGES/todo_list.png" alt="Loading..." className="img"/>
              <h4>Add Your List Here</h4>
            </section>
  
            <section className="write_item_container">
  
              <div className="write_item_secion">
                <input type="text" placeholder="✍️ Add items..." value={input_data} onChange={add_data}/> 
                <AiOutlinePlus className="icons  plus_icon" onClick={add_item}/>
              </div>
              
              <div className="filter_container">
                <div className="filter_show">
                  <p>{current_option}</p>
  
                  <div className="icons" onClick={show_filter}>
                    {filter_icon ? (<GoTriangleUp  />) : 
                    (  <AiFillCaretDown  />)}
                  </div>
                  
                </div>
                
                <div className={filter_hide_class}>
                  <p onClick={all_items_list}> All</p>
                  <p onClick={complete_items_list}> Complete</p>
                  <p onClick={uncomplete_items_list}> Uncomplete</p>
                </div>
              </div>
            </section>
  
            <section className="show_items">
              
              {
                show_krwany_wali_list.map(function (element,index){
                  return(
                    <div className="each_item" key={index}>

                      <h3 className={`${element.complete ? "abdullah" : ""}`}>{element.text}</h3>
                      
                      <div className="tick_delete_icon_parent">
                        <TiTick className="icons" onClick={function(){complete_item(index)}} />
                        <RiDeleteBinLine className="icons  delete_icon" 
                          onClick={
                              function (){
                                delete_item(index);
                              }
                            }
                        />
                      </div>
                    </div>
                  )
  
                })
              }
  
  
  
              
            </section>
                        
            <button className="show_items  btn" data-sm-link-text="Remove All" onClick={remove_all}> remove all </button>
          </div>
      </div>
    );
}

export default Final_todo;
