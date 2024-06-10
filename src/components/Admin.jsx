import { Link } from 'react-router-dom';
const Admin = ({ userData, setUserData }) => {
  return (
    <div className="flex flex-col items-center justify-center  h-[85vh] ">
      <div className="flex flex-col items-center text-4xl font-bold gap-5 mb-10">
        <p>Generation Thailand</p>
        <p>Home - Admin Sector</p>
      </div>
      <div className="flex gap-6">
        <Link to="/user">
          <button className="btn">User Home Sector</button>
        </Link>
        <Link to="/admin">
          <button className="btn">Admin Home Sector</button>
        </Link>
      </div>
      {/* form section */}
      <form className="flex gap-3 mt-4">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Position"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary" type="submit">
          บันทึก
        </button>
      </form>
      {/* table section */}
      <div className="md:min-w-[700px]">
        <table className="table mt-10">
          <thead className="bg-base-200 ">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.position}</td>
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-error mt-4" onClick={() => setUserData([])}>
        Delete All
      </button>
    </div>
  );
};

export default Admin;
