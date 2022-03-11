import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  //! As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //for each topic add it as a new div (assigned variable)

//  console.log(topics);
//create div, add class (NODE)
  const topicsWrap = document.createElement("div");
  topicsWrap.classList.add("topics");

  //takes in a topic to create one by..
  function topicMaker (topic) {
    // div created + class name (NODE)
    const topicItem = document.createElement("div")
    topicItem.classList.add("tab");
    //it takes the input data and uses it to set the text content
    //since the input data is an array it needs to use that array's index info instead => topic[i]
    topicItem.textContent = topic;
    return topicItem
  }
  //*topics is an array, for each item in it we will..
  topics.forEach(topic=> {
    // console.log("topic --> ", topic);
  const topicElem = topicMaker(topic);
//then appended to topicsWrap
  topicsWrap.appendChild(topicElem);
  })

  console.log("topicsWrap --->", topicsWrap);
  

  // console.log("this is topicsWrap --->", topicsWrap);
  return topicsWrap;
}



const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const entry = document.querySelector(selector)
  axios.get("http://localhost:5000/api/topics")
  .then(res => {
    console.log(res.data.topics)
    res.data.topics.forEach(topic => {
      entry.appendChild(Tabs(topic))
    })
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    console.log("aaaarrrrrghhh ")
  })
  
// const tabs = document.querySelector(".container-left  span");


}



export { Tabs, tabsAppender }
