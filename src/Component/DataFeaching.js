import * as React from "react";
export default function DataFeaching() {

 
  const [users, setUsers] = React.useState([]);
  const [inputText, setInputText] = React.useState([]);

   // for get the data from api
 const allUser = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    allUser();
  }, []);

// for flex box 
  function handleChange(e) {
    setInputText(e.target.value);
  }


  // for delete the user 
  const deleteUser = async (id) => {
    await fetch(`https://reqres.in/api/users/${id}`, { method: "DELETE" });
    setUsers(prev => prev.filter(h => h.id !== id));
  }

  return (
    <div className="mt-3">
      <h1>List of Users</h1>
      {/* serch by name  */}
       <div>
        <input  type="text" onChange={handleChange}  placeholder="serch by name"></input>
        <div className="">
          {users.filter(function (user) {
            return (user.first_name === inputText)
          }).map(function (user) {
            return (
              <>
                <div className="col-10 col-md-3 mt-5" key={user.id}>
                  <img key={user.avatar} src={user.avatar} alt="" />
                  <p>
                    <p>{user.first_name}</p>
                  </p>
                  <p>{user.email}</p>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div className="col-10 col-md-3 mt-5" key={user.id}>
                <img key={user.avatar} src={user.avatar} alt='' />
                <p>
                  <p>{user.first_name}</p>
                </p>
                <p>{user.email}</p>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
