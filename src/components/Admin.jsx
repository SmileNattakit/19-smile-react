import { Link } from 'react-router-dom';
import { useState } from 'react';
const Admin = ({ userData, setUserData }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    position: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, formData]);
    setFormData({
      name: '',
      lastname: '',
      position: '',
    });
  };
  const handleDelete = (id) => {
    const newUserData = userData.filter((user) => user.id !== id);
    setUserData(newUserData);
  };

  const inputFields = [
    { name: 'name', placeholder: 'Name' },
    { name: 'lastname', placeholder: 'Last Name' },
    { name: 'position', placeholder: 'Position' },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
      <form className="flex gap-3 mt-4" onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <input
            key={field.name}
            type="text"
            placeholder={field.placeholder}
            className="input input-bordered w-full max-w-xs"
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            required
          />
        ))}
        <button className="btn btn-primary" type="submit">
          บันทึก
        </button>
      </form>
      {/* table section */}
      <div className="md:min-w-[700px]">
        <table className="table mt-10">
          <thead className="bg-base-200 ">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
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
      <button
        className="btn btn-error mt-4"
        onClick={() =>
          userData.length > 0
            ? setUserData([])
            : alert('ไม่พบข้อมูล user ในระบบ')
        }
      >
        Delete All
      </button>
    </div>
  );
};

export default Admin;
