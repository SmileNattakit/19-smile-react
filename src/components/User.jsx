import { Link } from 'react-router-dom';
const User = ({ userData }) => {
  return (
    <div className="flex flex-col items-center justify-center  h-[85vh] ">
      <div className="flex flex-col items-center text-4xl font-bold gap-5 mb-10">
        <p>Generation Thailand</p>
        <p>Home - User Sector</p>
      </div>
      <div className="flex gap-6">
        <Link to="/user">
          <button className="btn">User Home Sector</button>
        </Link>
        <Link to="/admin">
          <button className="btn">Admin Home Sector</button>
        </Link>
      </div>
      {/* table section */}
      <div className="md:min-w-[700px]">
        <table className="table mt-10">
          <thead className="bg-base-200 ">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
