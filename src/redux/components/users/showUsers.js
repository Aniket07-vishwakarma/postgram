import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/user.action";
import { useEffect } from "react";

export const ShowUsers = () => {
  const dispatch = useDispatch();

  const usersResult = useSelector((state) => {
    return state?.UserReducer;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      {usersResult?.users?.length > 0 && (
        <div className="mt-1">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">User Id</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Pin code</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {usersResult?.users?.map((user) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{`${user.address?.city}, ${user.address?.suite}`}</td>
                    <td>{user.address?.city}</td>
                    <td>{user.address?.zipcode}</td>
                    <td>{user.address?.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ShowUsers;
