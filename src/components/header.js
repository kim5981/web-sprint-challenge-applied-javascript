const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const wrapper = document.createElement("div");
  const dateSpan = document.createElement("span");
  const hTitle = document.createElement("h1");
  const tempSpan = document.createElement("span") 

  wrapper.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp")

  dateSpan.textContent = date;
  hTitle.textContent = title;
  tempSpan.textContent = temp;

  wrapper.appendChild(dateSpan);
  wrapper.appendChild(hTitle);
  wrapper.appendChild(tempSpan);

  console.log(wrapper);

  return wrapper;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const header = document.querySelector(selector)
  header.appendChild(Header("(ㆁᴗㆁ✿)","03/11/22", "Global warming is doing its thang ~"))
}

export { Header, headerAppender }
