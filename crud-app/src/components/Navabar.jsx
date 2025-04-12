const Navabar = ({ isOpen, onSearch }) => {
  return (
    <div>
      <div className="navbar  shadow-md bg-base-200">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl font-bold">Client Dashboard</a>
        </div>
        <div className="navbar-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="navbar-end mr-3">
          <a className="btn btn-primary" onClick={isOpen}>
            Create
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Navabar;
