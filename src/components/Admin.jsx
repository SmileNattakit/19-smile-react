import { Link } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Admin = ({ userData, setUserData }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    position: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[A-Za-z\u0E00-\u0E7F]+$/.test(formData.name) &&
      /^[A-Za-z\u0E00-\u0E7F]+$/.test(formData.lastname) &&
      /^[A-Za-z\u0E00-\u0E7F]+$/.test(formData.position)
    ) {
      const newUserData = { ...formData, id: uuidv4() };
      setUserData([...userData, newUserData]);
      setFormData({
        name: '',
        lastname: '',
        position: '',
      });
    } else {
      alert(
        'คุณกรอกข้อมูลไม่ถูกต้อง ต้องเป็นตัวอักษรภาษาไทย-อังกฤษเท่านั้น ไม่มีช่องว่างและ อักขระพิเศษ'
      );
    }
  };

  const handleDelete = (id) => {
    const newUserData = userData.filter((user) => user.id !== id);
    setUserData(newUserData);
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
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full max-w-xs"
          value={formData.lastname}
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Position"
          className="input input-bordered w-full max-w-xs"
          value={formData.position}
          onChange={(e) =>
            setFormData({ ...formData, position: e.target.value })
          }
          required
        />
        <button className="btn btn-primary" type="submit">
          save
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
          userData.length === 0
            ? alert('ไม่พบข้อมูล user บนระบบ')
            : window.confirm(
                'ยืนยันการลบข้อมูลทั้งหมดหรือไม่? ข้อมูลบนตารางทั้งหมดจะถูกลบ'
              )
            ? setUserData([])
            : null
        }
      >
        Delete All
      </button>
    </div>
  );
};

export default Admin;
