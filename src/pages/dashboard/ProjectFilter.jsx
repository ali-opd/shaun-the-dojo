const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((list) => (
          <button
            className={currentFilter === list ? 'active' : ''}
            key={list}
            onClick={() => handleClick(list)}
          >
            {list}
          </button>
        ))}
      </nav>
    </div>
  );
}
