
import { useDispatch, useSelector } from "react-redux";
import { userdelete } from "../store/reducers/userReducer";

function Users() {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  // console.log(users)

  const deleteUserHandler = (index) => {
    console.log(id);
    dispatch(userdelete(index));
  };

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className=" text-2xl font-bold text-red-900">User List</h1>
      <ul>
        {users.map((item, index) => {
          return (
            <li key={index}>
              <h1>
                {item.name}{" "}
                <span
                  onClick={() => deleteUserHandler(index)}
                  className="font-bold text-red-500 cursor-pointer"
                >
                  X
                </span>
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
