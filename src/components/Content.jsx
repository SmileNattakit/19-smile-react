import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-[85vh]">
      <div className="flex flex-col items-center text-4xl font-bold gap-5 mb-10">
        <p>Generation Thailand</p>
        <p>React - Assessment</p>
      </div>
      <div className="flex gap-6">
        <Link to="/user">
          <button className="btn">User Home Sector</button>
        </Link>
        <Link to="/admin">
          <button className="btn">Admin Home Sector</button>
        </Link>
      </div>
    </div>
  );
};

export default Content;
