import React from "react";

const FriendForm = () => {
  return (
    <div>
      <h1>enter new friend</h1>
      <form>
        <input name="name" placeholder="enter name..." type="text" />
        <input name="age" placeholder="enter age..." type="text" />
        <input name="email" placeholder="enter email..." type="email" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default FriendForm;
