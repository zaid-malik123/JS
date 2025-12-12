const addFriend = document.querySelector(".add")
const isFriend = document.querySelector(".isFriend")

let friendStatus = false;

addFriend.addEventListener("click", function() {  
  if(friendStatus === true) {
    isFriend.textContent = "Friend Added"
    addFriend.textContent = "Friends"
    friendStatus = false
  }
  else {
    isFriend.textContent = "Stranger"
    addFriend.textContent = "Add Friend"
    friendStatus = true
  }
})